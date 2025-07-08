<?php

namespace App\Http\Controllers;

use App\Mail\PasswordReset;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class UserController extends Controller
{
    //

    public function register(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'name' => 'required|string|max:255',
                'email' => 'required|string|email|max:255|unique:users',
                'password' => 'required|string|min:8',
                'contact_number' => 'required|string|max:255',
                'company' => 'nullable|string|max:255',
                'address' => 'nullable|string|max:255',
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Validation error',
                    'errors' => $validator->errors()
                ], 422);
            }

            // Create user
            $user = User::create([
                'name' => $request->name,
                'email' => Str::lower($request->email),
                'password' => bcrypt($request->password),
                'contact_number' => $request->contact_number,
                'company' => $request->company,
                'address' => $request->address,
            ]);

            // Assign default role
            $user->attachRole(config('roles.models.role')::where('name', '=', 'User')->first());
            
            // Create Stripe customer
            $user->createOrGetStripeCustomer();

            // Generate JWT token
            $token = JWTAuth::fromUser($user);

            return response()->json([
                'success' => true,
                'message' => 'User successfully registered',
                'token' => $token,
                'user' => $user
            ], 201);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Registration failed',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function login(Request $request)
    {

        $input = $request->only('email', 'password');
        $jwt_token = null;
        if (!$jwt_token = JWTAuth::attempt($input)) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid Email or Password',
            ]);
        }
        // get the user
        $user = Auth::user();
        $fcmtoken = $request->input('fcm_token');
        if ($fcmtoken) {
            $user->fcm_token = $fcmtoken;
            $user->save();
        }

        // ensure portal access only for level 5+
        if (method_exists($user, 'level') && $user->level() < 5) {
            // still authenticate but flag as non-member
            return response()->json([
                'success' => true,
                'token' => $jwt_token,
                'user' => $user,
                'memberuser' => false,
            ]);
        }

        return response()->json([
            'success' => true,
            'token' => $jwt_token,
            'user' => $user,
            'memberuser' => true,
        ]);
    }

    public function logout(Request $request)
    {
        if (!User::checkToken($request)) {
            return response()->json([
                'message' => 'Token is required',
                'success' => false,
            ]);
        }

        try {
            JWTAuth::invalidate(JWTAuth::parseToken($request->token));
            return response()->json([
                'success' => true,
                'message' => 'User logged out successfully'
            ]);
        } catch (JWTException $exception) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, the user cannot be logged out'
            ]);
        }
    }

    public function updatePortal(Request $request)
    {
        $user = Auth::user();


        if ($request->password) {
            $password = bcrypt($request->password);
            $request->request->add(['password' => $password]);
        } else {
            unset($request['password']);
        }


        if ($request->image) {
            $request->validate([
                'image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            ]);
            try {
                $filePath = $this->UserImageUpload($request->image); //Passing $data->image as parameter to our created method
                $request->request->add(['photo' => $filePath]);
            } catch (\Exception $e) {
            }
        }

        if ($request->phone) {
            $request->request->add(['contact_number' => $request->phone]);
        }

        if ($request->address) {
            $request->request->add(['address' => $request->address]);
        }

        if ($request->company) {
            $request->request->add(['company' => $request->company]);
        }

        if ($request->email) {
            $request->validate([
                'email' => 'email',
            ]);
        }

        $user->update($request->only(['email', 'password', 'photo', 'contact_number', 'address', 'company']));

        return Auth::user();

    }

    public function UserImageUpload($file)
    {
        // Generate unique filename
        $image_name = Str::random(20);
        $ext = strtolower($file->getClientOriginalExtension());
        $image_full_name = $image_name . '.' . $ext;

        // Ensure public/photos directory exists
        $uploadDir = public_path('photos');
        if (! file_exists($uploadDir)) {
            mkdir($uploadDir, 0755, true);
        }

        // Move file to public/photos
        $file->move($uploadDir, $image_full_name);

        // Return web-accessible path
        return '/photos/' . $image_full_name;
    }

    public function update(Request $request)
    {
        $user = $this->getCurrentUser($request);
        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'User is not found'
            ]);
        }

        $plainPassword = $request->password;
        if ($plainPassword) {
            $password = bcrypt($request->password);
            $request->request->add(['password' => $password]);
        } else {
            unset($request['password']);
        }

        $token = $request['token'];

        unset($request['token']);

        $updatedUser = User::where('id', $user->id)->update($request->except('token'));
        $user = User::find($user->id);

        return response()->json([
            'success' => true,
            'message' => 'Information has been updated successfully!',
            'user' => $user,
            'token' => $token
        ]);
    }

    public function getCurrentUser(Request $request)
    {
        // Token validity is enforced by auth:api middleware
        $user = \Tymon\JWTAuth\Facades\JWTAuth::parseToken()->authenticate();
        // add isProfileUpdated....
        $isProfileUpdated = false;
        if ($user->isPicUpdated == 1 && $user->isEmailUpdated) {
            $isProfileUpdated = true;
        }
        $user->isProfileUpdated = $isProfileUpdated;

        // Aggregate profile data
        $subscription = $user->subscription('default');
        $status = $subscription ? $subscription->stripe_status : null;
        $plan = $subscription ? $subscription->stripe_price : null;
        $endsAt = $subscription && $subscription->ends_at ? $subscription->ends_at->toDateString() : null;
        $memberSince = $user->created_at->toDateString();

        $totalProperties = $user->properties()->count();
        $balance = method_exists($user, 'balanceFloat') ? $user->balanceFloat() : null;
        $hearings = $user->properties()->withCount('oathHearings')->get()->sum('oath_hearings_count');

        return response()->json([
            'success' => true,
            'data' => [
                'user' => $user,
                'subscription' => [
                    'status' => $status,
                    'plan' => $plan,
                    'ends' => $endsAt,
                    'memberSince' => $memberSince,
                ],
                'totalProperties' => $totalProperties,
                'balance' => $balance,
                'hearings' => $hearings,
            ],
        ]);
    }

    /**
     * Update authenticated user's profile fields
     */
    public function updateProfile(Request $request)
    {
        $user = \Tymon\JWTAuth\Facades\JWTAuth::parseToken()->authenticate();
        // Validate textual fields
        $data = $request->validate([
            'name'           => 'sometimes|string|max:255',
            'email'          => 'sometimes|email|unique:users,email,'.$user->id,
            'company'        => 'sometimes|string|max:255',
            'address'        => 'sometimes|string|max:255',
            'contact_number' => 'sometimes|string|max:255',
        ]);
        // Handle optional image upload
        if ($request->hasFile('image')) {
            $request->validate([
                'image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            ]);
            $filePath = $this->UserImageUpload($request->file('image'));
            $data['photo'] = $filePath;
        }
        $user->update($data);
        return response()->json([
            'success' => true,
            'user'    => $user,
        ]);
    }
}
