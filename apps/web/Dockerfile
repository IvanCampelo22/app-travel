FROM node:16.19.0-alpine3.17
ENV NODE_ENV production
ENV PORT 3000
WORKDIR /usr/src/app
COPY --chown=node:node dist/apps/web ./
USER node
EXPOSE 3000
CMD ["npm", "start"]
