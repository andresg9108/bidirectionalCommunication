var oExpress = require('express');
var oApp = oExpress();
var oServer = require('http').Server(oApp);
var oSocket = require('socket.io')(oServer);
var iPort = 3000;

oApp.use(oExpress.static(__dirname + '/'));

oServer.listen(iPort, function(){
	console.log('Port: '+iPort);
});