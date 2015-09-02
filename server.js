var express = require('express'),
    app = express(),
    path = require('path'),
    http = require('http').Server(app),
    io = require('socket.io')(http),
    feed = require('./feed');


app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, './www')));

io.on('connection', function (socket) {
    console.log('User connected. Socket id %s', socket.id);

    socket.on('join', function (rooms) {
        console.log('Socket %s subscribed to %s', socket.id, rooms);
        if (Array.isArray(rooms)) {
            rooms.forEach(function(room) {
                socket.join(room);
            });
        } else {
            socket.join(rooms);
        }
    });

    socket.on('leave', function (rooms) {
        console.log('Socket %s unsubscribed from %s', socket.id, rooms);
        if (Array.isArray(rooms)) {
            rooms.forEach(function(room) {
                socket.leave(room);
            });
        } else {
            socket.leave(rooms);
        }
    });

    socket.on('disconnect', function () {
        console.log('User disconnected. %s. Socket id %s', socket.id);
    });
});

feed.start(function(room, type, message) {
    io.to(room).emit(type, message);
});

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});