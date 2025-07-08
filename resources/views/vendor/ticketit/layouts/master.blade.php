@extends('portal.master')

@section('title', 'PBS Portal | Support Tickets')
@section('meta_description', 'Manage and track support tickets and customer service requests in the PBS Portal.')

@section('content_header')
    <h1 class="m-0 text-dark">
        <i class="fas fa-ticket-alt"></i> 
        @if(View::hasSection('page_title'))
            @yield('page_title')
        @else
            @yield('page')
        @endif
    </h1>
@stop

@section('content')
    @include('ticketit::shared.header')

    <div class="row">
        <div class="col-12">
            {{-- Navigation is now handled by the shared nav file --}}
            @include('ticketit::shared.nav')
            
            @if(View::hasSection('ticketit_content'))
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-baseline flex-wrap" style="background-color: #38403e; color: #ffffff;">
                        <h5 class="mb-0" style="color: #ffffff;">
                            @if(View::hasSection('page_title'))
                                @yield('page_title')
                            @else
                                @yield('page')
                            @endif
                        </h5>
                        <div>
                            @yield('ticketit_header')
                        </div>
                    </div>
                    <div class="card-body @yield('ticketit_content_parent_class')">
                        @yield('ticketit_content')
                    </div>
                </div>
            @endif
            
            @yield('ticketit_extra_content')
        </div>
    </div>
@stop
