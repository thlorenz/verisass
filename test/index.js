'use strict';
/*jshint asi: true */

var test = require('tap').test
var verisass = require('../')
var path = require('path')

var fixtures = path.join(__dirname, 'fixtures');

function inspect(obj, depth) {
  console.error(require('util').inspect(obj, false, depth || 5, true));
}

test('\nadd long form', function (t) {

  verisass(path.join(fixtures, 'add-fn.scss'), true)
    .run('.calc { margin: add(1px, 2px); }', function (err, css, lines) {
      if (err) { t.fail(err); return t.end(); }
      t.equal(css, '.calc {\n  margin: 3px;\n}', 'returns css string')
      t.deepEqual(
          lines
        , [ '.calc {',
            '  margin: 3px;',
            '}' ]
        , 'returns lines'
      )
      t.end()
    });
})

test('\n error', function (t) {
  verisass(path.join(fixtures, 'add-fn.scss'))
    .run('x: add(1px, 2px)', function (err, lines) {
      t.similar(err, /Syntax error: Invalid CSS/, 'returns parse error')
      t.end()
    });
})

test('\nadd short form', function (t) {
  verisass(path.join(fixtures, 'add-fn.scss'))
    .run('x { x: add(1px, 2px)}', function (err, css, lines) {
      if (err) { t.fail(err); return t.end(); }
      t.equal(css, 'x {\n  x: 3px;\n}', 'returns css string')
      t.deepEqual(lines, [ 'x {', '  x: 3px;', '}' ], 'returns lines')
      t.end()
    });
})
