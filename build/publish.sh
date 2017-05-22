#! /bin/bash

set -o errexit

git config --global user.email "nui-build@github.com"
git config --global user.name "nui-build"

# update the package verion and commit to the git repository
npm run std-version

# use the key that Shippable uses to connect to GitHub
# ssh-agent bash -c "ssh-add ~/.ssh/project_rsa; git push --tags origin ${CIRCLE_BRANCH}"
git push --tags origin ${CIRCLE_BRANCH}

npm publish
