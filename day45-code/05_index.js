// index2.js  http://127.0.0.1:8888

const http = require('http');
const urllib = require('url');
const querystring = require('querystring');
const port = 8888;

http
  .createServer(function (req, res) {
    // 开启Cors
    res.writeHead(200, {
      //设置允许跨域的域名，也可设置*允许所有域名
      'Access-Control-Allow-Origin': 'http://127.0.0.1:5503',
      //跨域允许的请求方法，也可设置*允许所有方法
      'Access-Control-Allow-Methods': 'DELETE,PUT,POST,GET,OPTIONS',
      //允许的header类型
      'Access-Control-Allow-Headers': 'Content-Type',
    });
    const { query } = urllib.parse(req.url, true);
    const { methods = 'GET', headers } = req;
    const proxyReq = http
      .request(
        {
          host: '127.0.0.1',
          port: '8000',
          path: `/?${querystring.stringify(query)}`,
          methods,
          headers,
        },
        (proxyRes) => {
          proxyRes.on('data', (chunk) => {
            console.log(chunk.toString());
            res.end(chunk.toString());
          });
        }
      )
      .end();
  })
  .listen(port, function () {
    console.log('server is listening on port ' + port);
  });
