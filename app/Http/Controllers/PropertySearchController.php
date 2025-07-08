<?php

namespace App\Http\Controllers;

use App\Models\PropertyAdress;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class PropertySearchController extends Controller
{
    public function index()
    {
        return view('portal.property-search');
    }

    public function search(Request $request)
    {
        $borough = $request->get('borough');
        $house = $request->get('house');


        $search = Str::upper($request->get('term'));


        if (Str::contains($house, '-')) {
            $housenum = explode('-', $house);
            $outdoor = intval($housenum[0]);
            $indoor = intval($housenum[1]);

            $parity = $outdoor % 2;

            if ($indoor > 0)
                $parity = $indoor % 2;

            if ($parity == 0)
                $parity = 2;

            $result = PropertyAdress::with('pluto')->where([
                ['stname', 'LIKE', '%' . str_replace(' ', '%', $search) . '%'],
                ['parity', '=', $parity],
                ['boro', '=', $borough]])
                ->where('lhn_first', '<=', $outdoor)
                ->where('hhn_first', '>=', $outdoor)
                ->where('lhn_second', '<=', $indoor)
                ->where('hhn_second', '>=', $indoor)
//                ->whereRaw('CAST(SUBSTRING(lhns,2,5) AS INTEGER) <= ' . $outdoor)
//                ->whereRaw('CAST(SUBSTRING(hhns,2,5) AS INTEGER) >= ' . $outdoor)
//                ->whereRaw('CAST(SUBSTRING(lhns,7,3) AS INTEGER) <= ' . $indoor)
//                ->whereRaw('CAST(SUBSTRING(hhns,7,3) AS INTEGER) >= ' . $indoor)
                ->whereRaw('addrtype = \'\'')
                ->get(['stname', 'boro', 'bbl', 'bin', 'zipcode', 'lhnd', 'hhnd']);

            return response()->json($result);

        }
        $house = intval($house);
        $parity = $house % 2;
        if ($parity == 0)
            $parity = 2;


        $result = PropertyAdress::with('pluto')->where([
            ['stname', 'LIKE', '%' . str_replace(' ', '%', $search) . '%'],
            ['parity', '=', $parity],
            ['boro', '=', $borough]])
            ->where('lhn_first', '<=', $house)
            ->where('hhn_first', '>=', $house)
//            ->whereRaw('CAST(SUBSTRING(lhns,2,5) AS INTEGER) <= ' . $house)
//            ->whereRaw('CAST(SUBSTRING(hhns,2,5) AS INTEGER) >= ' . $house)
            ->whereRaw('addrtype = \'\'')
            ->get(['stname', 'boro', 'bbl', 'bin', 'zipcode', 'lhnd', 'hhnd']);

        return response()->json($result);

    }

    public function searchByBin(Request $request)
    {
        $result = PropertyAdress::with('pluto')->where('bin', $request->input('bin'))->whereRaw('addrtype = \'\' and (parity=\'1\' or parity=\'2\')')->get(['stname', 'boro', 'bbl', 'bin', 'zipcode','lhnd','hhnd', 'lhn_first', 'lhn_second', 'hhn_first', 'hhn_second']);

        return response()->json($result);
    }

    /**
     * Search in user's properties table (for already added properties)
     */
    public function searchUserProperties(Request $request)
    {
        $user = auth()->user();
        if (!$user) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        $search = Str::upper($request->get('term', ''));
        $borough = $request->get('borough');
        $house = $request->get('house');

        $query = $user->properties()->with([
            'documents',
            'notes', 
            'summary',
            'dobViolations',
            'dobComplaints',
            'oathHearings.ecbViolation',
            'hpdViolations',
            'hpdComplaints',
            'hpdRepairVacateOrders'
        ]);

        // Search by street name
        if ($search) {
            $query->where('stname', 'LIKE', '%' . str_replace(' ', '%', $search) . '%');
        }

        // Filter by borough
        if ($borough) {
            $query->where('boro', $borough);
        }

        // Filter by house number
        if ($house) {
            $query->where('house_number', $house);
        }

        $result = $query->get();

        return response()->json([
            'success' => true,
            'data' => $result
        ]);
    }

    /**
     * Search user's properties by BIN
     */
    public function searchUserPropertiesByBin(Request $request)
    {
        $user = auth()->user();
        if (!$user) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        $bin = $request->input('bin');
        
        $result = $user->properties()->with([
            'documents',
            'notes', 
            'summary',
            'dobViolations',
            'dobComplaints',
            'oathHearings.ecbViolation',
            'hpdViolations',
            'hpdComplaints',
            'hpdRepairVacateOrders'
        ])->where('bin', $bin)->get();

        return response()->json([
            'success' => true,
            'data' => $result
        ]);
    }

    /**
     * Public search in properties table by house number, borough, street name, or BIN
     */
    public function publicSearchProperties(Request $request)
    {
        $query = \App\Models\Property::query();

        if ($request->filled('house_number')) {
            $query->where('house_number', $request->input('house_number'));
        }
        if ($request->filled('boro')) {
            $query->where('boro', $request->input('boro'));
        }
        if ($request->filled('stname')) {
            $query->where('stname', 'ILIKE', '%' . $request->input('stname') . '%');
        }
        if ($request->filled('bin')) {
            $query->where('bin', $request->input('bin'));
        }

        $results = $query->get();

        return response()->json([
            'success' => true,
            'data' => $results
        ]);
    }

}
