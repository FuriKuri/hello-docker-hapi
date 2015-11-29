'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ 
    port: 8000 
});

server.route({
    method: 'GET',
    path:'/', 
    handler: function (request, reply) {
        return reply({
            msg: 'Hello World'
        });
    }
});

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});