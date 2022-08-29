const fs = require('fs')
const os = require('os')

// fs.writeFileSync("read.txt",'Hello ReadFile')
// fs.appendFileSync("read.txt",' how are you')

// let buf_Data=  fs.readFileSync('read.txt')
// buf_Data = buf_Data.toString()

//CHANGE MODE

// fs.chmod("read.txt",0o2,(err) => {
//     if (err) throw err;
//     else{
//         let buf_data = fs.readFileSync("read.txt")
//         console.log(buf_data)
//     }
// })

// fs.chmodSync("read.txt",0o200)

// fs.watch('read.txt', (curr, prev) => {
//     console.log(`the current mtime is: ${curr.mtime}`);
//     console.log(`the previous mtime was: ${prev.mtime}`);
//   });

