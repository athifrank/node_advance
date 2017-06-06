var fs=require('fs');
var path=require('path');

var dname=path.join(__dirname,'files');

var currentFile=fs.readdirSync(dname);

var logTime=(message)=>{
    console.log(`${new Date().toUTCString()}:${message}`);
}

fs.watch(dname,(eventType,filename)=>{
    if(eventType==='rename'){ //add or remove
        var index=currentFile.indexOf(filename);
        if(index>=0){
            currentFile.splice(index,1);
            logTime(`${filename} was removed`);
            return;
        }
        currentFile.push(filename);
        logTime(`${filename} was added`);
        return;
    }
      logTime(`${filename} was changed`);
});