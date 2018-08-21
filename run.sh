#!/bin/sh
nginx
polipo -c /polipo.conf &
/kcptun -mtu 900 -sndwnd 2048 -rcvwnd 2048 -mode fast2 -l :44321 -r ns.xcai.net:44321 &

# watch dog
(
trap 'echo "can not kill watch dog process"' 1 2 3 15
errors=0
until [ $errors -gt 2 ]; do
   has_err=0
   killall -0 polipo 2>/dev/null
   if [ $? -ne 0 ]; then
       echo "[haproxy-confd] polipo process not running, auto staring"
       polipo -c /polipo.conf &
       if [ $? -ne 0 ]; then echo "polipo process start failed" && has_err=$((has_err+1)); fi
   fi
   sleep 1
done
echo "polipo can't be restart, exited"
pkill -9 shadowsocks-client
) &
/shadowsocks-client -c /shadowsocks.json
