// CRUD OPERATION

const fs = require("fs");

// fs.mkdir("thapa",(err) => {
//     console.log("Folder created");
// });

// fs.writeFile("thapa/bio.txt","My name is Sukhvindra Singh",(err) => {
//     console.log("File created");
// })

// fs.appendFile("thapa/bio.txt"," . And I am from UP", (err) =>{
//     console.log("append success");
// })

// fs.readFile("thapa/bio.txt","utf8",(err,data) => {
//     console.log(data);
// })

// fs.rename("thapa/bio.txt","thapa/mybio.txt",(err) => {
//     console.log("File renamed");
// })
// fs.unlink("thapa/mybio.txt",(err) => {
//     console.log("Deleted file");
// })

fs.rmdir("thapa",(err) => {
    console.log("Deleted folder");
})