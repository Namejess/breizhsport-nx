# Utilise une image Nginx stable basée sur Alpine
FROM docker.io/nginx:stable-alpine

# Crée un utilisateur et groupe non privilégiés
RUN addgroup -S nginxgroup && adduser -S nginxuser -G nginxgroup

# Copie les fichiers du frontend dans le répertoire Nginx
COPY dist/apps/breizhsport-front/* /usr/share/nginx/html/

# Change les permissions du dossier pour que "nginxuser" puisse y accéder
RUN chown -R nginxuser:nginxgroup /usr/share/nginx/html

# Exécute Nginx en tant qu’utilisateur non privilégié
USER nginxuser

# Expose le port HTTP
EXPOSE 80

# Démarre Nginx en mode non-démon pour rester au premier plan
CMD ["nginx", "-g", "daemon off;"]