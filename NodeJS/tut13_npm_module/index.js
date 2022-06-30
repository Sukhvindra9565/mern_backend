import chalk from "chalk";
import  validator  from 'validator';

// console.log(chalk.blue.underline.inverse("Hello World"));
// console.log(chalk.green.underline.inverse("success"));

const res = validator.isEmail('sukhvindrasingh9565@gmail.com');
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));