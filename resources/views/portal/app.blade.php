@extends('portal.master')

@section('title', 'PBS Portal | Proactive Building Solutions')
@section('meta_description', 'PBS Portal for property management, alerts, and more.')

@section('css')
    @yield('template_linked_css')
@stop


@section('js')
    @include('laravelusers::scripts.toggleText')
    @yield('template_scripts')
    <script>
        function checkChanged() {
            $(".btn-save").show();
        }
    </script>
@stop
