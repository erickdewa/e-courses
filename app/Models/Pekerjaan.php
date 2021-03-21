<?php

namespace App\Models;

use App\Traits\Uuid;
use Illuminate\Database\Eloquent\Model;

class Pekerjaan extends Model
{
    use Uuid;

    protected $fillable = [
        'uuid', 'nm_pekerjaan'
    ];
}
