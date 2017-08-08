const cluster = require('cluster');
const path = require('path');

cluster.setupMaster({
    exec: path.join(__dirname,'/app.js')
})

const cpus = require('os').cpus();
for(let i = 0; i < cpus.length; i++){
    cluster.fork();
}

console.log(`start ${cpus.length} workers`);