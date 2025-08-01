@php
    // Get current user - fallback if $u is not defined
    $u = $u ?? auth()->user();
    // Prevent undefined variable error
    $tickets = $tickets ?? [];
@endphp

<table class="table table-bordered table-hover">
    <thead>
        <tr>
            <th>#</th>
            <th>Subject</th>
            <th>Status</th>
            <th>Last Updated</th>
            <th>Agent ID</th>
            @if($u && ($u->isAgent() || $u->isAdmin()))
                <th>Priority</th>
                <th>Owner</th>
                <th>Category</th>
            @endif
        </tr>
    </thead>
    <tbody>
        @forelse($tickets as $ticket)
            <tr>
                <td>{{ $ticket->id }}</td>
                <td>
                    <a href="{{ route(\Kordy\Ticketit\Models\Setting::grab('main_route').'.show', $ticket->id) }}">
                        {{ $ticket->subject }}
                    </a>
                </td>
                <td>{{ $ticket->status_name ?? '' }}</td>
                <td>{{ $ticket->updated_at }}</td>
                <td>{{ $ticket->agent_id ?? '' }}</td>
                @if($u && ($u->isAgent() || $u->isAdmin()))
                    <td>{{ $ticket->priority_name ?? '' }}</td>
                    <td>{{ $ticket->owner_name ?? '' }}</td>
                    <td>{{ $ticket->category_name ?? '' }}</td>
                @endif
            </tr>
        @empty
            <tr><td colspan="8">No tickets found.</td></tr>
        @endforelse
    </tbody>
</table>