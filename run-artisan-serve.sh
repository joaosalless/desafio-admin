#!/usr/bin/env bash

cp ./.env.example.sqlite ./.env
touch ./database/database.sqlite

php artisan key:generate
php artisan migrate:refresh --seed
php artisan optimize
php artisan serve
