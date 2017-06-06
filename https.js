
var fs=require('fs');

var server=require('https').createServer({
    
    key:fs.readFileSync('./key.pem'),
    cert:fs.readFileSync('./cert.pem')
});

server.on('request',(req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'});
    res.end('Hello world \n');
    
});
server.listen(443,()=>console.log('server is runnig'));