module.exports = function(io, client){
    const net = require('net');
    var cli = new net.Socket();
    const port = 3001;
    const host = '192.168.43.201';

    cli.connect(port, host, function() {
        console.log('Connected');
    });

    cli.on('data', function(package) {
        console.log(package.toString('utf8'))
        console.log('/api/robot/receive', package.toString('utf8'))
        client.emit('/api/robot/receive', package.toString('utf8'))
    });

    client.on('/api/robot/send', function(package){
        console.log('/api/robot/send', package)
        cli.write(package)
    })
}