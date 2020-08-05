var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'content-Type' : 'text/plain'});
    response.write('Hello Nodejs122222');
    response.end();
}).listen(3000);

const Myvar = require('./myvar');
const setVar = new Myvar();

console.log(setVar);