@extends('ticketit::layouts.master')
@section('page', 'Create Ticket')
@section('page_title', 'Create New Ticket')

@php
    // Create a default setting object if not provided to prevent errors
    $setting = $setting ?? (object) [
        'main_route' => 'tickets',
        'paginate_items' => 25,
        'length_menu' => [10, 25, 50, 100]
    ];
    
    // Set default values for editor variables to prevent undefined variable errors
    $editor_enabled = $editor_enabled ?? true;
    $codemirror_enabled = $codemirror_enabled ?? false;
    $editor_locale = $editor_locale ?? 'en-US';
    $codemirror_theme = $codemirror_theme ?? 'default';
    $editor_options = $editor_options ?? '{}';
@endphp

@section('ticketit_content')
    {!! CollectiveForm::open([
                    'route'=> 'tickets.store',
                    'method' => 'POST'
                    ]) !!}        <div class="form-group row">
            {!! CollectiveForm::label('subject', 'Subject:', ['class' => 'col-lg-2 col-form-label']) !!}
            <div class="col-lg-10">
                {!! CollectiveForm::text('subject', isset($address) ? $address : null , ['class' => 'form-control', 'required' => 'required']) !!}
                <small class="form-text text-muted">Please enter a brief description of your issue</small>
            </div>
        </div>
        <div class="form-group row">
            {!! CollectiveForm::label('content', 'Description:', ['class' => 'col-lg-2 col-form-label']) !!}
            <div class="col-lg-10">
                {!! CollectiveForm::textarea('content', null, ['class' => 'form-control summernote-editor', 'rows' => '15', 'required' => 'required']) !!}
                <small class="form-text text-muted">Please describe your issue in detail</small>
            </div>
        </div>
        <div class="form-row mt-5">
            <div class="form-group col-lg-4 row">
                {!! CollectiveForm::label('priority', 'Priority:', ['class' => 'col-lg-6 col-form-label']) !!}
                <div class="col-lg-6">
                    {!! CollectiveForm::select('priority_id', $priorities, null, ['class' => 'form-control', 'required' => 'required']) !!}
                </div>
            </div>
            <div class="form-group offset-lg-1 col-lg-4 row">
                {!! CollectiveForm::label('category', 'Category:', ['class' => 'col-lg-6 col-form-label']) !!}
                <div class="col-lg-6">
                    {!! CollectiveForm::select('category_id', $categories, null, ['class' => 'form-control', 'required' => 'required']) !!}
                </div>
            </div>
            {!! CollectiveForm::hidden('agent_id', 'auto') !!}
        </div>
        <br>
        <div class="form-group row">
            <div class="col-lg-10 offset-lg-2">
                {!! link_to_route('tickets.index', 'Back', null, ['class' => 'btn btn-link', 'style' => 'color: #6ea665 !important;']) !!}
                {!! CollectiveForm::submit('Submit', ['class' => 'btn btn-primary', 'style' => 'background-color: #38403e !important; border-color: #38403e !important;']) !!}
            </div>
        </div>
    {!! CollectiveForm::close() !!}
@endsection

@section('js')
    @include('ticketit::tickets.partials.summernote')
@append