function FindProxyForURL(url, host) {
    // 定义要通过代理访问的URL
    var directSites = ["coursera.org/signup", "c4b-integration.com", "d3njjcbhbojbot.cloudfront.net"];

    // 代理服务器的详细信息，包括用户名和密码
    var proxy = "PROXY state.smartproxy.com:19400; PROXY pjbian:Xi23dkN77CqkXhuwux@state.smartproxy.com:19400";

    // 检查当前访问的URL是否在定义的列表中
    for (var i = 0; i < directSites.length; i++) {
        if (shExpMatch(url, "*://" + directSites[i] + "*")) {
            return proxy;
        }
    }

    // 对于不在列表中的网站，直接连接
    return "DIRECT";
}
