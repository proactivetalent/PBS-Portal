@extends('ticketit::layouts.master')

@section('page', 'Ticketit Configuration')

@section('ticketit_header')
{!! link_to_route(
    \Kordy\Ticketit\Models\Setting::grab('admin_route').'.configuration.create',
    'Create New Config', null,
    ['class' => 'btn btn-primary'])
!!}
@stop

@section('ticketit_content_parent_class', 'pl-0 pr-0 pb-0')

@section('ticketit_content')
<!-- configuration -->
    @if($configurations->isEmpty())
        <div class="text-center">No configuration settings found.</div>
    @else
        <ul class="nav nav-tabs nav-justified">
            <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#init-configs">Initial</a></li>
            <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#ticket-configs">Tickets</a></li>
            <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#email-configs">Notifications</a></li>
            <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#perms-configs">Permissions</a></li>
            <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#editor-configs">Editor</a></li>
            <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#other-configs">Other</a></li>
        </ul>

        <div class="tab-content">
            <div id="init-configs" class="tab-pane fade show active">
                @include('ticketit::admin.configuration.tables.init_table')
            </div>
            <div id="ticket-configs" class="tab-pane fade">
                @include('ticketit::admin.configuration.tables.ticket_table')
            </div>
            <div id="email-configs" class="tab-pane fade">
                @include('ticketit::admin.configuration.tables.email_table')
            </div>
            <div id="perms-configs" class="tab-pane fade">
                @include('ticketit::admin.configuration.tables.perms_table')
            </div>
            <div id="editor-configs" class="tab-pane fade">
                @include('ticketit::admin.configuration.tables.editor_table')
            </div>
            <div id="other-configs" class="tab-pane fade">
                @include('ticketit::admin.configuration.tables.other_table')
            </div>
        </div>
    @endif
<!-- // Configuration -->
@endsection
