const http = require("http");

const server = http.createServer((req,res)=>{
    if(req.url == '/')
    {
        res.end("Hello I am from other side");
    }
    else if(req.url == '/about')
    {
        res.end("Hello You are about side");
    }
    else
    {
        res.writeHead(404,{"Content-type":"text/html"});
        res.end('<h1>404 error some went wrong<h1\>');
    }
   
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("Listening to the port no 8000");
});