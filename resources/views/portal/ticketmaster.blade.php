@extends('portal.master')

@section('title', 'PBS Portal | Ticket Management')
@section('meta_description', 'Manage support tickets and customer service requests in the PBS Portal.')

@section('plugins.Datatables', true)

@section('content')
    @yield('auth_content')
    @yield('content')
@stop

@section('js')
    @stack('js')
    @yield('js')
@stop