#! /bin/bash

set -o errexit

# git config --global user.email "ansu.john@concur.com"
# git config --global user.name "ansu.john"

# update the package verion and commit to the git repository
npm run std-version

git push --follow-tags origin master

npm publish
