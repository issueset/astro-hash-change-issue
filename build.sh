#! /bin/bash

set -ex 
cd $(dirname $0)
rm -rf dist
rm -rf .astro
./node_modules/.bin/astro build --force
./node_modules/.bin/prettier --cache --write ./dist
git add --all
