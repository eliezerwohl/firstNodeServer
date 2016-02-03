var http = require("http");

var happyPort = 7000;
var sadPort = 7500;


function handleRequest(request, response) {
    response.end("It works!! Path Hit: " + request.url);
}

var server = http.createServer(function(req, res){
    res.end("You are great!!!!!!");
    });

server.listen(happyPort, function() {
    console.log("Server is listening on: http://localhost:%s", happyPort); 
});

var server2 = http.createServer(function(req, res){
    res.end("garbage! you smelly nelly!!!!!!");
    });

server2.listen(sadPort, function() {
    console.log("Server is listening on: http://localhost:%s", sadPort); 
});


