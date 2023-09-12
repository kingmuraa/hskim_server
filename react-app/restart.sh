#! bin/sh

# transfer 미적용 시
# pull=`git pull`

pm2=`pm2 start "npm run start" --watch`

cmd=`ls`

echo "${pull}"

sleep 5

echo "${pm2}"
