const http = require('http');
const urllib = require('url');

const port = 8000;

http
  .createServer(function (req, res) {
    const {
      query: { name, age },
    } = urllib.parse(req.url, true);
    res.end(`${name}今年${age}岁啦！！！`);
  })
  .listen(port, function () {
    console.log('server is listening on port ' + port);
  });
