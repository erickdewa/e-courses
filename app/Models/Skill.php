<?php

namespace App\Models;

use App\Traits\Uuid;
use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    use Uuid;

    protected $fillable = [
        'uuid', 'nm_skill', 'description', 'image', 'link'
    ];
}
