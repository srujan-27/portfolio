var http=require('http')
http.createServer((req,res)=>{
    res.end("<html>hello world</html>")
    res.end()
}).listen(8080);