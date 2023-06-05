---
group:
  title: 网络
  path: /basic/network/
---

# http

## 发展

![img.png](././imgs/img.png)

### http1.0(1996)

- 之前只支持 html（所以叫超文本传输协议），1.0 开始支持诸如 images, video files, plain text 等其他任何类型的文件；
- 新增了 http 方法，例如 head 和 post;
- 增加了状态码`status code`标识请求状态；
- 增加了 header，存放例如缓存相关（`Expires`, `Last-Modified`）字段；
- character set support, multi-part types, authorization, caching, content encoding and more was included

### http1.1(1999)

- 新增请求方法：options, put, delete;
- 新增长连接和流水线模型
  - 默认开启长连接，Connection: keep-alive(为 close 是关闭连接)；这样不用每个请求都握手挥手；
  - 流水线是指在没得到响应时就可以连续发送请求（需要 Content-Length 标识传输的进度或 chunked, 都是避免粘包，一个特殊开启符+消息长度，一个是首位标识符），但受制于 HOL 队头阻塞问题；

问题：

- 队头阻塞：如果有一个请求相应很大，后面有一个小请求，但是由于前面请求的大资源一直没传完，导致后面的请求被阻塞；
- http1.1 的流水线无法多路复用，如果同时请求 js 和 css 文件，数据包返回后 http client 不知道这些数据包是哪一个请求的响应；

### http2(2015)

> 专为内容的低延迟传输而设计

- 二进制协议而不是文本协议（之前是 ASCII 编码，改为二进制编码计算机处理快）:
  - HTTP 消息由帧构成，例如 Header Frame、Data Frame 和 RST_Frame 等（RST_Frame 可以终止传输，但不关闭连接）;
  - 每个请求和响应都有一个唯一的流 ID，被分成多个帧发送；
- 多路复用 - 通过单个连接进行多个异步 HTTP 请求
  - 使用帧和流来进行请求和响应，所有流都通过同一连接异步发送，通过流 ID 来区分数据包所属流，解决队头阻塞问题； ![img.png](./imgs/img_22.png)
- 使用 HPACK 进行头压缩（之前都是对 body 采用 gzip 等压缩，头部重复传了很多冗余字段，）
  - 静态字典；
  - 动态字典；
  - Huffman 编码（压缩算法）
- 服务器推送 - 单个请求的多个响应
  - 主动推送内容给 client，通过`PUSH_PROMISE`帧；主动推送采用奇书的 streamID； ![img.png](./imgs/img_23.png)
- 请求优先级
- 安全

【为什么解决了队头阻塞问题？】

每个数据包有 stream ID 标明其所属的请求，这样的话如果 css 文件的数据包都到了就可以开始组装了，可以和别的请求资源例如 js 资源数据包区分开来了。

【问题】

1. 由于 TCP 的可靠性，按序传输： ![img.png](./imgs/img_19.png) 这种情况下由于包 1 丢了，导致后面两个包都只能等待，即使此时 css 文件已经完整了；

2. 需要 3RTT（Round-Trip Time）启动三次握手+TLS 四次握手，http 第三次 ack 和 TLS 第一次 hello 可以同时发，总共是三个来回；启动时间长； ![img.png](./imgs/img_24.png)

### http3

解决 http2 的问题，上述的问题是由于 TCP 的设计原因，http 层面已经无法改进了；

#### QUIC

QUIC, Quick UDP Internet Connection；基于 UDP 提出了 QUIC 协议，和 TCP/UDP 一样工作在传输层，在 UDP 的基础上增加了拥塞控制和超时重传等可靠性保证机制，并将 tls 加密集成进来，可以达到初次 1RTT，二次 0RTT 的启动速度提升。

![img.png](./imgs/img_20.png)

![img_1.png](./imgs/img_21.png)

## 连接建立

四次挥手： ![img.png](./imgs/img_25.png)

最后等待 2MSL;MSL 是 Maximum Segment Lifetime，报文最大生存时间，它是任何报文在网络上存在的最长时间，超过这个时间报文将被丢弃。因为 TCP 报文基于是 IP 协议的，而 IP 头中有一个 TTL 字段，是 IP 数据报可以经过的最大路由数。 MSL 应该要大于等于 TTL 消耗为 0 的时间，以确保报文已被自然消亡。

## 初识 http

### 报文

- 状态码 ![img_1.png](./imgs/img_1.png)

  - 常见状态码
    - 101 协议切换；
    - 200 OK，请求数据成功返回；
    - 206 Partial Content, 视频等断点续传或大文件分解为多个下载段；
    - 302 临时重定向，以后还是访问老 url；
    - 304 No Modified 用缓存；
    - 307 和 302 类型，post 方法；
    - 401 Unauthorized，采用 http 认证，未认证，未登录；
    - 403 Forbidden，无权限访问资源；
    - 404 Not Found, 一般是请求资源不存在，请求方法不对或者请求的是秘密资源；
    - 499 客户端主动断开连接；
    - 502 服务端崩溃，nginx 返回 502；
    - 504 网关超时，服务端响应速度太慢，超出 nginx 等待时间，nginx 报错，可以调整 nginx 超时配置；

- Restful API ![img_2.png](./imgs/img_2.png)

- 常用请求头 ![img_3.png](./imgs/img_3.png)

- 常用响应头 ![img_4.png](./imgs/img_4.png)

- 缓存 ![img_5.png](./imgs/img_5.png)

缓存相关的头字段这么多，顺序： ![img_6.png](./imgs/img_6.png)

- cookie ![img_7.png](./imgs/img_7.png)

### https

![img_8.png](./imgs/img_8.png)

好文！很赞！

- [为什么用公钥加密却不能用公钥解密？](https://juejin.cn/post/7163440404480655367)

## 应用场景

### 静态资源

![img_9.png](./imgs/img_9.png)

### 跨域

解决方案：

- CORS
- 代理服务器：浏览器的安全策略，不是 http 的；
- Iframe：诸多不便；

![img_10.png](./imgs/img_10.png)

### 鉴权

![img_11.png](./imgs/img_11.png)

适合使用 jwt 的场景：

- 有效期短
- 只希望被使用一次例如用户注册后发一封邮件让其激活，通常邮件中有一个链接，这个链接需要具备以下的特性：
- 能够标识用户，该链接具有时效性，通常只允许几小时之内激活，不能被篡改以激活其他可能的账户，一次性的。这种场是就适合 jwt。

单点登录 SSO 和会话管理非常不适合用 jwt，如果在服务端部署额外的逻辑存储 jwt 状态，那不如使用 session，基于 session 有很多成熟的框架可以开箱即用，但是用 jwt 还要自己实现逻辑。

### SSO 单点登陆

从一个网站跳转另一个网站时携带用户登陆态信息； ![img_12.png](./imgs/img_12.png)

## 实战分析

### 浏览器

#### XHR

![img_13.png](./imgs/img_13.png)

#### Fetch

![img_14.png](./imgs/img_14.png)

### node

#### https

![img_15.png](./imgs/img_15.png)

### Axios

![img_16.png](./imgs/img_16.png)

### 用户体验

![img_17.png](./imgs/img_17.png)

### 扩展

#### websocket

适合实时要求性高的应用，如实时通话；

#### QUIC

![img_18.png](./imgs/img_18.png)
