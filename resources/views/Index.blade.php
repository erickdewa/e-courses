<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <title>E-Courses</title>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="author" content="Erick Dewa Pranata">
        <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'>

        <script src="{{ asset('assets/plugin/jquery-3.5/jquery.min.js') }}"></script>
        <script src="{{ asset('assets/plugin/select2-4.1/select2.min.js') }}"></script>
        <meta name="csrf-token" content="{{csrf_token()}}">
        <link href="{{ mix('css/app.css') }}" rel="stylesheet">
    </head>
    <body>
        <div class="main">
            <div id="app">
                <app></app>
            </div>
        </div>
        <script src="{{ mix('js/app.js') }}"></script>
        <script src="{{ mix('js/bootstrap.js') }}"></script>
        <script src="{{ mix('js/index.js') }}"></script>

        {{-- Plugin --}}
        <div id="script"></div>
    </body>
</html>
