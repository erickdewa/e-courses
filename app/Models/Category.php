<?php

namespace App\Models;

use App\Traits\Uuid;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use Uuid;

    protected $fillable = [
        'uuid', 'name'
    ];
}
