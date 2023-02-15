FROM node:16.19.0-alpine3.17
WORKDIR /usr/src/app
COPY --chown=node:node dist/apps/server/ ./
COPY --chown=node:node drop-schemas.sql ./
COPY --chown=node:node entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh
ENV NODE_ENV production
ENV PORT 8000
EXPOSE 8000
ENTRYPOINT ["entrypoint.sh"]



