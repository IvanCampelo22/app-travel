FROM node:16.19.0-alpine3.17
WORKDIR /usr/src/app
COPY dist/apps/web/ ./
ENV NODE_ENV production
ENV PORT 3000
EXPOSE 300
CMD ["npm", "run", "start"]



