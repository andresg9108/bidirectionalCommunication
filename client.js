const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
// const { Server } = require("socket.io");
const io = require('socket.io')(server);
// const io = new Server(server);
const port = 3000;

app.use(express.static(__dirname + '/public'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

server.listen(port, function(){
	console.log('Port: '+port);
});