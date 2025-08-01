@extends('adminlte::master')

@section('adminlte_css')
    @yield('css')
    <link rel="stylesheet" href="{{ asset('css/karbonsoft.css') }}">
@stop

@section('classes_body', 'lockscreen metalarkaplan')

@php( $password_reset_url = View::getSection('password_reset_url') ?? config('adminlte.password_reset_url', 'password/reset') )
@php( $dashboard_url = View::getSection('dashboard_url') ?? config('adminlte.dashboard_url', 'home') )

@if (config('adminlte.use_route_url', false))
    @php( $password_reset_url = $password_reset_url ? route($password_reset_url) : '' )
    @php( $dashboard_url = $dashboard_url ? route($dashboard_url) : '' )
@else
    @php( $password_reset_url = $register_url ? url($password_reset_url) : '' )
    @php( $dashboard_url = $register_url ? url($dashboard_url) : '' )
@endif

@section('body')
    <div class="lockscreen-wrapper">
        <div class="lockscreen-logo">
            <a href="{{ $dashboard_url }}">{!! config('adminlte.logo', '<b>Admin</b>LTE') !!}</a>
        </div>

        <div class="lockscreen-name">{{{ isset(Auth::user()->name) ? Auth::user()->name : Auth::user()->email }}}</div>

        <div class="lockscreen-item">
            <form method="POST" action="{{ route('password.confirm') }}" class="lockscreen-credentials ml-0">
                @csrf
                <div class="input-group">
                    <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password" placeholder="{{ __('adminlte::adminlte.password') }}" autofocus>

                    <div class="input-group-append">
                        <button type="submit" class="btn"><i class="fas fa-arrow-right text-muted"></i></button>
                    </div>
                </div>
            </form>
        </div>
        @error('password')
        <div class="lockscreen-subitem text-center" role="alert">
            <b class="text-danger">{{ $message }}</b>
        </div>
        @enderror
        <div class="help-block text-center">
            {{ __('adminlte::adminlte.confirm_password_message') }}
        </div>
        <div class="text-center">
            <a href="{{ $password_reset_url }}">
                {{ __('adminlte::adminlte.i_forgot_my_password') }}
            </a>
        </div>
    </div>
@stop

@section('adminlte_js')
    <script src="{{ asset('vendor/adminlte/dist/js/adminlte.min.js') }}"></script>
    @stack('js')
    @yield('js')
@stop
