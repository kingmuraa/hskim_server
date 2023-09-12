#! bin/sh

# pull=`git pull`
kill=`pm2 start "npm run start" --watch`
start=`pm2 start "npm run start" --watch`

# echo "${pull}"
echo "${kill}"
sleep 2
echo "${start}"
