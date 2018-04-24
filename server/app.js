var oExpress = require('express');
var oApp = oExpress();
var oServer = require('http').Server(oApp);
var oIo = require('socket.io')(oServer);

oApp.get('/hola', function(oReq, oRes){
	oRes.status(200).send('<h1>Hola Mundo</h1>');
});

// Comenzando con Socket.io
oIo.on('connection', function(socket){
	console.log('Alguien se a conectado al Socket.');
	console.log('Nodo IP: '+socket.handshake.address);
});

oServer.listen(3001, function(){
	console.log('Puerto: 3001');
});