#!/bin/sh

yarn prisma db execute --file ./drop-schemas.sql
yarn prisma migrate deploy
node main.js
