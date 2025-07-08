@extends('ticketit::layouts.master')

@section('page', 'Support Tickets')
@section('page_title', 'My Tickets')

@php
    // Create a default setting object if not provided to prevent errors
    $setting = $setting ?? (object) [
        'main_route' => 'tickets',
        'paginate_items' => 25,
        'length_menu' => [10, 25, 50, 100]
    ];
    
    // Get current user - fallback if $u is not defined
    $u = $u ?? auth()->user();
@endphp

@section('ticketit_header')
    <a href="{{ route('tickets.create') }}" class="btn btn-primary" style="background-color: #38403e !important; border-color: #38403e !important; color: #ffffff !important;">
        <i class="fas fa-plus"></i> Create New Ticket
    </a>
@stop

@section('ticketit_content_parent_class', 'pl-1 pr-1')

@section('ticketit_content')
    <div id="message"></div>
    
    @include('ticketit::tickets.partials.datatable')
@stop

@section('css')
    <style>
        /* PBS Theme for Tickets DataTable */
        .table thead th {
            background-color: #38403e !important;
            color: #ffffff !important;
            border-bottom: 2px solid #2c3430 !important;
        }
        
        .table tbody tr:hover {
            background-color: rgba(220, 226, 225, 0.1) !important;
        }
        
        .table tbody tr {
            border-bottom: 1px solid rgba(220, 226, 225, 0.3) !important;
        }
        
        .btn-primary {
            background-color: #38403e !important;
            border-color: #38403e !important;
            color: #ffffff !important;
        }
        
        .btn-primary:hover {
            background-color: #2c3430 !important;
            border-color: #2c3430 !important;
        }
        
        .badge-success {
            background-color: #5d8a5f !important;
        }
        
        .badge-warning {
            background-color: #b8a05c !important;
        }
        
        .badge-danger {
            background-color: #a55c5c !important;
        }
        
        .badge-info {
            background-color: #6c8a93 !important;
        }
        
        /* DataTables pagination styling */
        .dataTables_wrapper .dataTables_paginate .paginate_button.current {
            background: #38403e !important;
            color: white !important;
            border-color: #38403e !important;
        }
        
        .dataTables_wrapper .dataTables_paginate .paginate_button:hover {
            background: #616c66 !important;
            color: white !important;
            border-color: #616c66 !important;
        }
        
        /* Card styling */
        .card {
            border: 1px solid #dce2e1 !important;
            box-shadow: 0 2px 4px rgba(56, 64, 62, 0.05) !important;
        }
        
        .card-header {
            background-color: #f8f9fa !important;
            border-bottom: 1px solid #dce2e1 !important;
            color: #2c3430 !important;
        }
    </style>
@stop

@section('js')
    <script>
        $(document).ready(function() {
            $('.table').DataTable({
                processing: false,
                serverSide: false,
                responsive: true,
                pageLength: {{ $setting->paginate_items ?? 25 }},
                lengthMenu: {!! json_encode($setting->length_menu ?? [10, 25, 50, 100]) !!},                ajax: '{!! route(($setting->main_route ?? 'tickets').'.data', $complete ?? 0) !!}',
                @if( $u && ($u->isAgent() || $u->isAdmin()) )
                order: [[5, "desc"]],
                @else
                order: [[3, "desc"]],
                @endif                language: {
                    decimal: "",
                    emptyTable: "No data available in table",
                    info: "Showing _START_ to _END_ of _TOTAL_ entries",
                    infoEmpty: "Showing 0 to 0 of 0 entries",
                    infoFiltered: "(filtered from _MAX_ total entries)",
                    infoPostFix: "",
                    thousands: ",",
                    lengthMenu: "Show _MENU_ entries",
                    loadingRecords: "Loading...",
                    processing: "Processing...",
                    search: "Search:",
                    zeroRecords: "No matching records found",
                    paginate: {
                        first: "First",
                        last: "Last",
                        next: "Next",
                        previous: "Previous"
                    },
                    aria: {
                        sortAscending: ": activate to sort column ascending",
                        sortDescending: ": activate to sort column descending"
                    },
                },
                columns: [
                    {data: 'id', name: 'ticketit.id'},
                    {data: 'subject', name: 'subject'},
                    {data: 'status', name: 'ticketit_statuses.name'},                    {data: 'updated_at', name: 'ticketit.updated_at'},
                    {data: 'agent', name: 'users.name'},
                    @if( $u && ($u->isAgent() || $u->isAdmin()) )
                    {data: 'priority', name: 'ticketit_priorities.name'},
                    {data: 'owner', name: 'users.name'},
                    {data: 'category', name: 'ticketit_categories.name'}
                    @endif
                ]
            });
        });
    </script>
@append
