<?php

namespace App\Models;

use App\Traits\Uuid;
use Illuminate\Database\Eloquent\Model;

class Tool extends Model
{
    use Uuid;

    protected $fillable = [
        'uuid', 'nm_tool', 'description', 'image', 'link'
    ];
}
