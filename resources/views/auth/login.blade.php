<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-54XWJQ7ZSL"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-54XWJQ7ZSL');
    </script>
    
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>PBS Portal | Login</title>
    
    <!-- Google Font: Poppins -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="{{ asset('vendor/fontawesome-free/css/all.min.css') }}">
    <!-- Base CSS -->
    <link rel="stylesheet" href="{{ asset('css/pbs-theme.css') }}">
    <!-- Login Redesign CSS -->
    <link rel="stylesheet" href="{{ asset('css/login-redesign.css') }}">
    
    <!-- Custom font for heading -->
    <style>
        @font-face {
            font-family: 'Conthrax';
            src: url('{{ asset('fonts/conthrax.ttf') }}') format('truetype');
            font-weight: 600;
            font-style: normal;
            font-display: swap;
        }
        
        /* Apply to login heading for certainty */
        .login-heading {
            font-family: 'Conthrax', sans-serif !important;
        }
    </style>
</head>

@php
    $login_url = route('login');
    $register_url = route('register');
    $password_reset_url = route('password.request');
@endphp

<body>
    <!-- Navigation bar with logo -->
    <div class="nav-strip">
        <a href="{{ env('NEXTJS_FRONTEND_URL', 'https://pbs.nyc') }}/">
            <img src="{{ asset('pics/LOGO.png') }}" alt="PBS NYC Logo" class="nav-logo" onerror="this.onerror=null; this.style.display='none'; this.parentNode.insertBefore(document.createTextNode('PBS NYC'), this);">
        </a>
    </div>
   <div class="login-wrapper">
    <div class="login-container login-container-bg">
        <img src="{{ asset('pics/LOGO.png') }}" alt="PBS NYC Logo" class="login-logo" onerror="this.onerror=null; this.style.display='none'; this.parentNode.insertBefore(document.createTextNode('PBS NYC'), this);">
        <h1 class="login-heading">LOGIN</h1>
        
        <form action="{{ $login_url }}" method="post" class="login-form">
            {{ csrf_field() }}
            
            @if ($errors->any())
                <div class="error-message">
                    {{ $errors->first() }}
                </div>
            @endif
            
            <div class="form-group">
                <label for="email" class="form-label">Email</label>
                <input type="email" name="email" id="email" class="form-input" value="{{ old('email') }}" required autofocus>
            </div>
            
            <div class="form-group">
                <label for="password" class="form-label">Password</label>
                <input type="password" name="password" id="password" class="form-input" required>
            </div>
            
            <div class="form-group checkbox-group">
                <input type="checkbox" name="remember" id="remember" class="form-checkbox">
                <label for="remember" class="form-label checkbox-label">Remember Me</label>
            </div>
            
            <button type="submit" class="login-button">
                Sign In
            </button>
            
            <div class="links-section">
                <a href="{{ $password_reset_url }}" class="login-link">
                    Forgot Password?
                </a>
                <a href="{{ $register_url }}" class="login-link">
                    Register
                </a>
            </div>
            
            <div class="register-link-container">
                <a href="{{route('alerts')}}#alert" class="register-link">
                    <span class="white">New Member?</span>&nbsp;
                    <span class="green">Register Here</span>
                </a>
            </div>
        </form>
    </div>
    
     <!-- Footer -->
        @include('auth.loginfooter')
    </div>
</body>
</html>