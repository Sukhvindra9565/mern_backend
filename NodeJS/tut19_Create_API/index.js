const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{

    const data = fs.readFileSync(`${__dirname}/Userapi/userapi.json`,"utf-8");
    const objData = JSON.parse(data);
    if(req.url == '/')
    {
        res.end("Hello I am from other side");
    }
    else if(req.url == '/about')
    {
        res.end("Hello You are about side");
    }
    else if(req.url == "/userapi")
    {
        // fs.readFile(`${__dirname}/Userapi/userapi.json`,"utf-8",(err,data)=>{
        //     console.log(data);
        //     const objData = JSON.parse(data);

        //     res.end(objData[0].age);
        // });
        res.writeHead(200,{"Content-type":"application/json"});
        res.end(objData[0].age); 
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