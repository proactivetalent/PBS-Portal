@php
    // Get current user - fallback if $u is not defined
    $u = $u ?? auth()->user();
@endphp

<table class="ticketit-table table table-striped  dt-responsive nowrap" style="width:100%">
    <thead>
        <tr>
            <td>#</td>
            <td>Subject</td>
            <td>Status</td>
            <td>Last Updated</td>
            <td>Agent</td>
          @if( $u && ($u->isAgent() || $u->isAdmin()) )
            <td>Priority</td>
            <td>Owner</td>
            <td>Category</td>
          @endif
        </tr>
    </thead>
</table>