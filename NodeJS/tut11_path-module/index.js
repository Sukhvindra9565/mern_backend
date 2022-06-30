const path = require("path");

console.log(path.dirname('D:node.js/tut11_path-module/index.js'));
console.log(path.extname('D:node.js/tut11_path-module/index.js'));
console.log(path.basename('D:node.js/tut11_path-module/index.js'));

const myPath = path.parse('D:node.js/tut11_path-module/index.js');
console.log(myPath.base);
console.log(myPath.root);
