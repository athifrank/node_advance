//using netcat nc localhost 8000

const entries =require('object.entries');
const server=require('net').createServer();

process.stdout.write('\u001B[2J\u001B[0;0f');

let counter=0;
let sockets={};

server.on('connection', socket=>{
    socket.id= counter++;
    //sockets[socket.id]=socket;
    //console.log(socket.id);
    console.log('client connected');
    socket.write('Please enter your name :');
    
    socket.on('data', data =>{
      if(!sockets[socket.id]){
          socket.name= data.toString().trim();
          socket.write(`Welcome ${socket.name} !\n`);
          sockets[socket.id]=socket;
          return;
         }
       entries(sockets).forEach(([key,cs])=>{
           if(socket.id==key) return;
           cs.write(` ${socket.name} :`);
           cs.write(data);
       })
    });
    
    socket.on('end',()=>{
        delete sockets[socket.id];
        console.log('Client disconnected');
    });
});

server.listen(8000,()=>console.log('server bound'));