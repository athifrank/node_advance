process.on('exit',function(code){
    
    console.log('About exit code with: '+code);
})

process.on('uncaughtException',function(err){
    
    console.error(err);
    process.exit(1);
})

//keep the event loop busy
process.stdin.resume();


console.dog();