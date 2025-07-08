# syntax=docker/dockerfile:1

# 1. Base PHP image
FROM php:8.2-cli

# 2. Install system dependencies and PHP extensions
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libpq-dev \
    libzip-dev \
    zip \
    nodejs npm && \
    docker-php-ext-install pdo pdo_mysql pdo_pgsql zip bcmath && \
    rm -rf /var/lib/apt/lists/*

# 3. Copy Composer binary
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# 4. Set working directory
WORKDIR /var/www/html

# 5. Copy application files
COPY . /var/www/html

# 6. Install dependencies and build assets
RUN composer install --no-interaction --optimize-autoloader --no-dev --no-scripts && \
    npm install && npm run build && \
    chmod -R 775 storage bootstrap/cache

# 7. Create startup script that handles database connection gracefully
RUN echo '#!/bin/bash\n\
echo "Starting PBS NYC application..."\n\
\n\
# Wait for environment variables to be available\n\
sleep 3\n\
\n\
# Clear Laravel caches at runtime (when env vars are available)\n\
echo "Clearing Laravel caches..."\n\
php artisan route:clear || echo "Route clear failed"\n\
php artisan config:clear || echo "Config clear failed"\n\
php artisan cache:clear || echo "Cache clear failed"\n\
\n\
# Check if migrations table exists, if not run migrations\n\
echo "Checking database schema..."\n\
php artisan migrate:status || echo "Database not ready, skipping migrations"\n\
\n\
# Start the application on Railway\'s assigned port\n\
echo "Starting web server on port 8000..."\n\
php artisan serve --host=0.0.0.0 --port=8000' > /start.sh && chmod +x /start.sh

# 8. Expose port (Railway will set $PORT)
EXPOSE 8000

# 9. Start application
CMD ["/start.sh"]
