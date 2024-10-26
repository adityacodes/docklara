# Use Bitnami Laravel as the base image
FROM bitnami/laravel:latest

# Set the working directory to /app
WORKDIR /app

# Copy the entire application code into the container
COPY . /app

# Install PHP dependencies with Composer
RUN composer update --no-interaction --optimize-autoloader

# Install npm dependencies and build assets
RUN npm install && npm run build

# Ensure permissions for Laravel storage and cache directories
RUN chown -R bitnami:bitnami /app/storage /app/bootstrap/cache

# Expose the default Laravel port
EXPOSE 8000

# Use Bitnami's default entrypoint and command for Laravel
ENTRYPOINT ["/opt/bitnami/scripts/laravel/entrypoint.sh"]
CMD ["/opt/bitnami/scripts/laravel/run.sh"]
