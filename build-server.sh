#!/bin/bash

yarn nx reset
yarn rimraf dist/apps/server
yarn nx run server:build
cp -r libs/server/infra/database/prisma dist/apps/server 
cp -r libs/server/infra/database/src/lib/database.seed.ts dist/apps/server/prisma 
cd dist/apps/server 
yarn add -E prisma ts-node zod-prisma-types
rm -r node_modules
yarn install --prod
cd ../../..
cp -r node_modules/.prisma dist/apps/server/node_modules




