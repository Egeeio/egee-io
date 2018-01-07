#!/bin/sh
sudo npm install -g ember-cli bower
npm install
bower install
ember build
