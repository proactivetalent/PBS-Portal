# Install Certbot and SSL
apt update && apt install snapd python3-certbot-apache -y
snap install core; snap refresh core
snap install --classic certbot
ln -s /snap/bin/certbot /usr/bin/certbot

# Enable SSL in Apache
a2enmod ssl
a2ensite default-ssl
systemctl restart apache2

# Obtain SSL certificate
certbot --apache -d pbsnyc.srv899233.hstgr.cloud --non-interactive --agree-tos --email admin@pbsnyc.srv899233.hstgr.cloud

# Update Laravel configuration
cd /var/www/pbsnyc
sed -i 's/APP_URL=http:/APP_URL=https:/' .env
php artisan config:clear && php artisan cache:clear
systemctl restart apache2