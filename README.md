## gulp-jsxdom [![Build Status](https://travis-ci.org/treycordova/gulp-jsxdom.svg?branch=master)](https://travis-ci.org/treycordova/gulp-jsxdom) [![Version Status](https://img.shields.io/npm/v/gulp-jsxdom.svg)](https://www.npmjs.org/package/gulp-jsxdom)
#### Gulp plugin for [jsxdom](https://github.com/treycordova/jsxdom).
Hello, my soda-slurping Gulpers. Here's a gulpjs plugin to help fill your cup.

#### Installation
Install `gulp-jsxdom` by running this command in your project folder:
```shell
npm install gulp-jsxdom --save-dev
```

#### Configuration
```js
'use strict';

var gulp = require('gulp');
var jsxdom = require('gulp-jsxdom');

gulp.task('jsxdom', function() {
  return gulp.src('./templates/**/*.jsx').
    pipe(jsxdom().on('error', error)).
    pipe(gulp.dest('./build/templates'));
});

gulp.task('jsxdom:watch', function() {
  gulp.watch('./templates/**/*.jsx', ['jsxdom']);
});
```

##### Options
```js
gulp.task('jsxdom', function() {
  return gulp.src('./templates/**/*.jsx').
    pipe(jsxdom({variablePrefix: '__', declarationType: 'let'}).on('error', error)).
    pipe(gulp.dest('./build/templates'));
});
```
- **declarationType**: Either `var` (default) or `let`.
- **variablePrefix**: Any string (defaults to `$$`) you can conjure up that produces a _valid_ JavaScript variable.
- **acorn**: All acorn options are available [here](https://github.com/ternjs/acorn#main-parser). Defaults to `{plugins: {jsx: true}}`.
