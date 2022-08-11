const dotenv = require('dotenv');
dotenv.config();

const path = require('path');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static(path.join(__dirname, '/public')));
app.use('/jquery', express.static(path.join(__dirname, '/node_modules/jquery/dist/')));

server.listen(process.env.PORT_CLIENT_TEST, function(){
	console.log(path.join('Port: ', process.env.PORT_CLIENT_TEST));
});