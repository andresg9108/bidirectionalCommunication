var oExpress = require('express');
var oApp = oExpress();
var oServer = require('http').Server(oApp);
var oIo = require('socket.io')(oServer);

oServer.listen(3000, function(){
	console.log('Puerto: 3000');
});