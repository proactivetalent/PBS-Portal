<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

//    protected $redirectTo = RouteServiceProvider::HOME;    
    /**
     * Where to redirect users after login.
     *
     * @return string 
     * */
    public function redirectTo()
    {
        $user = Auth::user();
        
        // Admin users (level 5+) go directly to portal
        if ($user && $user->level() >= 5) {
            return '/portal';
        }
        
        // For Gold users (level 4), redirect to portal
        if ($user && $user->level() >= 4) {
            return '/portal';
        }
        
        // For regular users, check if they have an active subscription
        if ($user) {
            try {
                $hasActiveSubscription = false;
                
                if ($user->subscribed('default')) {
                    $subscription = $user->subscription('default');
                    if ($subscription && !$subscription->canceled()) {
                        $hasActiveSubscription = true;
                    }
                }
                
                // If user has active subscription, redirect to portal
                if ($hasActiveSubscription) {
                    return '/portal';
                }
                
                // If no active subscription, redirect to subscribe page
                return '/portal/subscribe';
                
            } catch (\Exception $e) {
                // If there's any error checking subscription, redirect to subscribe page
                return '/portal/subscribe';
            }
        }
        
        return '/portal/subscribe';
    }

    protected function authenticated(Request $request, $user)
    {
        try {
            // Generate JWT token
            $token = JWTAuth::fromUser($user);
            
            if ($request->expectsJson()) {
                return response()->json([
                    'success' => true,
                    'token' => $token,
                    'user' => $user
                ]);
            }
            
            return redirect()->intended($this->redirectTo());
            
        } catch (JWTException $e) {
            // If JWT generation fails, still allow session login
            if ($request->expectsJson()) {
                return response()->json([
                    'success' => true,
                    'user' => $user
                ]);
            }
            
            return redirect()->intended($this->redirectTo());
        }
    }

    protected function credentials(Request $request)
    {
        $array = $request->only($this->username(), 'password');
        if (isset($array[$this->username()])) {
            $array[$this->username()] = Str::lower($array[$this->username()]);
        }
        return $array;
    }

    protected function sendFailedLoginResponse(Request $request)
    {
        if ($request->expectsJson()) {
            return response()->json([
                'success' => false,
                'message' => trans('auth.failed')
            ], 401);
        }

        return redirect()->back()
            ->withInput($request->only($this->username(), 'remember'))
            ->withErrors([
                $this->username() => trans('auth.failed'),
            ]);
    }

    /**
     * Log the user out of the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function logout(Request $request)
    {
        $this->guard()->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        if ($response = $this->loggedOut($request)) {
            return $response;
        }

        return redirect(config('app.url') . '/portal/login');
    }
}
