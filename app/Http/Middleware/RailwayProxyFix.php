<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class RailwayProxyFix
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        // Only apply fixes on Railway environment
        if (env('RAILWAY_ENVIRONMENT_ID') || str_contains(env('APP_URL', ''), 'railway.app')) {
            // Force HTTPS detection
            $request->server->set('HTTPS', 'on');
            $request->server->set('REQUEST_SCHEME', 'https');
            
            // Set proper forwarded headers
            if (!$request->header('X-Forwarded-Proto')) {
                $request->headers->set('X-Forwarded-Proto', 'https');
            }
            
            // Ensure Laravel detects the correct URL
            if (!$request->header('X-Forwarded-Host')) {
                $host = parse_url(env('APP_URL'), PHP_URL_HOST);
                if ($host) {
                    $request->headers->set('X-Forwarded-Host', $host);
                }
            }
        }
        
        return $next($request);
    }
}
