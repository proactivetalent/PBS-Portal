@section('css')
    
    <style>
        #ticket-edit-modal .modal-dialog {
            max-width: 900px;
            margin: 2rem auto;
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
<div class="modal fade" id="ticket-edit-modal" tabindex="-1" role="dialog" aria-labelledby="ticket-edit-modal-Label">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            {!! CollectiveForm::model($ticket, [
                 'route' => [\Kordy\Ticketit\Models\Setting::grab('main_route').'.update', $ticket->id],
                 'method' => 'PATCH',
                 'class' => 'form-horizontal'
             ]) !!}
            <div class="modal-header">
                <h5 class="modal-title" id="ticket-edit-modal-Label" style="color: #ffff !important;">{{ $ticket->subject }}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    {!! CollectiveForm::text('subject', $ticket->subject, ['class' => 'form-control', 'required']) !!}
                </div>
                <div class="form-group">
                    <textarea class="form-control summernote-editor" rows="5" required name="content" cols="50">{!! htmlspecialchars($ticket->html) !!}</textarea>
                </div>

                <div class="form-group">
                    {!! CollectiveForm::label('priority_id', 'Priority:', ['class' => '']) !!}
                    {!! CollectiveForm::select('priority_id', $priority_lists, $ticket->priority_id, ['class' => 'form-control']) !!}
                </div>

                <div class="form-group">
                    {!! CollectiveForm::label('agent_id', 'Agent:', [
                        'class' => ''
                    ]) !!}
                    {!! CollectiveForm::select(
                        'agent_id',
                        $agent_lists,
                        $ticket->agent_id,
                        ['class' => 'form-control']) !!}
                </div>

                <div class="form-group">
                    {!! CollectiveForm::label('category_id',  'Category:', ['class' => '']) !!}
                    {!! CollectiveForm::select('category_id', $category_lists, $ticket->category_id, ['class' => 'form-control']) !!}
                </div>

                <div class="form-group">
                    {!! CollectiveForm::label('status_id', 'Status:', ['class' => '']) !!}
                    {!! CollectiveForm::select('status_id', $status_lists, $ticket->status_id, ['class' => 'form-control']) !!}
                </div>
            </div>
            <div class="modal-footer" style="gap: 16px;">
                <button type="button" class="btn btn-secondary" style="min-width:120px; font-weight:600; height:48px;" data-dismiss="modal">Close</button>
                {!! CollectiveForm::submit('Save Changes', ['class' => 'btn btn-primary', 'style' => 'min-width:140px; font-weight:600; height:48px;']) !!}
            </div>
            {!! CollectiveForm::close() !!}
        </div>
    </div>
</div>