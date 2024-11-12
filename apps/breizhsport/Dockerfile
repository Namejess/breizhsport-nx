# Utilise une image Node.js Alpine LTS comme base
FROM docker.io/node:lts-alpine AS runner

# Installe dumb-init pour gérer les signaux et la gestion des PID
RUN apk add --no-cache dumb-init

# Définit les variables d’environnement
ENV NODE_ENV=production
ENV PORT=3000

# Crée le répertoire de travail pour l'application
WORKDIR /usr/src/app

# Copie uniquement les fichiers nécessaires à l'exécution en production
COPY apps/breizhsport/next.config.js ./
COPY apps/breizhsport/public ./public
COPY apps/breizhsport/.next/standalone/apps/breizhsport ./
COPY apps/breizhsport/.next/standalone/package.json ./
COPY apps/breizhsport/.next/standalone/node_modules ./node_modules
COPY apps/breizhsport/.next/static ./.next/static

# Définit les permissions spécifiques pour le dossier d'application
# et assure que l'utilisateur "node" possède les accès requis
RUN chown -R node:node /usr/src/app

# Exécute les processus en tant qu'utilisateur non privilégié "node"
USER node

# Expose le port de l'application
EXPOSE 3000

# Désactive la télémétrie de Next.js (facultatif)
ENV NEXT_TELEMETRY_DISABLED=1

# Lancement de l'application avec dumb-init pour la gestion des PID
CMD ["dumb-init", "node", "server.js"]