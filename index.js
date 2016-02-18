'use strict';

let gutil = require('gulp-util');
let through = require('through2');
let nativejsx = require('nativejsx');

module.exports = function(options) {
  return through.obj(function(file, encoding, callback) {
    if (file.isNull()) {
      callback(null, file);
    }

    if (file.isStream()) {
      callback(new gutil.PluginError('gulp-nativejsx', 'Streaming not supported.'));
    }

    try {
      let transpiled = nativejsx.transpile(file.contents.toString(), options);

      file.contents = new Buffer(transpiled);
      file.path = gutil.replaceExtension(file.path, '.js');

      callback(null, file);
    } catch (error) {
      callback(new gutil.PluginError('gulp-nativejsx', error, {
        fileName: file.path
      }));
    }
  });
};
