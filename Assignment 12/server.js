const http = require('http');

// Create server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Server is running on port 5050');
});

// Run server on port 5050
server.listen(5050, () => {
    console.log('Server started at http://localhost:5050');
});
