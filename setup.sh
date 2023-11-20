#!/bin/bash

# For use on Gradescope
# See https://gradescope-autograders.readthedocs.io

apt-get install apt-utils
apt-get install -y ca-certificates curl gnupg
mkdir -p /etc/apt/keyrings
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_20.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list
apt-get update
apt-get install nodejs -y

curl -fsSL https://get.pnpm.io/install.sh | sh -
PATH=/root/.local/share/pnpm/:$PATH

cd /autograder/source/ && pnpm install
pnpm exec playwright install --with-deps chromium
