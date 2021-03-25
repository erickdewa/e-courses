<?php

namespace App\Http\Middleware;

use Closure;
use JWTAuth;

class Admin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $admin = JWTAuth::user();
        if($admin->level_id != "1"){
            return response()->json([
                'status' => false,
                'message' => 'Not Found !',
            ], 404);
        }

        return $next($request);
    }
}