<?php

namespace App\Models;

use App\Traits\Uuid;
use Illuminate\Database\Eloquent\Model;

class WebConfig extends Model
{
    use Uuid;

    protected $fillable = [
    	'uuid', 'name', 'description', 'ilustration', 'facebook', 'twitter', 'instagram', 'telegram', 'github', 'youtube'
    ];
}
