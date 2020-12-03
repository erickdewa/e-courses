<?php

namespace App\Models;

use App\Traits\Uuid;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;
    use Uuid;

    protected $fillable = [
        'uuid', 'name', 'username', 'email', 'password', 'confirm', 'level_id'
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];
}
