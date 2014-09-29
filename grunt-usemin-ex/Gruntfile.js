module.exports = function(grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);

  grunt.config.init({
    useminPrepare: {
      html: 'client/src/index.html',
      options: {
        dest: 'client/dist'
      }
    },
    usemin: {
      html: [
        'client/dist/index.html'
      ]
    },
    copy: {
      html: {
        src: 'client/src/index.html',
        dest: 'client/dist/index.html'
      }
    },
    clean: {
      all: [
        '.tmp',
        'client/dist'
      ],
      tmp: [
        '.tmp'
      ]
    }
  });

  grunt.registerTask('default', [
    'build'
  ]);

  grunt.registerTask('build', [
    'clean:all',
    'copy:html',
    'useminPrepare',
    'concat',
    'uglify',
    'cssmin',
    'usemin',
    'clean:tmp'
  ]);
};
