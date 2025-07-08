@extends('frontend.master')

@php($pageTitle ='Calender')

@section('meta')
    <meta name="description" content="Schedule appointments and consultations with PBS.NYC property management experts. Book your time using our convenient calendar system.">
@stop

@section('css')
    {{--css kodları--}}

@stop

@section('slider')
    {{--slider bölümü--}}

@stop


@section('content')
    {{--content bölümü--}}
    <!-- Content
    ============================================= -->

    <section class="bg-transparent" id="content">

        <div class="content-wrap">

                        <div class="calendly-inline-widget" data-url="https://calendly.com/proactivebuildingsolutions/30mins" style="min-width:320px;height:630px;"></div>


        </div>

    </section><!-- #content end -->
@stop


@section('js')
    <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
    {{--javascript bölümü--}}
@stop
