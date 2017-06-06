var fs=require('fs');
var file=fs.createWriteStream('./big.file');

for(i=0;i<=5e6;i++){
    file.write('Athifrank \n');
}

file.end();