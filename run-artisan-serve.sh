#!/usr/bin/env bash

cp ./.env.example.sqlite ./.env
touch ./database/database.sqlite
cp

php artisan key:generate
php artisan migrate:refresh --seed
php artisan optimize
php artisan serve
