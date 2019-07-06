var oExpress = require('express');
var oApp = oExpress();
var oServer = require('http').Server(oApp);
var oSocket = require('socket.io')(oServer);
var iPort = 3000;

oApp.use(oExpress.static(__dirname + '/public'));
oApp.use('/jquery', oExpress.static(__dirname + '/node_modules/jquery/dist/'));

oServer.listen(iPort, function(){
	console.log('Port: '+iPort);
});