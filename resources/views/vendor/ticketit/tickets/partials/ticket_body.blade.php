@php $user = auth()->user(); @endphp
<div class="card mb-3">
    <div class="card-body row">
        <div class="col-md-6">
            <p><strong>Owner:</strong> {{ $ticket->user_id == $user->id ? $user->name : $ticket->user->name }}</p>
            <p>
                <strong>Status:</strong> 
                @if( $ticket->isComplete() && ! \Kordy\Ticketit\Models\Setting::grab('default_close_status_id') )
                    <span style="color: blue">Complete</span>
                @else
                    <span style="color: {{ $ticket->status->color }}">{{ $ticket->status->name }}</span>
                @endif
            </p>
            <p>
                <strong>Priority:</strong> 
                <span style="color: {{ $ticket->priority->color }}">
                    {{ $ticket->priority->name }}
                </span>
            </p>
        </div>
        <div class="col-md-6">
            <p> <strong>Responsible:</strong> {{ $ticket->agent_id == $user->id ? $user->name : $ticket->agent->name }}</p>
            <p>
                <strong>Category:</strong> 
                <span style="color: {{ $ticket->category->color }}">
                    {{ $ticket->category->name }}
                </span>
            </p>
            <p> <strong>Created:</strong> {{ $ticket->created_at->diffForHumans() }}</p>
            <p> <strong>Last update:</strong> {{ $ticket->updated_at->diffForHumans() }}</p>
        </div>
    </div>
</div>

{!! $ticket->html !!}




<div class="card mb-3" style="background:#38403e; border-radius:10px; margin-bottom:30px;">
    <div class="card-body flex-row align-items-center flex-wrap" style="gap: 10px; background:#38403e;">
        @if(!$ticket->completed_at && (isset($close_perm) && $close_perm == 'yes'))
            {!! link_to_route(\Kordy\Ticketit\Models\Setting::grab('main_route').'.complete', 'Mark Complete', $ticket->id,
                ['class' => 'btn', 'style' => 'background:#6ea665; border-color:#6ea665; color:#fff;']) !!}
        @elseif($ticket->completed_at && (isset($reopen_perm) && $reopen_perm == 'yes'))
            {!! link_to_route(\Kordy\Ticketit\Models\Setting::grab('main_route').'.reopen', 'Reopen Ticket', $ticket->id,
                ['class' => 'btn', 'style' => 'background:#6ea665; border-color:#6ea665; color:#fff;']) !!}
        @endif

        @if($user->isAgent() || $user->isAdmin())
            <button type="button" class="btn btn-info" id="show-edit-modal">Edit</button>
        @endif

        @if($user->isAdmin())
            {!! CollectiveForm::open([
                'method' => 'DELETE',
                'route' => [
                    \Kordy\Ticketit\Models\Setting::grab('main_route').'.destroy',
                    $ticket->id
                ],
                'id' => "delete-ticket-$ticket->id",
                'style' => 'display:inline'
            ]) !!}
            <button type="submit" class="btn btn-danger" onclick="return confirm('Are you sure you want to delete this ticket?');">Delete</button>
            {!! CollectiveForm::close() !!}
        @endif
    </div>
</div>

@if($user->isAgent() || $user->isAdmin())
    <div id="edit-modal-container" style="display:none">
        @include('ticketit::tickets.edit')
    </div>
    <style>
    /* Ensure modal always has correct styling */
    #ticket-edit-modal .modal-dialog {
        max-width: 900px;
        margin: 4.5rem auto 2rem auto;
    }
    #ticket-edit-modal .modal-content {
        padding: 20px 10px 10px 10px;
        border-radius: 8px;
    }
    #ticket-edit-modal .modal-header {
        border-bottom: 1px solid #e5e5e5;
    }
    #ticket-edit-modal .modal-footer {
        border-top: 1px solid #e5e5e5;
        display: flex;
        justify-content: flex-end;
        gap: 10px;
    }
    #ticket-edit-modal .modal-body {
        overflow-x: auto;
    }
    #ticket-edit-modal .note-editor,
    #ticket-edit-modal .note-editor .note-toolbar,
    #ticket-edit-modal .note-editor .note-toolbar .note-btn-group {
        width: 100% !important;
        min-width: 0;
        box-sizing: border-box;
    }
    #ticket-edit-modal .note-toolbar {
        background: #38403e !important;
        border-radius: 6px 6px 0 0;
    }
    #ticket-edit-modal input,
    #ticket-edit-modal select,
    #ticket-edit-modal textarea {
        padding: 0 !important;
    }
    </style>
    <script>
    document.addEventListener('DOMContentLoaded', function() {
        var editBtn = document.getElementById('show-edit-modal');
        if (editBtn) {
            editBtn.addEventListener('click', function() {
                var modalHtml = document.getElementById('edit-modal-container').innerHTML;
                // Remove any existing modal
                var existing = document.getElementById('ticket-edit-modal');
                if (existing) existing.remove();
                // Insert modal into body
                var tempDiv = document.createElement('div');
                tempDiv.innerHTML = modalHtml;
                var modalElem = tempDiv.firstElementChild;
                document.body.appendChild(modalElem);
                // Show modal
                $('#ticket-edit-modal').modal('show');
                // Remove modal from DOM after it's closed so it can be re-opened
                $('#ticket-edit-modal').on('hidden.bs.modal', function() {
                    $(this).remove();
                });
            });
        }
    });
    </script>
@endif
