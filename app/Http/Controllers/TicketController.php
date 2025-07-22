<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Kordy\Ticketit\Helpers\LaravelVersion;
use Cache;
use Carbon\Carbon;
use Kordy\Ticketit\Models;
use Kordy\Ticketit\Models\Agent;
use Kordy\Ticketit\Models\Category;
use Kordy\Ticketit\Models\Setting;
use Kordy\Ticketit\Models\Ticket;

class TicketController extends Controller
{
    // Show all completed tickets for the current user
    public function indexComplete()
    {
        $user = auth()->user();
        $query = \DB::table('ticketit')
            ->leftJoin('ticketit_statuses', 'ticketit.status_id', '=', 'ticketit_statuses.id')
            ->leftJoin('ticketit_priorities', 'ticketit.priority_id', '=', 'ticketit_priorities.id')
            ->leftJoin('users', 'ticketit.user_id', '=', 'users.id')
            ->leftJoin('ticketit_categories', 'ticketit.category_id', '=', 'ticketit_categories.id')
            ->whereNotNull('ticketit.completed_at');

        if ($user->ticketit_admin) {
            // Admin: show all completed tickets
        } elseif ($user->ticketit_agent) {
            // Agent: show completed tickets assigned to them
            $query->where('ticketit.agent_id', $user->id);
        } else {
            // Regular user: show own completed tickets only
            $query->where('ticketit.user_id', $user->id);
        }

        $tickets = $query->select(
            'ticketit.*',
            'ticketit_statuses.name as status_name',
            'ticketit_priorities.name as priority_name',
            'users.name as owner_name',
            'ticketit_categories.name as category_name'
        )->get();
        return view('ticketit::tickets.index', compact('tickets', 'user'));
    }
    // Store a new ticket
    public function store(Request $request)
    {
        $request->validate([
            'subject' => 'required|string|max:255',
            'content' => 'required|string',
            'category_id' => 'required|exists:ticketit_categories,id',
            'priority_id' => 'required|exists:ticketit_priorities,id',
        ]);

        $ticket = new Ticket();
        $ticket->subject = $request->input('subject');
        // Save plain text in content, HTML in html column
        $htmlContent = $request->input('content');
        $plainText = strip_tags($htmlContent);
        $ticket->content = $plainText;
        $ticket->html = $htmlContent;
        $ticket->category_id = $request->input('category_id');
        $ticket->priority_id = $request->input('priority_id');
        $ticket->user_id = auth()->id();
        $ticket->status_id = 1; // Default to 'Open' or first status
        // Assign the first available agent as default
        $firstAgent = Agent::first();
        $ticket->agent_id = $firstAgent ? $firstAgent->id : 1; // fallback to 1 if no agent found
        $ticket->save();

        return redirect()->route('tickets.index')->with('status', 'Ticket created successfully!');
    }

    // Show all tickets for the current user
    public function index()
    {
        $user = auth()->user();
        $query = \DB::table('ticketit')
            ->leftJoin('ticketit_statuses', 'ticketit.status_id', '=', 'ticketit_statuses.id')
            ->leftJoin('ticketit_priorities', 'ticketit.priority_id', '=', 'ticketit_priorities.id')
            ->leftJoin('users', 'ticketit.user_id', '=', 'users.id')
            ->leftJoin('ticketit_categories', 'ticketit.category_id', '=', 'ticketit_categories.id');

        // If user is both agent and admin, treat as admin
        if ($user->ticketit_admin) {
            // Admin: show all tickets
            // No additional where clause
        } elseif ($user->ticketit_agent) {
            // Agent: show tickets assigned to them
            $query->where('ticketit.agent_id', $user->id);
        } else {
            // Regular user: show own tickets only
            $query->where('ticketit.user_id', $user->id);
        }

        $tickets = $query->select(
            'ticketit.*',
            'ticketit_statuses.name as status_name',
            'ticketit_priorities.name as priority_name',
            'users.name as owner_name',
            'ticketit_categories.name as category_name'
        )->get();

        return view('ticketit::tickets.index', compact('tickets', 'user'));
    }

    public function create()
    {
        $address = request()->address;
        list($priorities, $categories) = $this->PCS();

        return view('ticketit::tickets.create', compact('priorities', 'categories', 'address'));
    }

    protected function PCS()
    {
        // seconds expected for L5.8<=, minutes before that
        $time = LaravelVersion::min('5.8') ? 60*60 : 60;

        $priorities = Cache::remember('ticketit::priorities', $time, function () {
            return Models\Priority::all();
        });

        $categories = Cache::remember('ticketit::categories', $time, function () {
            return Models\Category::all();
        });

        $statuses = Cache::remember('ticketit::statuses', $time, function () {
            return Models\Status::all();
        });

        if (LaravelVersion::min('5.3.0')) {
            return [$priorities->pluck('name', 'id'), $categories->pluck('name', 'id'), $statuses->pluck('name', 'id')];
        } else {
            return [$priorities->lists('name', 'id'), $categories->lists('name', 'id'), $statuses->lists('name', 'id')];
        }
    }
}
