// server.js for SSE & moves
const http = require('http');
let clients = [];
const server = http.createServer((req,res)=>{/* handle SSE & POST /move */});
server.listen(3001, ()=> console.log('Backend on 3001'));