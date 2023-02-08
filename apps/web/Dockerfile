FROM node:16.16.0-alpine3.16
WORKDIR /usr/src/app
COPY dist/apps/web/ ./
ENV NODE_ENV production
ENV PORT 3000
EXPOSE 300
CMD ["npm", "run", "start"]



