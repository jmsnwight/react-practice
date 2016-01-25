var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// Data from the input emits function as msg back to the client side
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
   });
  socket.on('nickname', function(name){
  	io.emit('nickname', name);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

