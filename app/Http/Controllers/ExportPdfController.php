<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserCourses;
use PDF;

class ExportPdfController extends Controller
{
    public function cetakStruk($uuid)
    {
    	$data = UserCourses::with('courses', 'method', 'user')
    	->where('uuid', $uuid)->first();

    	$data->tanggal = $this->tanggal($data->created_at);

    	$pdf = PDF::loadview('laporan.struk.Index', compact('data'));
        // return $pdf->download('Struk-Pembelian.pdf');
        return $pdf->stream();
    }

    public function tanggal($date)
    {   
        $bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
        return date('d', strtotime($date)).' '.$bulan[intval(date('m', strtotime($date)))-1].' '.date('Y', strtotime($date));
    }
}
