const fs = require("fs");
const bioData = {
    name:"Sukhi",
    age:20,
};

// // {"name":"Sukhi","age":20}
// const jsonData = JSON.stringify(bioData);
// console.log(jsonData);

// // { name: 'Sukhi', age: 20 }
// const objData = JSON.parse(jsonData);
// console.log(objData);

// 1: convert to JSON
const jsonData = JSON.stringify(bioData);

// 2: write data in another file
fs.writeFile("json1.json",jsonData,(err)=>{
    console.log("done");
})
// 3: readfile
fs.readFile("json1.json","utf-8",(err,data)=>{
    console.log(data);
})
// 4: Again convert back to json to Object
const objData = JSON.parse(jsonData);

// 5: console.log
console.log(objData);


