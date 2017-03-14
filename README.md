## gulp-nativejsx [![Build Status](https://travis-ci.org/treycordova/gulp-nativejsx.svg?branch=master)](https://travis-ci.org/treycordova/gulp-nativejsx) [![Version Status](https://img.shields.io/npm/v/gulp-nativejsx.svg)](https://www.npmjs.org/package/gulp-nativejsx)
#### Gulp plugin for [nativejsx](https://github.com/treycordova/nativejsx).
Hello, my soda-slurping Gulpers. Here's a Gulp plugin to help fill your cup.

#### Installation
Install `gulp-nativejsx` by running this command in your project folder:
```shell
npm install gulp-nativejsx --save-dev
```

#### Configuration
```js
'use strict';

var gulp = require('gulp');
var nativejsx = require('gulp-nativejsx');

gulp.task('nativejsx', function() {
  return gulp.src('./templates/**/*.jsx').
    pipe(nativejsx().on('error', error)).
    pipe(gulp.dest('./build/templates'));
});

gulp.task('nativejsx:watch', function() {
  gulp.watch('./templates/**/*.jsx', ['nativejsx']);
});
```

##### Options
```js
gulp.task('nativejsx', function() {
  return gulp.src('./templates/**/*.jsx').
    pipe(nativejsx({variablePrefix: '__', declarationType: 'let'}).on('error', error)).
    pipe(gulp.dest('./build/templates'));
});
```
- **declarationType**: Either `var` (default), `const`, or `let`.
- **variablePrefix**: Any string (defaults to `$$`) you can conjure up that produces a _valid_ JavaScript variable.
- **acorn**: All acorn options are available [here](https://github.com/ternjs/acorn#main-parser). Defaults to `{plugins: {jsx: true}, ecmaVersion: 6, sourceType: 'module'}`.
