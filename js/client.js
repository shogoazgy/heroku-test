var socket = window.io();
var text = document.getElementById("ip");


socket.on('ok', (a) => {
    console.log(a)
    socket.emit('req', 'req_ip');
})

socket.on('ip', ip => {
    text.innerText = "あなたのIPアドレス: " + ip
    console.log(ip)
})