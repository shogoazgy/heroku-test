// モジュール
const http     = require('http');
const express  = require('express');
const socketIO = require('socket.io');

// オブジェクト
const app = express();
const server = http.Server(app);
const io = socketIO(server);

// 定数
const PORT = 8080;


server.listen(PORT,()=>{
    console.log('server starts on port: %d',PORT);
    app.use(express.static(__dirname));
});
var ip = null
app.get('/', (req, res) => {
    //console.log(req);
    ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    console.log(ip)
    res.sendFile(__dirname + '/index.html');
});




io.on('connection', socket => {
    console.log('connect');
    socket.emit('ok', 'a');
    socket.on('req', x => {
        socket.emit('ip', ip)
        console.log(ip)
    })
})