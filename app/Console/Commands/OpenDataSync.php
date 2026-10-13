<?php

namespace App\Console\Commands;

use App\Models\BSAApplicationStatus;
use App\Models\DepCatsPermits;
use App\Models\DobCertOccupancy;
use App\Models\DobComplaints;
use App\Models\DobJobFilings;
use App\Models\DobNowApprovedPermits;
use App\Models\DobNowElectricalPermits;
use App\Models\DobNowElevatorDeviceDetails;
use App\Models\DobNowElevatorPermits;
use App\Models\DobNowFacadeFilings;
use App\Models\DobNowJobFilings;
use App\Models\DobNowSafetyBoiler;
use App\Models\DobPermits;
use App\Models\DobViolations;
use App\Models\DotSidewalkCorrespondences;
use App\Models\DotSidewalkInspections;
use App\Models\EcbViolations;
use App\Models\FdnyActiveViolOrders;
use App\Models\FdnyCertOfFitness;
use App\Models\FdnyInspections;
use App\Models\HpdComplaintProblems;
use App\Models\HpdComplaints;
use App\Models\HpdDwellingRegistrations;
use App\Models\HpdEmergencyRepairs;
use App\Models\HpdEmergencyRepairsCharges;
use App\Models\HpdHousingLitigations;
use App\Models\HpdRegistrationsContacts;
use App\Models\HpdRepairVacateOrders;
use App\Models\HpdViolations;
use App\Models\LandmarkComplaints;
use App\Models\LandmarkPermits;
use App\Models\LandmarkViolations;
use App\Models\OathHearings;
use App\Models\ServiceRequests311;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

class OpenDataSync extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sync:data {--force}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'OpenData Sync';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $force = (bool)$this->option('force');
        Log::debug("Open Data Sync Started : " . now());

        ini_set('memory_limit', '4096M');
//        $propertyList=User::with(['properties'=>function($query){$query->withoutAll()->select(['bin','bbl']);}])->get()->pluck('properties')->flatten();
//        $bins = $propertyList->pluck('bin')->flatten();
//        $bbls = $propertyList->pluck('bbl')->flatten();
//        $needToDelete = Property::withoutAll()->WhereNotIn('bin', $bins)->WhereNotIn('bbl', $bbls)->get();
////        $needToDelete = Property::doesntHave('users')->get();
//        foreach ($needToDelete as $propToDelete) {
////            if ((Property::where('bin', $propToDelete->bin)->count() < 2 && Property::where('bbl', $propToDelete->bbl)->count()) < 2) {
//            $propToDelete->delete();
////            }
//        }
//        $users = User::whereIn('id', Property::with('user')->where('sync_at', null)->get()->pluck('user')->flatten()->pluck('id')->unique()->flatten())->get();
//        $syncstart = now();

        $datasets = [
            BSAApplicationStatus::class,
            DepCatsPermits::class,
            DobCertOccupancy::class,
            DobComplaints::class,
            DobJobFilings::class,
            DobNowApprovedPermits::class,
            DobNowElectricalPermits::class,
            DobNowElevatorPermits::class,
            DobNowFacadeFilings::class,
            DobNowJobFilings::class,
            DobNowSafetyBoiler::class,
            DobPermits::class,
            DobViolations::class,
            DotSidewalkCorrespondences::class,
            DotSidewalkInspections::class,
            EcbViolations::class,
            FdnyActiveViolOrders::class,
            FdnyCertOfFitness::class,
            FdnyInspections::class,
            // HpdComplaints / HpdComplaintProblems removed by NYC OpenData
            HpdDwellingRegistrations::class,
            HpdEmergencyRepairs::class,
            HpdEmergencyRepairsCharges::class,
            HpdHousingLitigations::class,
            HpdRepairVacateOrders::class,
            HpdViolations::class,
            LandmarkComplaints::class,
            LandmarkViolations::class,
            OathHearings::class,
            ServiceRequests311::class,
            LandmarkPermits::class,
            HpdRegistrationsContacts::class,
            DobNowElevatorDeviceDetails::class,
        ];

        foreach ($datasets as $dataset) {
            try {
                $dataset::dataSync($force);
            } catch (\Throwable $e) {
                $this->error($dataset . ' failed: ' . $e->getMessage());
                Log::error($dataset . ' sync failed: ' . $e->getMessage());
                Log::error($e->getTraceAsString());
            }
        }

//        dispatch(new SendSummary($users,$syncstart))->onQueue('oDataSync');
        Log::info('Open Data Sync Bitti : ' . now());
    }
}
