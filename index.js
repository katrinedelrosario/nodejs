import http from 'http';

http.createServer((req, res) => {
    console.log('server is running on http://localhost:4000')
    res.writeHead(400, {'Content-Type': 'text/html'}),
    res.write('hiii world')
    res.end()
}).listen(4000)