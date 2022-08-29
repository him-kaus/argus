const fs = require('fs')

const mydata = {
    name:'himanshu',
    email:'himanshu@gmail.com',
    phno:'9521690973',
    degree:'btech'
}

const data = {
    lname:"kaushik"
}
// console.log(mydata)
const strData = JSON.stringify(mydata)
const str1Data = JSON.stringify(data)

fs.writeFile("data.txt",strData,(err)=>{
    console.log("Data Added")
})
fs.appendFile("data.txt",str1Data,(err)=>{
    console.log("appended")
})

console.log(strData)
const strData1 = JSON.parse(strData) 
console.log(strData1)