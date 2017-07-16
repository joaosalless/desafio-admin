#!/usr/bin/env bash

cp ./.env.example.docker-compose ./.env

docker-compose run app php artisan key:generate
docker-compose run app php artisan migrate:refresh --seed
docker-compose run app php artisan optimize
docker-compose up
