const fs = require('fs')
const http = require('http')

const server = http.createServer((req,res) => {
    const readStream = fs.createReadStream("data.txt")
    readStream.on("data",(cData) => {
        console.log(cData.toString())
    })
    readStream.on("end",() => {
        res.end()
    })
    readStream.on("error",(err) => {
        console.log(err)
    })
})

server.listen(8000,"127.0.0.1")