// const http=require ('http');

// const server=http.createServer(req,res)
// {
//     res.setHeader(200,{'Content-Type':'text/plain'});
//res.write('<html>');
// res.write('<head><title>My First Page</title></head>');
// res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
// res.write('</html>');
//if (req.url === '/') {
//    return res.end('Welcome to the Home Page!\n');
// } else if (req.url === '/about') {
//    return res.end('This is the About Page.\n');
// } 
//     res.end('Hello, World!\n'); 

// }
// server.listen(3000,()=> {
//     console.log('Server running at http://localhost:3000/');
// });


// const http=require('http');
// function requestListener(req,res)
// {
//     console.log(req);
// }
// const server=http.createServer(requestListener);
//if you want the server to stop after some time use the code below
//process .exit();