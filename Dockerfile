FROM chenzhiwei/polipo:latest

MAINTAINER zhangxc <zhangxingcai@ghostcloud.cn>

LABEL Verdor="xcai.net" \
      Name="shadowsocks" \
      Verson="1.0.0" \
      Date="1/11/2016"

RUN echo "http://mirrors.aliyun.com/alpine/latest-stable/main/" > /etc/apk/repositories \
&& apk add --update nginx \
&& mkdir /run/nginx \
&& mkdir /html \
&& mkdir /var/log/polipo \
&& rm -f /var/cache/apk/*

COPY kcptun /kcptun
COPY polipo.conf /polipo.conf
COPY pac.js /html/
COPY README.txt /html/
COPY default.conf /etc/nginx/conf.d/
COPY run.sh /run.sh
COPY lai.json /shadowsocks.json
COPY shadowsocks-local-linux64-1.1.5 /shadowsocks-client
RUN chmod +x /shadowsocks-client /run.sh

EXPOSE 1405:1405
ENTRYPOINT ["/run.sh"]
