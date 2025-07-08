<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserNotifySettings extends Model
{
    //
    protected $table='user_notify_settings';
    protected $fillable =['user_id','sent_by','dob','ecb','fdny','hpd','inspections','permits'];
    /**
     * Cast these settings to boolean since your DB columns are boolean
     */
    protected $casts = [
        'dob'         => 'boolean',
        'ecb'         => 'boolean',
        'fdny'        => 'boolean',
        'hpd'         => 'boolean',
        'inspections' => 'boolean',
        'permits'     => 'boolean',
    ];

}
