#!/usr/bin/env bash

export ROOT_URL=http://127.0.0.1
export PORT=8080
export HOME=/home/ec2-user

cd /srv/website
meteor node main.js
