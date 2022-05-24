var http = require('http');
http.createServer(function(req,res){
    console.log('Receving Request');
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.write('Hello world\n');
    res.end();

    
}).listen(3000, 'localhost');
console.log("server running at http://localhost:3000/");