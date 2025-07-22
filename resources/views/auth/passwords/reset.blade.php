<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-563Q5G8V');</script>
    <!-- End Google Tag Manager -->
    
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>PBS Portal | Reset Password</title>
    
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
    $password_reset_url = route('password.update');
@endphp

<body>
     <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-563Q5G8V"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

    <!-- Navigation bar with logo -->
    <div class="nav-strip">
        <a href="{{ env('NEXTJS_FRONTEND_URL', 'https://pbs.nyc') }}/">
            <img src="{{ asset('pics/LOGO.png') }}" alt="PBS NYC Logo" class="nav-logo" onerror="this.onerror=null; this.style.display='none'; this.parentNode.insertBefore(document.createTextNode('PBS NYC'), this);">
        </a>
    </div>
    <div class="login-wrapper">
        <div class="login-container login-container-bg">
            <img src="{{ asset('pics/LOGO.png') }}" alt="PBS NYC Logo" class="login-logo" onerror="this.onerror=null; this.style.display='none'; this.parentNode.insertBefore(document.createTextNode('PBS NYC'), this);">
            <p class="login-heading">RESET PASSWORD</p>
            
            <form action="{{ $password_reset_url }}" method="post" class="login-form">
                {{ csrf_field() }}
                <input type="hidden" name="token" value="{{ $token }}">
                
                @if ($errors->any())
                    <div class="error-message">
                        {{ $errors->first() }}
                    </div>
                @endif
                
                <div class="form-group">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" name="email" id="email" class="form-input {{ $errors->has('email') ? 'is-invalid' : '' }}" value="{{ old('email') }}" required autofocus>
                </div>
                
                <div class="form-group">
                    <label for="password" class="form-label">New Password</label>
                    <input type="password" name="password" id="password" class="form-input {{ $errors->has('password') ? 'is-invalid' : '' }}" required>
                </div>
                
                <div class="form-group">
                    <label for="password_confirmation" class="form-label">Confirm New Password</label>
                    <input type="password" name="password_confirmation" id="password_confirmation" class="form-input {{ $errors->has('password_confirmation') ? 'is-invalid' : '' }}" required>
                </div>
                
                <button type="submit" class="login-button">
                    Reset Password
                </button>
                
                <div class="register-link-container">
                    <a href="{{ $login_url }}" class="register-link">
                        <span class="white">Back to</span>&nbsp;
                        <span class="green">Login</span>
                    </a>
                </div>
            </form>
        </div>
        
  <!-- Footer -->
        @include('auth.loginfooter')
    </div>
</body>
</html>

