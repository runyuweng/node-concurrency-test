const http = require('http');
let i = 0;

const server = http.createServer(function(req,res){
    console.log(`get the request ${i++}`);
    res.write('<html><body><h1>It works!</h1></body></html>')
    res.end();
})

server.listen(3000);