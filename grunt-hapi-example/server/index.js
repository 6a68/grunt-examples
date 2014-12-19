'use strict';

var Hapi = require('hapi');
var server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8080
});
server.route([
  {
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      reply('Hello world');
    }
  }, {
    method: 'GET',
    path: '/foo',
    handler: function (request, reply) {
      reply('/foo route');
    }
  }, {
    method: 'GET',
    path: '/bar',
    handler: function (request, reply) {
      reply('/bar route');
    }
  }
]);

module.exports = server;
