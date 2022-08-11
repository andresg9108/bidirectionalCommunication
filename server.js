const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
// const { Server } = require("socket.io");
const io = require('socket.io')(server);
// const io = new Server(server);
const port = 3001;

app.get('/hello', function(oReq, oRes){
	oRes.status(200).send('<h1>Hello World</h1>');
});

const aMessage = [
	{
		nickname: 'Bot',
		text: 'Welcome.'
	}
]

io.on('connection', function(socket){
	console.log('Someone has connected to the server.');
	console.log('IP: '+socket.handshake.address);

	socket.emit('update-message', aMessage);

	socket.on('add-message', function(oData){
		aMessage.push(oData);

		io.sockets.emit('update-message', aMessage);
	});
});

server.listen(port, function(){
	console.log('Port: '+port);
});