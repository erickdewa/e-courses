<?php

namespace App\Models;

use App\Traits\Uuid;
use Illuminate\Database\Eloquent\Model;

class Level extends Model
{
    use Uuid;

    protected $fillable = [
    	'uuid', 'name'
    ];
}
