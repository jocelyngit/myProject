<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use Illuminate\Support\Facades\DB;

class PreleveCommission extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'preleve:commission';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Prélever la commission de chaque membre à la fin du mois';

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
        //

        // test de la tache preleve commission

        $this->info('Display this on the screen');

        $this->error('Something went wrong!');

        $this->line('Display this on the screen');
    }
}
