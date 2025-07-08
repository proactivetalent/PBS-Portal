<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserReminderSettings extends Model
{
    //
    protected $table='user_reminder_settings';
    protected $fillable = ['user_id','sent_by','dob','ecb','fdny','hpd','inspections','permits'];
    /**
     * Cast multiple settings columns to JSON arrays
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
