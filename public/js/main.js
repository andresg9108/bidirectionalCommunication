// Conectando
var socket = io.connect('http://localhost:3001', {'forceNew': true});

$(function(){
	socket.on('update-message', function(data){
		$("#messages").html('');
		$.each(data, function(i, v){
			$("#messages").append(v.nickname+': '+v.text+'<br />');
		});
	});
});

function send(){
	let sNickName = $("#nickname").val();
	let sMessage = $("#message").val();

	let oMessage = {
		nickname: sNickName,
		text: sMessage
	};

	socket.emit('add-message', oMessage);

	return false;
}