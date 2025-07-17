@extends('ticketit::layouts.master')

@section('css')
    <link rel="stylesheet" href="{{ asset('css/summernote-overrides.css') }}">
@endsection



@section('ticketit_content')
    @include('ticketit::tickets.partials.ticket_body')
@endsection


@section('ticketit_extra_content')
    <h2 class="mt-5">Comments</h2>
    @include('ticketit::tickets.partials.comments')
    {{-- pagination --}}
    {!! $comments->render("pagination::bootstrap-4") !!}
    @include('ticketit::tickets.partials.comment_form')
@stop

@section('js')
    <script>
        $(document).ready(function() {
@section('css')
    <link rel="stylesheet" href="{{ asset('css/summernote-overrides.css') }}">
    <style>
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
            background: #6ea665 !important;
            border-radius: 6px 6px 0 0;
        }
    </style>
@endsection
                {
                    var form = $(this).attr("form");
                    $("#" + form).submit();
                }

            });
            $('#category_id').change(function(){
                var loadpage = "{!! route(\Kordy\Ticketit\Models\Setting::grab('main_route').'agentselectlist') !!}/" + $(this).val() + "/{{ $ticket->id }}";
                $('#agent_id').load(loadpage);
            });
            $('#confirmDelete').on('show.bs.modal', function (e) {
                $message = $(e.relatedTarget).attr('data-message');
                $(this).find('.modal-body p').text($message);
                $title = $(e.relatedTarget).attr('data-title');
                $(this).find('.modal-title').text($title);

                // Pass form reference to modal for submission on yes/ok
                var form = $(e.relatedTarget).closest('form');
                $(this).find('.modal-footer #confirm').data('form', form);
            });

            // Form confirm (yes/ok) handler, submits form
            $('#confirmDelete').find('.modal-footer #confirm').on('click', function(){
                $(this).data('form').submit();
            });
        });
    </script>
    @include('ticketit::tickets.partials.summernote')
@append

{{-- Always include the edit modal at the end of the page so it is present in the DOM --}}

