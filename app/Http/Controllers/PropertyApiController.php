<?php

namespace App\Http\Controllers;

use App\Models\PropertyAdress;
use App\Models\Property;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class PropertyApiController extends Controller
{
    /**
     * Search property_address_directory table by house number, street, and borough
     * 
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function searchByAddress(Request $request)
    {
        // Validate input
        $request->validate([
            'house_number' => 'required|string',
            'street' => 'required|string',
            'borough' => 'required|integer|between:1,5'
        ]);

        $house = $request->input('house_number');
        $street = Str::upper($request->input('street'));
        $borough = $request->input('borough');

        // Handle house number with indoor/outdoor format
        if (Str::contains($house, '-')) {
            $housenum = explode('-', $house);
            $outdoor = intval($housenum[0]);
            $indoor = intval($housenum[1]);

            $parity = $outdoor % 2;
            if ($indoor > 0) {
                $parity = $indoor % 2;
            }
            if ($parity == 0) {
                $parity = 2;
            }

            $result = PropertyAdress::with('pluto')->where([
                ['stname', 'LIKE', '%' . str_replace(' ', '%', $street) . '%'],
                ['parity', '=', $parity],
                ['boro', '=', $borough]
            ])
            ->where('lhn_first', '<=', $outdoor)
            ->where('hhn_first', '>=', $outdoor)
            ->where('lhn_second', '<=', $indoor)
            ->where('hhn_second', '>=', $indoor)
            ->whereRaw('addrtype = \'\'')
            ->limit(50)
            ->get(['stname', 'boro', 'bbl', 'bin', 'zipcode', 'lhnd', 'hhnd', 'lhn_first', 'lhn_second', 'hhn_first', 'hhn_second']);

        } else {
            $house = intval($house);
            $parity = $house % 2;
            if ($parity == 0) {
                $parity = 2;
            }

            $result = PropertyAdress::with('pluto')->where([
                ['stname', 'LIKE', '%' . str_replace(' ', '%', $street) . '%'],
                ['parity', '=', $parity],
                ['boro', '=', $borough]
            ])
            ->where('lhn_first', '<=', $house)
            ->where('hhn_first', '>=', $house)
            ->whereRaw('addrtype = \'\'')
            ->limit(50)
            ->get(['stname', 'boro', 'bbl', 'bin', 'zipcode', 'lhnd', 'hhnd', 'lhn_first', 'lhn_second', 'hhn_first', 'hhn_second']);
        }

        return response()->json([
            'success' => true,
            'data' => $result,
            'count' => $result->count()
        ]);

        /*
        // NEW LOGIC - COMMENTED OUT
        $house = $request->input('house_number');
        $street = Str::upper($request->input('street'));
        $borough = $request->input('borough');

        // Search in properties table
        $query = Property::without([
            'fdnyCertOfFitness', 'fdnyActiveViolOrders', 'fdnyInspections',
            'landmarkComplaints', 'landmarkPermits', 'landmarkViolations',
            'serviceRequests311', 'otherInspections'
        ]);

        // Filter by street name
        $query->where('stname', 'ILIKE', '%' . $street . '%');

        // Filter by borough
        $query->where('boro', $borough);

        // Filter by house number
        $query->where('house_number', $house);

        $result = $query->limit(50)->get([
            'id', 'user_id', 'bin', 'bbl', 'boro', 'block', 'lot', 
            'house_number', 'stname', 'lat', 'lng', 'zipcode', 
            'created_at', 'updated_at'
        ]);

        return response()->json([
            'success' => true,
            'data' => $result,
            'count' => $result->count()
        ]);
        */
    }

    /**
     * Search property_address_directory table using BIN
     * 
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function searchByBin(Request $request)
    {
        // Validate input
        $request->validate([
            'bin' => 'required|string'
        ]);

        $bin = $request->input('bin');

        $result = PropertyAdress::with('pluto')
            ->where('bin', $bin)
            ->whereRaw('addrtype = \'\' and (parity=\'1\' or parity=\'2\')')
            ->get(['stname', 'boro', 'bbl', 'bin', 'zipcode', 'lhnd', 'hhnd', 'lhn_first', 'lhn_second', 'hhn_first', 'hhn_second']);

        return response()->json([
            'success' => true,
            'data' => $result,
            'count' => $result->count()
        ]);

        /*
        // NEW LOGIC - COMMENTED OUT
        $bin = $request->input('bin');

        // Search in properties table without loading problematic relationships
        $result = Property::without([
            'fdnyCertOfFitness', 'fdnyActiveViolOrders', 'fdnyInspections',
            'landmarkComplaints', 'landmarkPermits', 'landmarkViolations',
            'serviceRequests311', 'otherInspections'
        ])
        ->where('bin', $bin)
        ->limit(50)
        ->get([
            'id', 'user_id', 'bin', 'bbl', 'boro', 'block', 'lot', 
            'house_number', 'stname', 'lat', 'lng', 'zipcode', 
            'created_at', 'updated_at'
        ]);

        return response()->json([
            'success' => true,
            'data' => $result,
            'count' => $result->count()
        ]);
        */
    }

    /**
     * Add a property to properties table with user_id equal to current user id
     * 
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function addProperty(Request $request)
    {
        // Validate input
        $request->validate([
            'bin' => 'required|string'
        ]);

        $user = Auth::user();
        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'Unauthorized'
            ], 401);
        }

        $bin = $request->input('bin');

        // Find the property in the property_address_directory table
        $propertyAddress = PropertyAdress::where('bin', $bin)
            ->whereRaw('addrtype = \'\' and (parity=\'1\' or parity=\'2\')')
            ->first();
            
        if (!$propertyAddress) {
            return response()->json([
                'success' => false,
                'message' => 'Property not found in address directory'
            ], 404);
        }

        // Check if the user already has a property with the same BIN
        $existing = $user->properties()->where('bin', $bin)->first();
        if ($existing) {
            return response()->json([
                'success' => false,
                'message' => 'Property already exists in your portfolio'
            ], 409);
        }

        // Create a new property record in the properties table
        $newProperty = $user->properties()->create([
            'bin' => $propertyAddress->bin,
            'bbl' => $propertyAddress->bbl,
            'boro' => $propertyAddress->boro,
            'block' => $propertyAddress->block ?? null,
            'lot' => $propertyAddress->lot ?? null,
            'house_number' => $propertyAddress->lhnd ?? null, // Use low house number as default
            'stname' => $propertyAddress->stname,
            'lat' => $propertyAddress->pluto ? $propertyAddress->pluto->lat : null,
            'lng' => $propertyAddress->pluto ? $propertyAddress->pluto->lng : null,
            'zipcode' => $propertyAddress->zipcode,
        ]);

        // Return all user properties with summary data (following the same pattern as other APIs)
        $properties = $user->properties()->with([
            'documents',
            'notes', 
            'summary',
            'dobViolations',
            'dobComplaints',
            'oathHearings.ecbViolation',
            'hpdViolations',
            'hpdComplaints',
            'hpdRepairVacateOrders'
        ])->get();

        return response()->json([
            'success' => true,
            'message' => 'Property added successfully',
            'data' => $properties
        ]);
    }
} 