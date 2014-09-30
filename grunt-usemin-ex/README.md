# grunt-usemin Example

Simple grunt-usemin example which shows how you can minify/optimize [Angular.js](https://angularjs.org) resources using:

- [gruntjs/**grunt-contrib-concat**](https://github.com/gruntjs/grunt-contrib-concat)
- [gruntjs/**grunt-contrib-cssmin**](https://github.com/gruntjs/grunt-contrib-cssmin)
- [gruntjs/**grunt-contrib-uglify**](https://github.com/gruntjs/grunt-contrib-uglify)
- [yeoman/**grunt-usemin**](https://github.com/yeoman/grunt-usemin)

Also uses the wonderful [ESLint](http://eslint.org/) for linting (via the [grunt-eslint](https://github.com/sindresorhus/grunt-eslint) module).

## Getting started

```sh
$ git clone git@github.com:pdehaan/grunt-examples.git
$ cd grunt-examples/grunt-usemin-ex
$ npm install # Install Node.js dependencies.
$ bower install # Install Bower dependencies.
$ grunt build # Generate production assets.
$ python -m SimpleHTTPServer # Start local Python web server.
$ open http://localhost:8000/client/src/ # Preview development build.
$ open http://localhost:8000/client/dist/ # Preview production build.
```

## Available Grunt tasks

- `default` &mdash; Alias for "lint", "build" tasks.
- `build` &mdash; Alias for "clean:all", "copy:html", "useminPrepare", "concat", "uglify", "cssmin", "usemin", "clean:tmp" tasks.
- `clean` &mdash; Clean files and folders. *
- `concat` &mdash; Concatenate files. *
- `copy` &mdash; Copy files. *
- `cssmin` &mdash; Minify CSS *
- `eslint` &mdash; Validate files with ESLint *
- `lint` &mdash; Alias for "eslint" task.
- `uglify` &mdash; Minify files with UglifyJS. *
- `usemin` &mdash; Replaces references to non-minified scripts / stylesheets *
- `useminPrepare` &mdash; Using HTML markup as the primary source of information *

**Note:** Tasks run in the order specified. Arguments may be passed to tasks that accept
them by using colons, like "lint:files". Tasks marked with * are "multi tasks"
and will iterate over all sub-targets if no argument is specified.

## Files

```
(root)
├── .bowerrc
├── .eslintignore
├── .eslintrc
├── .gitignore
├── Gruntfile.js
├── README.md
├── bower.json
├── client
│   ├── bower_components
│   │   └── (...)
│   ├── dist
│   │   ├── assets
│   │   │   ├── css
│   │   │   │   └── style.min.css
│   │   │   └── js
│   │   │       └── app.min.js
│   │   └── index.html
│   └── src
│       ├── assets
│       │   ├── css
│       │   │   └── style.css
│       │   └── js
│       │       ├── app.js
│       │       ├── controllers.js
│       │       └── filters.js
│       └── index.html
├── node_modules
│   └── (...)
└── package.json

11 directories, 16 files
```

## Resources

- [Grunt-usemin Example (**h3manth.com**)](http://h3manth.com/new/blog/2014/grunt-usemin-example/)
- [Using Grunt with AngularJS for Front End Optimization (**raibledesigns.com**)](http://raibledesigns.com/rd/entry/using_grunt_with_angularjs_for)
