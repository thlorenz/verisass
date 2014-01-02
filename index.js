'use strict';

var scss = require('./lib/scss');

module.exports = Verisass;
var proto = Verisass.prototype;

function Verisass(scssFile) {
  if (!(this instanceof Verisass)) return new Verisass(scssFile);
  this._scssFile = scssFile ;
}

proto.run = function (scssSrc, cb) {
  var self = this;
  scss(this._scssFile, scssSrc, function (err, css) {
   if (err) return cb(err);
   cb(null, css, css.split('\n'));  
  });
}
