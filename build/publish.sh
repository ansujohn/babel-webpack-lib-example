#! /bin/bash

set -o errexit

# update the package version and commit to the git repository
npm run std-version

git push --follow-tags origin develop

npm publish
