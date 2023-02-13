FROM php:8.1

RUN apt-get update -y && apt-get install -y openssl zip unzip git
RUN curl -sS https://getcomposer.org/install | php -- --install-dir=/user/local/bin --filename=composer

RUN docker-php-ext-install mysqli pdo pdo_mysql

WORKDIR /app/backend

COPY . .


Expose 8000
CMD php artisan serve --host 0.0.0.0