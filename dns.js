var dns=require('dns');

//dns.lookup('simhapuriuniv.ac.in',(err,address)=>{
//    console.log(address);
//})


//dns.resolve('simhapuriuniv.ac.in','MX',(err,address)=>{
//    console.log(address);
//})


dns.reverse('97.74.180.128',(err,hostname)=>{
    console.log(hostname);
})