<link rel="stylesheet" href="{{ asset('css/summernote-overrides.css') }}">
{!! CollectiveForm::open(['method' => 'POST', 'route' => \Kordy\Ticketit\Models\Setting::grab('main_route').'-comment.store', 'class' => '']) !!}


{!! CollectiveForm::hidden('ticket_id', $ticket->id ) !!}


{!! CollectiveForm::textarea('content', null, ['class' => 'form-control summernote-editor', 'rows' => "3"]) !!}

{!! CollectiveForm::submit('Reply', ['class' => 'btn btn-outline-primary pull-right mt-3 mb-3']) !!}

{!! CollectiveForm::close() !!}
    