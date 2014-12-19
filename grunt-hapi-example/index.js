var server = require('./server/index');

server.start(function (err) {
  if (err) {
    throw err;
  }
  console.log('Hapi server started at %s', server.info.uri);
});
