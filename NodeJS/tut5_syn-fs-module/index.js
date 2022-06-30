const fs = require("fs");

// Create a file
// fs.writeFileSync("read.txt","welcome to");

// override content in a file
// fs.writeFileSync("read.txt","welcome to thapa technical");

// Append content in a file
// fs.appendFileSync("read.txt"," How are you");

// Read a file
// const buf_data = fs.readFileSync("read.txt");
// console.log(buf_data);


// convert buffer data to string
// org_data = buf_data.toString();
// console.log(org_data);

// To rename the file
fs.renameSync("read.txt","readwrite.txt");

// Node.js includes an additional data type called buffer
// (not available in browser's javascript).
// Buffer is mainly used to store binary Data.
// While reading from a file or receiving packets over the Network.