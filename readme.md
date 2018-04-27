# ghub-laravel
ghub laravel
## Documentation


## git clone project
```shell
git clone https://github.com/gyonyou/ghub-laravel.git
```

## set project config
```shell
cd suite-laravel
rename composer.json.prod composer.json composer.json.prod
```


## init project
```shell

composer install

composer run-script gmf-install
```

## install data
```shell
php artisan gmf:install --force
```

## to pdf 
https://www.cnblogs.com/woider/p/7003481.html


## u9 trial dll

//1.下载dynwrap.dll
    //2.把该文件放入system32 ,php/ext/,SysWOW64 下，修改php.ini,增加extension=dynwrap.dll
    //3.注册dynwrap.dll： cmd regsvr32 C:/Windows/System32/dynwrap.dll
    //4.将要调用的dll放入system32
    /*
      $dw = new COM("DynamicWrapper");
      $dw->Register("Dll1test.dll", "add", "f=s", "i=uu", "r=l");
      $ch = $dw->add(11,22); //dll的add函数调用

      在Register("AES.dll", "EnAES_Path", 'i=sss', "f=s", "r=l");这里面的几个参数：
      第一个参数是你DLL文件名，
      第二个参数是你DLL里面的方法名，
      第三个参数i=sss 表示你dll的方法参数的对应的类型，如：你的dll有两个参数是文本的型的，那就I=ss  ！
      第四个参数"f=s"一般固定
      最后一个参数是你返回的类型！因为PHP调用非COM组件的dll返回s 也就是string类型接收不到为空

      http://www.borncity.com/web/WSHBazaar1/WSHDynaCall.htm

      i=describes the number and data type of the functions parameters
      f=type of call _stdcall or _cdecl. So it can work with both MS C++ and Borland C++. Default to _stdcall. If that doesn't work use _cdecl. If that doesn't work good luck!
      r=return data type.

      {'a', sizeof(IDispatch*), VT_DISPATCH}, // a IDispatch*
      {'c', sizeof(unsigned char), VT_I4}, // c signed char
      {'d', sizeof(double), VT_R8}, // d 8 byte real
      {'f', sizeof(float), VT_R4}, // f 4 byte real
      {'k', sizeof(IUnknown*), VT_UNKNOWN}, // k IUnknown*
      {'h', sizeof(long), VT_I4}, // h HANDLE
      {'l', sizeof(long), VT_I4}, // l long
      {'p', sizeof(void*), VT_PTR}, // p pointer
      {'s', sizeof(BSTR), VT_LPSTR}, // s string
      {'t', sizeof(short), VT_I2}, // t short
      {'u', sizeof(UINT), VT_UINT}, // u unsigned int
      {'w', sizeof(BSTR), VT_LPWSTR}, // w wide string