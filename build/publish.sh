#! /bin/bash

set -o errexit

# update the package version and commit to the git repository
npm run std-version

git push --follow-tags origin master

npm publish

git checkout current
git pull origin current
git pull origin master
git add --all
git commit -m "Syncing with master after release"
