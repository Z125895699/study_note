// index.js  http://127.0.0.1:8000

const http = require('http');
const urlLib = require('url');

const port = 8000;

http
  .createServer(function (req, res) {
    const { query } = urlLib.parse(req.url, true);
    //能打印说明到后端了
    console.log(query.name);
    console.log('到后端喽');
    res.end(JSON.stringify('coder'));
  })
  .listen(port, function () {
    console.log('server is listening on port ' + port);
  });
