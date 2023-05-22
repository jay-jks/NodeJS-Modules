const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3030;

const server = http.createServer((req, res)=>{
    res.setHeader('Content-Type', 'text/html');
    console.log(req.url)

    if(req.url == '/'){
        res.statusCode = 200;
        res.end('<h1>This is JKS</h1> <p>This is seen in localHost</p>');
    }
    else if(req.url == '/about'){
        res.statusCode = 200;
        res.end('<h1>About Section</h1> <p>About Us</p>');
    }
    else if(req.url == '/hello'){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html');
        res.end(data.toString());
    }
    else{
        res.statusCode = 404;
        res.end('<h1>Not found</h1> <p>This page was not found on the server</p>');
    }
});

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
});