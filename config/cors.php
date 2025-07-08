<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | Here you may configure your settings for cross-origin resource sharing
    | or "CORS". This determines what cross-origin operations may execute
    | in web browsers. You are free to adjust these settings as needed.
    |
    | To learn more: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    |
    */
 
    'paths' => ['*', 'api/*', 'sanctum/csrf-cookie', 'portal/*'],

    'allowed_methods' => ['*'],

    // Only allow frontend dev origin when using credentials
    'allowed_origins' => [
        'http://localhost:3000',
        'http://127.0.0.1:3000',
        'https://github.com/saidlv/pbs.nyc',
        'https://pbs-compliance-solutions-txdp.vercel.app',
    ],

    'allowed_origins_patterns' => [],

    // Explicitly allow required headers when sending credentials
    'allowed_headers' => [
        'Content-Type',
        'Accept',
        'Authorization',
        'X-Requested-With',
        'X-CSRF-TOKEN',
        'X-XSRF-TOKEN',
    ],

    // Expose CSRF headers to the client
    'exposed_headers' => [
        'X-CSRF-TOKEN',
        'X-XSRF-TOKEN',
    ],

    'max_age' => 0,

    'supports_credentials' => true,
];