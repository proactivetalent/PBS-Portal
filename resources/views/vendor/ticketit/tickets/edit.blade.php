<div class="modal fade" id="ticket-edit-modal" tabindex="-1" role="dialog" aria-labelledby="ticket-edit-modal-Label">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content" style="overflow:visible;">
            {!! CollectiveForm::model($ticket, [
                 'route' => [\Kordy\Ticketit\Models\Setting::grab('main_route').'.update', $ticket->id],
                 'method' => 'PATCH',
                 'class' => 'form-horizontal'
             ]) !!}
            <div class="modal-header">
                <h5 class="modal-title" id="ticket-edit-modal-Label" style="color: #f8f9fa !important;">{{ $ticket->subject }}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    {!! CollectiveForm::text('subject', $ticket->subject, ['class' => 'form-control', 'required']) !!}
                </div>
                <div class="form-group row">
            {!! CollectiveForm::label('content', 'Description:', ['class' => 'col-lg-2 col-form-label']) !!}
            <div class="col-lg-10">
                {!! CollectiveForm::textarea('content', null, ['class' => 'form-control', 'rows' => '5', 'required' => 'required']) !!}
            </div>
        </div>
                <div class="form-group">
                    {!! CollectiveForm::label('priority_id', 'Priority:', ['class' => '']) !!}
                    {!! CollectiveForm::select('priority_id', $priority_lists, $ticket->priority_id, ['class' => 'form-control']) !!}
                </div>
                <div class="form-group">
                    {!! CollectiveForm::label('agent_id', 'Agent:', [ 'class' => '' ]) !!}
                    {!! CollectiveForm::select('agent_id', $agent_lists, $ticket->agent_id, ['class' => 'form-control']) !!}
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
                {!! CollectiveForm::submit('Save Changes', ['class' => 'btn btn-primary', 'style' => 'min-width:140px; font-weight:600; height:48px; background:#38403e; border-color:#38403e; color:#f8f9fa;']) !!}
            </div>
            {!! CollectiveForm::close() !!}
        </div>
    </div>


</div>
