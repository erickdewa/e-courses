<html>
	<title>Struk Pembelian</title>
<head>
	<style>
		@page { margin: 0.7cm 0.9cm;}
		body{
			background-color: #FFF;
			margin: 0px;
			padding: 0px;
			font-size: 11px;
			font-family: times-roman;
		}
		.table{
			border-collapse: collapse;
		}
		.header-title{
			text-align: center;
			font-size: 18px;
			font-weight: 500;
		}
		.header-info tr{
			line-height: 15px;
		}
		.header-nomor{
			text-align: left;
			font-size: 12px;
		}
		.body{
			margin-top: 15px;
		}
		.body th, .body td{
			text-align: center;
			border: 1px solid #000000;
		}

		.tandatangan{
			margin-top: 15px;
			border-collapse: collapse;
		}
		.title-ttd{
			font-size: 12px;
			font-weight: 500;
			text-align: center;
		}
		.body-ttd{
			text-align: center;
			height: 150px;
		}
		.no-border{
			border: 1px solid #FFFFFF;
		}

		.ttd-img{
			position: absolute;
			top: -70px;
			left: 80px;
			width: 90px;
			height: 70px;
		}
		.ttd-name{
			font-weight: 400;
			position: absolute;
			height: 15px;
			width: 120px;
			left: 65px;
			top: -4px;
		}
	</style>
</head>
<body>
	<div class="main">
		<table class="header" width="100%">
			<tr>
				<td colspan="3" class="header-center" align="center">
					<div class="header-title" style="padding-bottom: 25px;">STRUK PEMBELIAN</div>
				</td>
			</tr>
			<tr>
				<th class="header-nomor" width="70">No. Order</th>
				<td class="header-nomor" width="3">:</td>
				<td class="header-nomor">{{ $data->id }}</td>
			</tr>
			<tr>
				<th class="header-nomor" width="70">Taggal</th>
				<td class="header-nomor" width="3">:</td>
				<td class="header-nomor">{{ $data->tanggal }}</td>
			</tr>
		</table>
		<table class="table" border="1" width="100%">
			<thead>
				<tr>
					<th width="25">No</th>
					<th>Nama Courses</th>
					<th>Durasi</th>
					<th>Harga</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td width="25" style="text-align: center">1</td>
					<td style="padding: auto 10px">{{ $data->courses->name }}</td>
					<td style="text-align: center;">1 Tahun</td>
					<td style="padding-left: 10px">Rp.{{ number_format($data->courses->price,0,",",".") }}</td>
				</tr>
				<tr>
					<td colspan="3" style="font-weight: 600; text-align: right; padding-right: 10px">Total</td>
					<td style="padding-left: 10px">Rp.{{ number_format($data->courses->price,0,",",".") }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</body>
</html>
