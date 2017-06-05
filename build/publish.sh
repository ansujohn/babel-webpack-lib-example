#! /bin/bash

set -o errexit

# update the package verion and commit to the git repository
npm run std-version

git push --follow-tags origin master

npm publish
