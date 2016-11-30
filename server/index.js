var koa = require('koa');
var router = require('koa-router');
var logger = require('koa-logger');
var serve = require('koa-static');
var app = koa();

//使用logger日志库
app.use(logger());

app.use(serve('./public'));

var server = require('http').Server(app.callback()),
    io = require('socket.io').listen(server);

io.on('connection', function(socket) {
    console.log('a user connected');
    socket.on('disconnect', function() {
        console.log('user disconnected');
    });
});

// 监听3000端口
server.listen(3000);
