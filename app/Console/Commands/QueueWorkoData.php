<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;
// use Illuminate\Support\Facades\DB; // needed again when re-enabling sendalerts below

class QueueWorkoData extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'queuework:odata';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Run Odata Queue';

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
        Artisan::call('sync:data');
        // Alerts paused per Jon (2026-10-14) — do not re-enable until digest/age filter is ready
        // $currentprops = ['bins' => DB::table('bin_bbl_unique')->pluck('bin'), 'bbls' => DB::table('bin_bbl_unique')->pluck('bbl')];
        // Artisan::queue('mail:sendalerts', ['currentprops' => $currentprops])->onQueue('oDataSync');
        // Artisan::queue('mail:summaryreport')->onQueue('oDataSync');
    }
}
