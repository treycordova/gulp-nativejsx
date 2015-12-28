'use strict';

let path = require('path');
let assert = require('chai').assert;
let gutil = require('gulp-util');
let jsxdom = require('../');

describe('gulp-jsxdom', function() {
  it('transpiles JSX to native DOM', function(done) {
    var stream = jsxdom();

    stream.on('data', function(file) {
      assert.match(file.contents.toString(), /var \$\$a = document\.createElement\('div'\);/);
      assert.equal(file.relative, 'fixture.js');
    });

    stream.on('end', done);

    stream.write(new gutil.File({
      cwd: __dirname,
      base: path.join(__dirname, 'fixture'),
      path: path.join(__dirname, 'fixture', 'fixture.jsx'),
      contents: new Buffer('var div = <div></div>;')
    }));

    stream.end();
  });
});
