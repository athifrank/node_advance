var server=require('http').createServer();

server.on('request',(req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'});
    res.write('Hello world \n');
    
    setTimeout(function(){
        res.write('One message');
    },1000);
    
    setTimeout(function(){
        res.write('another message');
    },2000);
});
server.listen(8000);