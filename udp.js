var dgram=require('dgram');
var PORT=3333;
var HOST='127.0.0.1';

//server

var server=dgram.createSocket('udp4');

server.on('listening',()=>console.log('UDP server listening'));

server.on('message',(msg,rinfo)=>{
    console.log(`${rinfo.address}:${rinfo.port}-${msg}`);
})
server.bind(PORT,HOST);

//client

//
//
//setInterval(function(){
//    var client=dgram.createSocket('udp4');
//    client.send('Athi frank',PORT,HOST,(err)=>{
//    if(err) throw err;   
//    console.log('Message sented');  
//    client.close();
//})
//},1000);

   var client=dgram.createSocket('udp4');
var msg=Buffer.from('athinarayanan');

    client.send(msg,0,4,PORT,HOST,(err)=>{
    if(err) throw err;  
    client.send(msg,4,12,PORT,HOST,(err)=>{
    if(err) throw err; 
    console.log('Message sented');  
    client.close();
});
        });