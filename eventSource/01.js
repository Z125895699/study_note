const http = require('http');

http.createServer((req, res) => {
  // 设置 HTTP 头部，告诉客户端这是一个 SSE 连接
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  // 设置 CORS 头部
  res.setHeader('Access-Control-Allow-Origin', '*');

  // 每隔1秒发送一条消息给客户端
  setInterval(() => {
    const data = `Server time: ${new Date().toUTCString()}`;
    res.write(`data: ${data}\n\n`);
  }, 1000);
}).listen(8080);

console.log('SSE server started at http://localhost:8080');
