var express = require('express');

var app = express();
var server = require('http').createServer(app)
var io = require('socket.io').listen(server);


users = [];
connections = [];
server.listen(process.env.PORT || 3000);
console.log("Server running...");

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

io.sockets.on('connection', function (socket) {
    connections.push(socket);
    console.log('Connected: % socket connected', connection.length);

    // Disconnect
    connections.splice(connections.indexOf(socket), 1);
    console.log('Connected: % socket connected', connection.length);
});