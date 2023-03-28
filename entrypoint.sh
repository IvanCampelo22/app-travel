#!/bin/sh

yarn prisma migrate deploy

node main.js
