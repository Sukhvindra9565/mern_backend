const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on("request",(req,res)=>{
   // 3rd way
   const rstream = fs.createReadStream("input.txt");
   rstream.pipe(res);
   
});

server.listen(8000,"127.0.0.1");