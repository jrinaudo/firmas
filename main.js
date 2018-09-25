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
    } else if (req.url === '/icons/twitter.png'){
        fs.readFile('./icons/twitter.png', function(err,data){
            res.writeHead(200, {'Content-Type':'img/png'});
            res.end(data);
        });
    } else if (req.url === '/icons/facebook.png'){
        fs.readFile('./icons/facebook.png', function(err,data){
            res.writeHead(200, {'Content-Type':'img/png'});
            res.end(data);
        });
    } else if (req.url === '/icons/linkedin.png'){
        fs.readFile('./icons/linkedin.png', function(err,data){
            res.writeHead(200, {'Content-Type':'img/png'});
            res.end(data);
        });
    } else if (req.url === '/icons/instagram.png'){
        fs.readFile('./icons/instagram.png', function(err,data){
            res.writeHead(200, {'Content-Type':'img/png'});
            res.end(data);
        });
    };
});

server.listen(PORT);
console.log('Esperando request en el puerto 8000');