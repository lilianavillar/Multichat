/**
 * Created by UO232510 on 21/03/2017.
 */
module.exports = function(app) {
    var config = require('../config');
    var http = require('http');
    var server = http.createServer(app);
    server.listen(config.port);
    server.on('error', onError);
    server.on('listening', onListening);
    function onError(error) {
        console.error(error.message);
        process.exit(1);
    }
    function onListening() {
        console.log('The HTTP server is running on PORT: ' + config.port);
    }
    return server;
};