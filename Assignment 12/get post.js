// 3)  
// by using http module create server and run on port numer  - 5050 

//   create api  /
//    /index   --- > display <index page> on browser 
//                      /home --- > display <Home Page> on browser 

// 	/aboutus --> display <About US> using post method 

// hint  - use postman for post method 

// const http = require('http');

// Create server
const server = http.createServer((req, res) => {

    // Set common header
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Routing
    if (req.method === 'GET' && req.url === '/') {
        res.end('<h1>Welcome to Server</h1>');
    }
    else if (req.method === 'GET' && req.url === '/index') {
        res.end('<h1>Index Page</h1>');
    }
    else if (req.method === 'GET' && req.url === '/home') {
        res.end('<h1>Home Page</h1>');
    }
    else if (req.method === 'POST' && req.url === '/aboutus') {
        let body = '';

        // Receive data
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            res.end('<h1>About Us Page</h1>');
        });
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 - Page Not Found</h1>');
    }
});

// Run server on port 5050
server.listen(5050, () => {
    console.log('Server running at http://localhost:5050');
});
