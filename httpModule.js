const http = require('http');

const port = process.env.PORT || 3030;

const server = http.createServer((req, res)=>{
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>This is JKS</h1> <p>This is seen in localHost</p>');
});

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
});