const http = require('http')
const fs = require('fs')


const server = http.createServer((req,res) => {

    //API READ
    const data2 = fs.readFileSync("apiData.json","utf-8")
    // console.log(data2)
    const data3 = JSON.parse(data2)

    // const arr = ['cat','dog']
    // console.log(req.url)


    if(req.url=='/'){
        res.end("Hii This Is Home Page")
    }else if(req.url=='/about'){
        res.end('Hii This Is A About Page')

    }
    else if(req.url=='/api'){
        res.writeHead(200,{"content-type":"application/json"})
        res.end(data2)

        
        // console.log(JSON.parse(data2[0].appVersion))
    }else{
        res.writeHead(404,{"content-type":"text/html"})
        res.end('<h1>This Is Error 404 Page</h1>')
    }
})

server.listen(8000, ()=>{
    console.log("server Listen")
})