//Task -2: Create an HTTP server using the Node.js http module that runs on port 3000 and
//  handles the following GET routes:


// • / → Return a plain text welcome message
// • /about → Return a simple HTML response
// • /user → Read name and age from query parameters and return a JSON response

// Rules to Follow:


// • Set proper Content-Type headers for text, HTML, and JSON
// • Use JSON.stringify() when sending JSON data
// • Return 404 Page Not Found for invalid routes
// • Use only the Node.js http module
const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    response = "";
    if(req.url==="/"&& req.method==="GET"){
        res.writeHead(200,{'Content-Type':'text/plain'});
        response="Welcome to the Home Page!";
        res.end(response);
    }
    else if(req.url==="/about" && req.method==="GET"){
        res.writeHead(200,{'Content-Type':'text/html'});
        response="<h1>This is the About Page</h1>";
        res.end(response);
    }
    else if(req.url.startsWith("/user") && req.method==="GET"){
        res.writeHead(200,{'Content-Type':'application/json'});
        const url = new URL(req.url, `http://${req.headers.host}`);
        const name = url.searchParams.get("name");
        const age = url.searchParams.get("age");
        const userData = { name, age };
        res.end(JSON.stringify(userData));
    }
    else{
        res.writeHead(404,{'Content-Type':'text/plain'});
        response="404 Page Not Found";
        res.end(response);
    }
});
const port=3000;            
server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
});