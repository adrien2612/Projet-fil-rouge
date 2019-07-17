const net = require('net');
const client = new net.Socket();
const port = 3001;
const host = '192.168.43.201';

client.connect(port, host, function() {
    console.log('Connected');
    client.write('a');
});


client.on('data', function(data) {
    console.log('Server Says : ' + data);
});

client.on('close', function() {
    console.log('Connection closed');
});