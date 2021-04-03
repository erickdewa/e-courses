<?php

namespace App\Models;

use App\Traits\Uuid;
use Illuminate\Database\Eloquent\Model;

class PayMethod extends Model
{
    use Uuid;

    protected $fillable = [
        'uuid', 'nm_method', 'nomor', 'nm_account', 'active', 'image'
    ];
}
