const chalk = require('chalk')
const val = require("validator")

const res = val.isEmail('him@gmail.com')

console.log(res?chalk.bgGreen('login'):chalk.bgRed('login fail'))
// import chalk from Chalk
// console.log(chalk.blue("hello"))