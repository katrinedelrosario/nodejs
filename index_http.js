import http from 'http';

http.createServer((req, res) => {
    res.writeHead(400, {'Content-Type': 'text/html'}),
    res.write('hiii world')
    res.end()
}).listen(4000, () => {
    console.log('node server is running on http://localhost:4000')
}) 

