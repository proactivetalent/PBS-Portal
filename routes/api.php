<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Handle OPTIONS requests for all routes
Route::options('{any}', function() {
    return response('', 200);
})->where('any', '.*');

// CSRF Token route
Route::get('/csrf-token', function (Request $request) {
    return response()->json(['token' => csrf_token()]);
});

Route::get('pbs/public/api/csrf-token', function (Request $request) {
    return response()->json(['token' => csrf_token()]);
});

Route::get('user', 'UserController@getCurrentUser');
Route::post('user/register', 'UserController@register');
Route::post('user/login', 'UserController@login');
Route::post('user/update', 'UserController@update');
Route::get('user/logout', 'UserController@logout');
Route::middleware('auth:api')->get('user/properties', 'ApiController@getProperties');

// Property search endpoints (matching portal logic)
Route::post('search-property', 'PropertySearchController@search');
Route::post('search-property-by-bin', 'PropertySearchController@searchByBin');

// User property search endpoints (search in user's properties table)
Route::middleware('auth:api')->post('search-user-properties', 'PropertySearchController@searchUserProperties');
Route::middleware('auth:api')->post('search-user-properties-by-bin', 'PropertySearchController@searchUserPropertiesByBin');

// Property management endpoints (matching portal logic)
Route::middleware('auth:api')->post('add-property-to-user', 'FrontendController@apiAddPropertyToUser');
Route::middleware('auth:api')->post('delete-property-from-user', 'FrontendController@apiDeletePropertyFromUser');
Route::middleware('auth:api')->post('delete-single-property-from-user', 'FrontendController@apiDeleteSinglePropertyFromUser');

// Legacy endpoints for deleting properties (original, working version)
Route::middleware('auth:api')->delete('user/properties/{bin}', 'PropertyListController@removeByBin');
Route::middleware('auth:api')->delete('user/properties/id/{id}', 'PropertyListController@removeById');

Route::post('user/DOBliveViolations', 'ApiController@getDOBviols');
Route::post('user/DOBswo', 'ApiController@getDOBswo');
Route::post('user/DOBcomplaints', 'ApiController@getDOBcomplaints');

Route::post('user/ECBliveHearings', 'ApiController@getECBhearings');
Route::post('user/ECBliveDue', 'ApiController@getECBpenalties');
Route::post('user/ECBdefaulted', 'ApiController@getECBdefaulted');
Route::post('user/ECBimposed', 'ApiController@getECBimposed');
Route::post('user/ECBoverpaid', 'ApiController@getECBoverpaid');
Route::post('user/ECBcorrections', 'ApiController@getECBcorrections');
Route::post('user/ECBcomplaints', 'ApiController@getECBcomplaints');
Route::post('user/ECBviolations', 'ApiController@getECBviolations');

Route::post('user/FDNYliveHearings', 'ApiController@getFDNYhearings');
Route::post('user/FDNYcorrections', 'ApiController@getFDNYcorrections');
Route::post('user/FDNYliveDue', 'ApiController@getFDNYpenalties');
Route::post('user/FDNYactiveViolOrders', 'ApiController@getFDNYviolationorders');
Route::post('user/FDNYcomplaints', 'ApiController@getFDNYcomplaints');

Route::post('user/HPDliveViolations', 'ApiController@getHPDviolations');
Route::post('user/HPDcomplaints', 'ApiController@getHPDcomplaints');
Route::post('user/HPDrepairs', 'ApiController@getHPDrepairs');
Route::post('user/HPDlitigations', 'ApiController@getHPDlitigations');
Route::post('user/HPDregistrations', 'ApiController@getHPDregistrations');

Route::post('user/InspectionsDOBboiler', 'ApiController@getInspectionsDOBboiler');
Route::post('user/InspectionsDEPboiler', 'ApiController@getInspectionsDEPboiler');
Route::post('user/InspectionsFacade', 'ApiController@getInspectionsFacade');
Route::post('user/InspectionsOthers', 'ApiController@getInspectionsOthers');

Route::post('user/PermitsDOBpermits', 'ApiController@getPermitsDOBpermits');
Route::post('user/PermitsDOBNOWpermits', 'ApiController@getPermitsDOBNOWpermits');
Route::post('user/PermitsDOBElevatorpermits', 'ApiController@getPermitsDOBElevatorpermits');
Route::post('user/PermitsDOBahv', 'ApiController@getPermitsDOBahv');
Route::post('user/PermitsFDNYAccount', 'ApiController@getPermitsFDNYAccount');
Route::post('user/PermitsElevator', 'ApiController@getPermitsElevator');
Route::post('user/DobJobFilings', 'ApiController@getDobJobFilings');
Route::post('user/DobNowJobFilings', 'ApiController@getDobNowJobFilings');
Route::post('user/BsaApplicationStatus', 'ApiController@getBsaApplicationStatus');

Route::get('user/articles', 'ApiController@getLastArticles');
Route::post('user/articlecontent', 'ApiController@getArticleContent');
Route::post('user/sendemail','ApiController@contactUs');

Route::post('user/notifications','ApiController@getNotifications');
Route::post('user/readNotification','ApiController@readNotification');

// JWT-protected fetch endpoints for notification and reminder settings
Route::middleware('auth:api')->get('user/notify-settings', 'SettingsController@getNotifySettings');
Route::middleware('auth:api')->get('user/reminder-settings', 'SettingsController@getReminderSettings');
// JWT-protected delete endpoint to remove a property by its database ID
Route::middleware('auth:api')->delete('user/properties/id/{id}', 'PropertyListController@removeById');
// JWT-based setting update endpoints (manual token parse)
Route::post('user/notify-settings', 'SettingsController@updateNotifySettings');
Route::post('user/reminder-settings', 'SettingsController@updateReminderSettings');

Route::post('contact', 'Api\ContactController@submit');

// Allow both GET and POST on /user/me for current user so clients won't hit a MethodNotAllowed error
Route::middleware('auth:api')->match(['get','post'], 'user/me', 'UserController@getCurrentUser');

// Alias /user/profile to get profile data
Route::middleware('auth:api')->match(['get','post'], 'user/profile', 'UserController@getCurrentUser');

// Update authenticated user's profile
Route::middleware('auth:api')->post('user/profile/update', 'UserController@updateProfile');

// Public search in properties table (not protected)
Route::post('public-search-properties', 'PropertySearchController@publicSearchProperties');

// New Property API endpoints
Route::post('property/search-by-address', 'PropertyApiController@searchByAddress');
Route::post('property/search-by-bin', 'PropertyApiController@searchByBin');
Route::middleware('auth:api')->post('property/add', 'PropertyApiController@addProperty');

// Add an existing property to user (by id)
Route::middleware('auth:api')->post('add-existing-property-to-user', 'FrontendController@apiAddExistingPropertyToUser');

//endpoint for newsletter subscription
Route::post('/subscribe', 'FrontendController@subscribeNewsLetter')->name('api.subscribe')->middleware('throttle:10,1');

// Optionally, comment out the new get-properties-of-user route if you want to avoid confusion
// Route::middleware('auth:api')->get('get-properties-of-user', 'FrontendController@apiGetPropertyList');



