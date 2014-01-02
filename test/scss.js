'use strict';
/*jshint asi: true */

var test = require('tap').test
var path = require('path')
var scss = require('../lib/scss')

var fixtures = path.join(__dirname, 'fixtures');

function inspect(obj, depth) {
  console.error(require('util').inspect(obj, false, depth || 5, true));
}

test('\nadd function - no errors', function (t) {
  t.plan(2);

  var p = path.join(fixtures, 'add-fn.scss');
  scss(p, '.calc { margin: add(1px, 2px); }', function (err, res) {
    if (err) { t.fail(err); return t.end(); }
    var lines = res.split('\n') 

    t.deepEqual(
        lines
      , [ '.calc {',
          '  margin: 3px;',
          '}' ]
      , 'returns compiled css'
    )
  })

  scss(p, '.calc { margin: add(2px, 12px); }', function (err, res) {
    if (err) { t.fail(err); t.end(); }
    var lines = res.split('\n') 

    t.deepEqual(
        lines
      , [ '.calc {',
          '  margin: 14px;',
          '}' ]
      , 'returns compiled css'
    )
  })
})

test('\nadd function - tests have scss errors', function (t) {

  var p = path.join(fixtures, 'add-fn.scss');
  // missing '{'
  scss(p, '.calc  margin: add(1px, 2px); }', function (err, res) {
    t.similar(err, /Syntax error: Invalid CSS/, 'returns parse error')
    t.end()
  })
})

test('\nbuggy function', function (t) {

  var p = path.join(fixtures, 'add-buggy-fn.scss');

  scss(p, '.calc { margin: add(1px, 2px); }', function (err, res) {
    t.similar(err, /Syntax error: Invalid CSS/, 'returns parse error')
    t.end()
  })
})
