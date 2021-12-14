#!/bin/bash
set -e

if [[ $NODE_ENV = "development" ]] ; then
  npm install --also=dev
  npm run dev:watch
else
  npm run start
fi
