
var fs=require('fs');

var server=require('http').createServer();

server.on('request',(req,res)=>{
//    fs.readFile('./big.file',(err,data)=>{
//        if(err) throw err;
//        res.end(data);
//    })
    
    var file=fs.createReadStream('./big.file');
    file.pipe(res);
    
})

server.listen(8000);