const http = require("http");

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" }); // 문서를 어떻게 지정해 주겠다.
    response.write("Hello Server");
    response.end();
  })
  .listen(3000);
