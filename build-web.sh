#!/bin/bash

yarn nx reset
yarn rimraf dist/apps/web
yarn nx run web:build
yarn rimraf dist/apps/web/.next/cache
cp yarn.lock dist/apps/web 
cd dist/apps/web 
yarn add -E @emotion/server @emotion/react
yarn remove typescript @prisma/client util @tabler/icons env-var
rm -r node_modules
yarn install --prod

