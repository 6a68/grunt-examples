module.exports = function(grunt) {
  "use strict";

  require("load-grunt-tasks")(grunt);

  grunt.config.init({
    Globals: {
      SRC: "client/src",
      DIST: "client/dist",
      TMP: ".tmp"
    },

    clean: {
      all: [
        "<%= Globals.TMP %>",
        "<%= Globals.DIST %>"
      ],
      tmp: [
        "<%= Globals.TMP %>"
      ]
    },

    copy: {
      html: {
        src: "<%= Globals.SRC %>/index.html",
        dest: "<%= Globals.DIST %>/index.html"
      }
    },

    eslint: {
      options: {
        config: ".eslintrc"
      },
      app: {
        src: [
          "*.js",
          "<%= Globals.SRC %>/**/*.js"
        ]
      }
    },

    uglify: {
      options: {
        report: "min",
        mangle: false
      }
    },

    useminPrepare: {
      html: "<%= Globals.SRC %>/index.html",
      options: {
        dest: "<%= Globals.DIST %>"
      }
    },

    usemin: {
      html: [
        "<%= Globals.DIST %>/index.html"
      ]
    }
  });

  grunt.registerTask("default", [
    "lint",
    "build"
  ]);

  grunt.registerTask("lint", [
    "eslint"
  ]);

  grunt.registerTask("build", [
    "clean:all",
    "copy:html",
    "useminPrepare",
    "concat",
    "uglify",
    "cssmin",
    "usemin",
    "clean:tmp"
  ]);
};
