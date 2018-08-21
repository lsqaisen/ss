#!/bin/sh
docker build . -t shadowsocks
docker rm -f ss
docker run -itd -p 1405:1405 -p 1080:1080 --name ss --restart=always shadowsocks
