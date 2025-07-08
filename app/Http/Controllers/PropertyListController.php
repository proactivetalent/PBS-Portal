<?php

namespace App\Http\Controllers;

use App\Models\Property;
use App\Models\PropertyAdress;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class PropertyListController extends Controller
{
    public function index()
    {
        $properties = auth()->user()->properties()->withoutAll()->get();
        return view('portal.content.property-list',compact('properties'));
    }

    public function add(Request $request)
    {
        $bin = $request->get('bin');
        $bbl = $request->get('bbl');

        $result = PropertyAdress::where([
            ['bin', '=', $bin],
            ['bbl', '=', $bbl]])->firstOrFail();
        if ($result) {

            $user = auth()->user();
            // if a previous property with this BIN exists, reuse its address details
            $template = Property::where('bin', $result->bin)->first();
            if ($template) {
                $data = [
                    'bin'          => $template->bin,
                    'boro'         => $template->boro,
                    'block'        => $template->block,
                    'lot'          => $template->lot,
                    'bbl'          => $template->bbl,
                    'house_number' => $template->house_number,
                    'stname'       => $template->stname,
                    'lat'          => $template->lat,
                    'lng'          => $template->lng,
                    'zipcode'      => $template->zipcode,
                ];
            } else {
                $data = [
                    'bin'          => $result->bin,
                    'boro'         => $result->boro,
                    'block'        => $result->block,
                    'lot'          => $result->lot,
                    'bbl'          => $result->bbl,
                    'house_number' => '',
                    'stname'       => $result->stname ?? '',
                    'lat'          => $result->pluto ? $result->pluto->lat : 0.0,
                    'lng'          => $result->pluto ? $result->pluto->lng : 0.0,
                ];
            }
            try {
                $user->properties()->create($data);
            } catch (\Exception $e) {
                // swallow or log error
            }
            $properties = auth()->user()->properties()->withoutAll()->get();
            return response()->json([
                'success' => true,
                'data'    => $properties,
            ]);
        }
        return response()->noContent();
    }

    /**
     * Add a property by address via JWT-protected API
     */
    public function addByAddress(Request $request)
    {
        // Validate input fields
        $request->validate([
            'street'  => 'required|string',
            'house'   => 'required|string',
            'borough' => 'required|integer',
        ]);
        $user = auth()->user();
        // Map input `street` to the stname lookup
        $street  = Str::upper($request->get('street'));
        $house   = $request->get('house');
        $borough = $request->get('borough');

        // Determine parity and numeric house
        if (Str::contains($house, '-')) {
            [$outdoor, $indoor] = array_map('intval', explode('-', $house));
            $parity = ($indoor > 0 ? $indoor : $outdoor) % 2 ?: 2;
        } else {
            $outdoor = intval($house);
            $parity  = $outdoor % 2 ?: 2;
        }

        // Lookup in property_address table
        try {
            $result = PropertyAdress::where('stname', 'LIKE', '%' . str_replace(' ', '%', $street) . '%')
                ->where('boro', $borough)
                ->where('parity', $parity)
                ->where('lhn_first', '<=', $outdoor)
                ->where('hhn_first', '>=', $outdoor)
                ->where('addrtype', '=', '')
                ->firstOrFail();
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Property address not found',
            ], 404);
        }

        // Create or get Property and attach to user
        // Insert a new property row for this user
        try {
            $user->properties()->create([
                'bin'          => $result->bin,
                'boro'         => $result->boro,
                'block'        => $result->block,
                'lot'          => $result->lot,
                'bbl'          => $result->bbl,
                'house_number' => $house,
                'stname'       => $result->stname ?? $street,
                'lat'          => $result->pluto ? $result->pluto->lat : 0.0,
                'lng'          => $result->pluto ? $result->pluto->lng : 0.0,
            ]);
        } catch (\Exception $e) {
            // swallow errors or return failure
        }

        // Return updated list of user's properties
        $properties = $user->properties()->withoutAll()->get();
        return response()->json([
            'success' => true,
            'data'    => $properties,
        ]);
    }

    /**
     * Remove a property by BIN via JWT-protected API
     */
    public function removeByBin($bin)
    {
        $user = auth()->user();
        // Find property by BIN
        $property = Property::where('bin', $bin)->first();
        if (! $property) {
            return response()->json([
                'success' => false,
                'message' => 'Property not found',
            ], 404);
        }
        // Detach property from user
        $user->properties()->detach($property->id);
        // Return updated list of user's properties
        $properties = $user->properties()->withoutAll()->get();
        return response()->json([
            'success' => true,
            'data'    => $properties,
        ]);
    }

    /**
     * Remove a property by its primary ID via JWT-protected API
     */
    public function removeById($id)
    {
        $user = auth()->user();
        // Only remove if this property belongs to current user
        $property = $user->properties()->where('id', $id)->first();
        if (! $property) {
            return response()->json([
                'success' => false,
                'message' => 'Property not found for this user',
            ], 404);
        }
        // Delete the property row entirely
        $property->delete();
        // Return updated list
        $properties = $user->properties()->withoutAll()->get();
        return response()->json([
            'success' => true,
            'data'    => $properties,
        ]);
    }
}
