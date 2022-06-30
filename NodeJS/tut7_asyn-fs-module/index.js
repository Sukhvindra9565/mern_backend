const fs = require("fs");

// fs.writeFile("read.txt","Today is awesome day : ",
// (err) => {
//     console.log("files is created");
// });

/*
we pass them a function as an argument - a callback 
that gets called when that task completes.
The callback has an argument that tells you whether the 
operation completed successfully.
we need to say what to do  when fs.writeFile has completed (even if it's nothing), 
and start checking errors.
 */

// fs.appendFile("read.txt"," plz like and share",
// (err) => {
//     console.log("append successful");
// })
fs.readFile("read.txt","utf-8",(err,data) => {
    console.log(data);
})