<p align="center">
<img src="https://www.electronjs.org/assets/img/logo.svg" alt="ElectronJS" width="200"/> 
<img src="https://laravel.com/img/logomark.min.svg" alt="Laravel Logo" width="170"/> 
</p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

# Electron JS with Laravel
> PHP VERSION: 8.3,
> LARAVEL VERSION 11x

## Requirements
- PHP installed on your computer (8.2 or higher)
- [Composer](https://getcomposer.org/download/)
- [Laravel](https://laravel.com/docs/8.x#via-laravel-installer)
- [NodeJs](https://nodejs.org/en/) (Recommended installing the LTS version instead of the current version)
- You will need also NPM (The Node Package Manager comes with the nodejs installation)

## How To Install
- cd app
  ``` bash
    cd laravel-electron-app
  ```
- composer install
  ``` bash
    composer install
  ```
- npm install
  ``` bash
    npm install --force
  ```
- create .env file and copy from .env.example (for database please do not change it just use sqlite)
- php artisan key:gen
  ``` bash
    php artisan key:gen
  ```
- php artisan migrate
  ``` bash
    php artisan migrate
  ```
- php artisan serve
  ``` bash
    php artisan serve
  ```
- npm run dev
  ``` bash
    npm run dev
  ```
- npm run build
  ``` bash
    npm run build
  ```
- php artisan export
  ``` bash
    php artisan export
  ```
- npm start
  ``` bash
    npm start
  ```

## Builder App
- php artisan export
  ``` bash
    php artisan export
  ```
  
- build app
    ``` bash
        npx electron-packager . crud-laravel-electron-app
        --platform=win32
        --arch=x64
        --out=application
        --overwrite
        --icon=dist/logo.ico
        --app-version=1.0.0
        --build-version=1.0.0
        --product-
        name="Crud Laravel Electron App"
        --win32metadata.CompanyName="My Company"
        --win32metadata.FileDescription="A description of my Electron app"
        --win32metadata.OriginalFilename="application.exe"
        --w in32metadata.ProductName="Crud Laravel Electron App"
    ```

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
