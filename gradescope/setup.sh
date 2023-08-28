#!/usr/bin/env bash

apt-get install apt-utils
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt-get install -y nodejs
apt-get install -y npm
cp /autograder/source/package.json /autograder/package.json
cd /autograder/ && npm install
