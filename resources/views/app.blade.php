<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
        <title>{{env('APP_TITLE')}}</title>
       <link rel="stylesheet" type="text/css" href="{{ mix('/css/app.css') }}"/>
    </head>
    <body class="layout-fill">
      <div id="gmfApp" class="layout-fill">
        <router-view></router-view>
        <md-toast ref="rootToast"></md-toast>
      </div>
      <script src="{{ mix('/js/manifest.js')}}"></script>
      <script src="{{ mix('/js/vendor.js')}}"></script>
      <script src="{{ mix('/js/app.js')}}"></script>
    </body>
</html>
