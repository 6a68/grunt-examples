module.exports = function (grunt) {
  'use strict';

  var resolve = require('path').resolve;

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    hapi: {
      server: {
        options: {
          server: resolve('./server/index'),
          noasync: true
        }
      },
      async: {
        options: {
          server: resolve('./server/index')
        }
      }
    },
    watch: {
      hapi: {
        files: ['./server/*.js', './Gruntfile.js'],
        tasks: ['hapi:async'],
        options: {
          spawn: true
        }
      }
    }
  });

  grunt.registerTask('default', ['hapi:server']);
  grunt.registerTask('server', ['hapi:async', 'watch']);
};
