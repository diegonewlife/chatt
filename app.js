var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server);
	app.use("/js", express.static(__dirname + '/js'));
	app.use("/imagem", express.static(__dirname + '/imagem'));
	app.use("/css", express.static(__dirname + '/css'));
	app.use("/audio", express.static(__dirname + '/audio'));


server.listen(3000);

app.get('/', function(req, res){
	res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function(socket){
	socket.on('send message', function(data, nome, cor, chave, usuario){
		console.log(cor);
		io.sockets.emit('new message', data, nome, cor, chave, usuario);

	});
});

	

 

 