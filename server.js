var oExpress = require('express');
var oApp = oExpress();
var oServer = require('http').Server(oApp);
var oSocket = require('socket.io')(oServer);
var iPort = 3001;

oApp.get('/hello', function(oReq, oRes){
	oRes.status(200).send('<h1>Hello World</h1>');
});

var aMessage = [
	{
		nickname: 'Bot',
		text: 'Welcome.'
	}
]

oSocket.on('connection', function(socket){
	console.log('Someone has connected to the server.');
	console.log('IP: '+socket.handshake.address);

	socket.emit('update-message', aMessage);

	socket.on('add-message', function(oData){
		aMessage.push(oData);

		oSocket.sockets.emit('update-message', aMessage);
	});
});

oServer.listen(iPort, function(){
	console.log('Port: '+iPort);
});