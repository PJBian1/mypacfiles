function FindProxyForURL(url, host) {
    // 代理服务器的详细信息，包括用户名和密码
    var proxy = "PROXY state.smartproxy.com:19400; PROXY pjbian:Xi23dkN77CqkXhuwux@state.smartproxy.com:19400";
    
    // 所有网页都通过代理访问
    return proxy;
}
