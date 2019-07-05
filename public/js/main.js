// Conectando
var socket = io.connect('http://localhost:3001', {'forceNew': true});

$(function(){
	// Cuando llegue el arreglo msj.
	socket.on('msj', function(data){
		$("#statusmsj").html('');
		$.each(data, function(i, v){
			$("#statusmsj").append(v.nickname+': '+v.text+'<br />');
		});
	});
});

function enviar(){
	let N = $("#nickname").val();
	let M = $("#txtmsj").val();

	let msj = {
		nickname: N,
		text: M
	};
	console.log(msj);

	socket.emit('add-msj', msj);

	return false;
}