'use strict';

var path = require('path');
var verisass = require('../');
var fixtures = path.join(__dirname, '..', 'test', 'fixtures');

verisass(path.join(fixtures, 'add-fn.scss'))
  .run('x { x: add(1px, 2px)}', function (err, css, lines) {
    console.log('css:', css);
    console.log('lines:', lines);
  });
