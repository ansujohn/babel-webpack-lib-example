#! /bin/bash

set -o errexit

# update the package version and commit to the git repository
npm run std-version

git push --follow-tags origin master

npm publish

git checkout develop
git pull origin develop
git pull --no-edit origin master
git push
