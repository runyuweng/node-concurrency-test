var http = require('http');
let i = 0;
const server = http.createServer(function(req,res){
    console.log(`get the request ${i++}`);
    res.write('<div>This is Index</div>')
    res.end();
})

server.listen(3000);