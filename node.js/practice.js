const http = require('http');
const fs = require('fs'); 

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body>');

    if (req.url === '/' && req.method === 'GET')
         {
        res.write('<h1>Welcome to Home Page</h1>');
        fs.appendFileSync('log.txt', 'Visited Home Page\n');
    }
     else if (req.url === '/about') {
        res.write('<h1>About Us</h1><p>This is the about page.</p>');
        fs.appendFileSync('log.txt', 'Visited About Page\n');
    } 
    else if (req.url === '/contact') {
        res.write('<h1>Contact Us</h1><p>This is the contact page.</p>');
        fs.appendFileSync('log.txt', 'Visited Contact Page\n');
    } 
    else {
        res.write('<h1>404 Page Not Found</h1>');
        fs.appendFileSync('log.txt', `Visited Unknown Page: ${req.url}\n`);
    }

    res.write('</body>');
    res.write('</html>');
    res.end();
});

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});