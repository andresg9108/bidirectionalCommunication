const dotenv = require('dotenv');
dotenv.config();

const path = require('path');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});

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

server.listen(process.env.PORT_SERVER_TEST, function(){
	console.log(path.join('Port: ', process.env.PORT_SERVER_TEST));
});