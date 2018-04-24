var oExpress = require('express');
var oApp = oExpress();
var oServer = require('http').Server(oApp);
var oIo = require('socket.io')(oServer);

oApp.get('/', function(oReq, oRes){
	oRes.status(200).send('Hola Mundo');
});

oServer.listen(3000, function(){
	console.log('Puerto: 3000');
});