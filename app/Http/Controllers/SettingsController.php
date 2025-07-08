<?php

namespace App\Http\Controllers;

use App\Models\Settings;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\User;

class SettingsController extends Controller
{

    public function __construct()
    {
        $this->middleware('role:developer', ['only' => ['create']]);
        $this->middleware('role:developer', ['only' => ['destroy']]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $settings = Settings::all();

        return view('portal.settings.index')->withSettings($settings);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('portal.settings.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'key' => 'required|unique:settings',
        ]);

        $data = $request->only(['key', 'value', 'type', 'description', 'category']);
        if ($data['type'] == Settings::BOOL && !$request->has('value')) {
            $data['value'] = 0;
        }

        $setting = new Settings($data);
        $setting->save();


        Session::flash('success', "Setting: <i>" . $setting->key . "</i> successfully created.");

        return redirect()->route('settings.show', $setting->id);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Settings $setting
     * @return \Illuminate\Http\Response
     */
    public function show(Settings $setting)
    {
//        dd($article);
        return view('portal.settings.show')->withSetting($setting);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\Settings $setting
     * @return \Illuminate\Http\Response
     */
    public function edit(Settings $setting)
    {
        return view('portal.settings.edit')->withSetting($setting);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Settings $setting
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Settings $setting)
    {

        $data = $request->only(['value', 'key', 'type', 'description', 'category']);

        if (isset($data['type']) && $data['type'] == Settings::BOOL && !$request->has('value')) {
            $data['value'] = 0;
        }

        $setting->update($data);
        $setting->save();

        Session::flash('success', "Setting: <i>" . $setting->key . "</i> successfully updated.");

        return redirect()->route('settings.show', $setting->id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Settings $setting
     * @return \Illuminate\Http\Response
     */
    public function destroy(Settings $setting)
    {
        $key = $setting->key;
        $setting->delete();

        Session::flash('success', "Setting: <i>" . $key . "</i> successfully deleted.");

        return redirect()->route('settings.index');
    }

    //
    public function updateNotifySettings(Request $request)
    {
        // JWT authentication
        try {
            $user = JWTAuth::parseToken()->authenticate();
        } catch (JWTException $e) {
            return response()->json(['success' => false, 'message' => 'Unauthorized'], 401);
        }
        // Fetch incoming flags and optionally existing notifySettings
        $current = $user->notifySettings;
        $data = $request->only(['sent_by', 'dob', 'ecb', 'fdny', 'hpd', 'inspections', 'permits']);
        // If no sent_by provided, keep existing or default to empty string
        $sentBy = $data['sent_by'] ?? ($current->sent_by ?? '');
        foreach (['dob','ecb','fdny','hpd','inspections','permits'] as $flag) {
            $data[$flag] = isset($data[$flag]) ? (bool) $data[$flag] : false;
        }
        $data['sent_by'] = $sentBy;
        $setting = $user->notifySettings()->updateOrCreate(['user_id' => $user->id], $data);

        // Return all setting fields except metadata
        $result = $setting->toArray();
        unset($result['id'], $result['user_id'], $result['created_at'], $result['updated_at']);
        return response()->json(['success' => true, 'data' => $result]);
    }

    public function updateReminderSettings(Request $request)
    {
        // JWT authentication
        try {
            $user = JWTAuth::parseToken()->authenticate();
        } catch (JWTException $e) {
            return response()->json(['success' => false, 'message' => 'Unauthorized'], 401);
        }
        $currentRem = $user->reminderSettings;
        $data = $request->only(['sent_by', 'dob', 'ecb', 'fdny', 'hpd', 'inspections', 'permits']);
        // If no sent_by provided, keep existing or default to empty string
        $sentBy = $data['sent_by'] ?? ($currentRem->sent_by ?? '');
        foreach (['dob','ecb','fdny','hpd','inspections','permits'] as $flag) {
            $data[$flag] = isset($data[$flag]) ? (bool) $data[$flag] : false;
        }
        $data['sent_by'] = $sentBy;
        $setting = $user->reminderSettings()->updateOrCreate(['user_id' => $user->id], $data);

        // Return all setting fields except metadata
        $result = $setting->toArray();
        unset($result['id'], $result['user_id'], $result['created_at'], $result['updated_at']);
        return response()->json(['success' => true, 'data' => $result]);
    }

    public function updateSummarySettings(Request $request)
    {
        $data = $request->only(['sent_by', 'weekly', 'monthly', 'quarterly']);
        $request->user()->summarySettings()->updateOrCreate(['user_id' => $request->user()->id], $data);
        return redirect()->back();
    }

    // Session-based notification settings update (for portal routes)
    public function updateNotifySettingsPortal(Request $request)
    {
        $user = $request->user(); // Session-based authentication
        $current = $user->notifySettings;
        $data = $request->only(['sent_by', 'dob', 'ecb', 'fdny', 'hpd', 'inspections', 'permits']);
        
        // If no sent_by provided, keep existing or default to empty string
        $sentBy = $data['sent_by'] ?? ($current->sent_by ?? '');
        foreach (['dob','ecb','fdny','hpd','inspections','permits'] as $flag) {
            $data[$flag] = isset($data[$flag]) ? (bool) $data[$flag] : false;
        }
        $data['sent_by'] = $sentBy;
        
        $user->notifySettings()->updateOrCreate(['user_id' => $user->id], $data);
        
        // Return JSON response or redirect based on request
        if ($request->expectsJson()) {
            $result = $user->notifySettings->toArray();
            unset($result['id'], $result['user_id'], $result['created_at'], $result['updated_at']);
            return response()->json(['success' => true, 'data' => $result]);
        }
        
        return redirect()->back()->with('success', 'Notification settings updated successfully.');
    }

    // Session-based reminder settings update (for portal routes)
    public function updateReminderSettingsPortal(Request $request)
    {
        $user = $request->user(); // Session-based authentication
        $currentRem = $user->reminderSettings;
        $data = $request->only(['sent_by', 'dob', 'ecb', 'fdny', 'hpd', 'inspections', 'permits']);
        
        // If no sent_by provided, keep existing or default to empty string
        $sentBy = $data['sent_by'] ?? ($currentRem->sent_by ?? '');
        foreach (['dob','ecb','fdny','hpd','inspections','permits'] as $flag) {
            $data[$flag] = isset($data[$flag]) ? (bool) $data[$flag] : false;
        }
        $data['sent_by'] = $sentBy;
        
        $user->reminderSettings()->updateOrCreate(['user_id' => $user->id], $data);
        
        // Return JSON response or redirect based on request
        if ($request->expectsJson()) {
            $result = $user->reminderSettings->toArray();
            unset($result['id'], $result['user_id'], $result['created_at'], $result['updated_at']);
            return response()->json(['success' => true, 'data' => $result]);
        }
        
        return redirect()->back()->with('success', 'Reminder settings updated successfully.');
    }

    public function getSetting(Request $request)
    {
        $value = Settings::get($request->key);
        return response()->json([
            'success' => true,
            'data' => $value,
        ]);
    }

    /**
     * Fetch all notification settings for the authenticated user
     */
    public function getNotifySettings(Request $request)
    {
        $user = $request->user();
        $row = optional($user->notifySettings)->toArray() ?? [];
        $defaults = ['sent_by'=>'','dob'=>false,'ecb'=>false,'fdny'=>false,'hpd'=>false,'inspections'=>false,'permits'=>false];
        $settings = array_merge($defaults, $row);
        return response()->json(['success' => true, 'data' => $settings]);
    }

    /**
     * Fetch all reminder settings for the authenticated user
     */
    public function getReminderSettings(Request $request)
    {
        $user = $request->user();
        $row = optional($user->reminderSettings)->toArray() ?? [];
        $defaults = ['sent_by'=>'','dob'=>false,'ecb'=>false,'fdny'=>false,'hpd'=>false,'inspections'=>false,'permits'=>false];
        $settings = array_merge($defaults, $row);
        return response()->json(['success' => true, 'data' => $settings]);
    }

    /**
     * Fetch notification settings for session-authenticated user (portal)
     */
    public function getNotifySettingsPortal(Request $request)
    {
        $user = $request->user(); // Session-based auth
        $row = optional($user->notifySettings)->toArray() ?? [];
        $defaults = ['sent_by'=>'','dob'=>false,'ecb'=>false,'fdny'=>false,'hpd'=>false,'inspections'=>false,'permits'=>false];
        $settings = array_merge($defaults, $row);
        return response()->json(['success' => true, 'data' => $settings]);
    }

    /**
     * Fetch reminder settings for session-authenticated user (portal)
     */
    public function getReminderSettingsPortal(Request $request)
    {
        $user = $request->user(); // Session-based auth
        $row = optional($user->reminderSettings)->toArray() ?? [];
        $defaults = ['sent_by'=>'','dob'=>false,'ecb'=>false,'fdny'=>false,'hpd'=>false,'inspections'=>false,'permits'=>false];
        $settings = array_merge($defaults, $row);
        return response()->json(['success' => true, 'data' => $settings]);
    }
}
