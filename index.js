'use strict';

let gutil = require('gulp-util');
let through = require('through2');
let jsxdom = require('jsxdom');

module.exports = function(options) {
  return through.obj(function(file, encoding, callback) {
    if (file.isNull()) {
      callback(null, file);
    }

    if (file.isStream()) {
      callback(new gutil.PluginError('gulp-jsxdom', 'Streaming not supported.'));
    }

    try {
      let transpiled = jsxdom.transpile(file.contents.toString(), options);

      file.contents = new Buffer(transpiled);
      file.path = gutil.replaceExtension(file.path, '.js');

      callback(null, file);
    } catch (error) {
      callback(new gutil.PluginError('gulp-jsxdom', error, {
        fileName: file.path
      }));
    }
  });
};
