http proxy:	10.211.55.2:1080
socks5 proxy:	10.211.55.2:1405
proxy auto config:
		http://10.211.55.2/pac.js


========= git, go get ===========
set:

git config --global http.proxy 'socks5://192.168.11.254:1405'
git config --global https.proxy 'socks5://192.168.11.254:1405'

unset:

git config --global --unset http.proxy
git config --global --unset https.proxy

=========  docker pull ==========

mkdir -p /etc/systemd/system/docker.service.d
echo -e '[Service]\nEnvironment="HTTP_PROXY=http://192.168.11.254:1080/" "NO_PROXY=localhost,127.0.0.1,192.168.0.1/16"' > /etc/systemd/system/docker.service.d/http-proxy.conf
systemctl daemon-reload
systemctl restart docker

=========   linux   =========
set:

export http_proxy=http://192.168.11.254:1080

unset:

unset http_proxy
