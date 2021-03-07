<?php

namespace App\Helpers;
use Auth;
use LogicException;

class AppHelper
{
	static function rupiah($data)
	{
		return str_replace('.', '', $data);
	}
}