// client request example
const zlib = require('zlib');
const http = require('http');
const fs = require('fs');
const request = http.get({ host: 'www.yogivemanauniversity.ac.in',
                           path: '/',
                           port: 80,
                           headers: { 'Accept-Encoding' : 'gzip,deflate' } });
request.on('response', (response) => {
  const output = fs.createWriteStream('example.html');

  switch (response.headers['content-encoding']) {
    // or, just use zlib.createUnzip() to handle both cases
    case 'gzip':
      response.pipe(zlib.createGunzip()).pipe(output);
      break;
    case 'deflate':
      response.pipe(zlib.createInflate()).pipe(output);
      break;
    default:
      response.pipe(output);
      break;
  }
});