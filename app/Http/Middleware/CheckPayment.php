<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Foundation\Http\Middleware\CheckForMaintenanceMode as Middleware;

class CheckPayment extends Middleware
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $user = $request->user();
        
        // Skip check for admin users (level 5 and above)
        if (!$user || $user->level() >= 5) {
            return $next($request);
        }
        
        // Check if user has an active subscription
        $hasActiveSubscription = false;
        
        try {
            // Check if user is subscribed to 'default' plan
            if ($user->subscribed('default')) {
                $subscription = $user->subscription('default');
                // Make sure subscription exists and is not canceled
                if ($subscription && !$subscription->canceled()) {
                    $hasActiveSubscription = true;
                }
            }
        } catch (\Exception $e) {
            // If there's any error checking subscription, treat as no subscription
            $hasActiveSubscription = false;
        }
        
        // Redirect to subscription page if no active subscription
        if (!$hasActiveSubscription) {
            return redirect(route('payment.subscribe'));
        }

        return $next($request);
    }
}
