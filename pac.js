
function inHosts(host) {
    var hostParts = host.split('.'), testHost = [];
    while (hostParts.length) {
        testHost.unshift(hostParts.pop());
        if (PROXY_HOSTS[testHost.join('.')]==1){
            return true;
        }
    }
}
 
function FindProxyForURL(url, host) {
    if (inHosts(host)) {
        return 'SOCKS5 192.168.11.254:1405; SOCKS 192.168.11.254:1405; DIRECT;';
    }
    return 'DIRECT';
}

var PROXY_HOSTS={'aisex.com':1,'akamai.net':1,'akamaihd.net':1,'alexa.com':1,'amazonaws.com':1,'angularjs.org':1,'appledaily.com.tw':1,'appspot.com':1,'archive.org':1,'bbc.co.uk':1,'bbc.com':1,'bit.ly':1,'blogcdn.com':1,'blogger.com':1,'blogimg.jp':1,'blogspot.com':1,'blogspot.hk':1,'blogspot.jp':1,'boxun.com':1,'bullogger.com':1,'cl.ly':1,'cloudflare.com':1,'cloudfront.net':1,'computingforgood.org':1,'digg.com':1,'dochub.io':1,'docker.com':1,'doubleclick.net':1,'dropbox.com':1,'dropboxusercontent.com':1,'evozi.com':1,'facebook.com':1,'facebook.net':1,'fb.me':1,'fbcdn.net':1,'feedburner.com':1,'feedly.com':1,'feedsportal.com':1,'ff.im':1,'flickr.com':1,'foursquare.com':1,'geotrust.com':1,'ggpht.com':1,'git-scm.com':1,'gitbooks.io':1,'github.com':1,'github.io':1,'globalsign.com':1,'godaddy.com':1,'golang.org':1,'goo.gl':1,'google.co.id':1,'google.com':1,'google.com.hk':1,'googleadservices.com':1,'googleapis.com':1,'googlecode.com':1,'googleusercontent.com':1,'googlevideo.com':1,'gstatic.com':1,'haproxy.org':1,'img.ly':1,'imgchili.com':1,'imgur.com':1,'is.gd':1,'j.mp':1,'javfor.me':1,'lesscss.org':1,'linkbucks.com':1,'mimima.com':1,'mobile01.com':1,'myfreshnet.com':1,'nytimes.com':1,'nytlog.com':1,'onedrive.live.com':1,'p6us.com':1,'pastebin.com':1,'pbworks.com':1,'peacehall.com':1,'posterous.com':1,'pttrns.com':1,'python.org':1,'readability.com':1,'ripple.com':1,'s3.amazonaws.com':1,'scribd.com':1,'shadowsocks.org':1,'slideshare.net':1,'slidesharecdn.com':1,'sourceforge.net':1,'sstatic.net':1,'staticflickr.com':1,'sublimetext.com':1,'t.co':1,'t66y.com':1,'thepiratebay.org':1,'tmagazine.com':1,'torproject.org':1,'torrentcrazy.com':1,'travis-ci.org':1,'tumblr.com':1,'twimg.com':1,'twitpic.com':1,'twitter.com':1,'vimeo.com':1,'wikimedia.org':1,'wikipedia.org':1,'wolframalpha.com':1,'wordpress.com':1,'workflowenginenet.com':1,'wp.com':1,'wsj.com':1,'xvideos.com':1,'yfrog.com':1,'youtu.be':1,'youtube.com':1,'ytimg.com':1}
