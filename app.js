var oExpress = require('express');
var oApp = oExpress();
var oHttp = require("http").Server(oApp);
var oIo = require('socket.io')(oHttp);

//especificamos el subdirectorio donde se encuentran las páginas estáticas
oApp.use(oExpress.static(__dirname + '/public'));

oIo.sockets.on('connection', function(socket){
	socket.on('message', function(data){
		socket.broadcast.emit('enviar mensasje', data);
	});
});

oApp.listen(3000, function(){
    console.log('Puerto: 3000');
});