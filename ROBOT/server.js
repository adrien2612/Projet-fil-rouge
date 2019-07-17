const net = require('net');
const port = 3001;
const host = '192.168.43.201';

const server = net.createServer();

server.listen(port, host, () => {
    console.log('TCP Server is running on port ' + port + '.');
});

let sockets = [];

server.on('connection', function(sock) {
    console.log('CONNECTED: ' + sock.remoteAddress + ':' + sock.remotePort);
    sockets.push(sock);

    //sock.setEncoding('hex');
    sock.on('data', function(data) {
        console.log(data.toString())
        //if ((data== 'a') || (data =='b') ||  (data =="y") || (data =='x') ||  (data =='d')) {
        sockets.forEach(function(sock, index, array) {
        sock.write(data.toString());
        });
    //}
    });

    sock.on('close', function(data) {
        let index = sockets.findIndex(function(o) {
            return o.remoteAddress === sock.remoteAddress && o.remotePort === sock.remotePort;
        })
        if (index !== -1) sockets.splice(index, 1);
        console.log('CLOSED: ' + sock.remoteAddress + ' ' + sock.remotePort);
    });
});