#!/usr/bin/env bash

echo $my_key | base64 -d > ./id_rsa
chmod 600 id_rsa
mv id_rsa ~/.ssh/
rsync -r -a -e "ssh -p$PORT -o $OPTIONS" ./_site/* $USER@$DOMAIN:$URI

