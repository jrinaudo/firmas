var http = require('http');
var fs = require('fs');
var PORT = process.env.PORT || 8000;

var server = http.createServer(function(req,res){
    console.log(req.url);
    if(req.url === '/'){
        fs.readFile('./index.html', function(err, data){
            res.writeHead(200, {"Content-Type":"text/html"});
            res.end(data);
        });
    } else if(req.url === '/firmail.js'){
        fs.readFile('./firmail.js', function(err, data){
            res.writeHead(200, {'Content-Type':'text/js'});
            res.end(data);
        });
    };
});

server.listen(PORT);
console.log('Esperando request en el puerto 8000');