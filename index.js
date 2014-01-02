'use strict';

var scss = require('./lib/scss');

module.exports = Verisass;
var proto = Verisass.prototype;

/**
 * Creates a verisass instance used to test functins inside the given scss file.
 * 
 * @name verisass
 * @function
 * @param {String} scssFile full path to the scss file whose functions to test
 * @return {Object} verisass instance
 */
function Verisass(scssFile) {
  if (!(this instanceof Verisass)) return new Verisass(scssFile);
  this._scssFile = scssFile ;
}

/**
 * Uses the functions defined in the given scss file together with the scss source to
 * compile CSS that can be tested for validity.
 * 
 * @name verisass_run
 * @function
 * @param {String} scssSrc scss that causes the sass functions to execute and CSS to be generated
 * @param {Function(Error, String)} cb called back with the generated CSS or an error
 */
proto.run = function (scssSrc, cb) {
  var self = this;
  scss(this._scssFile, scssSrc, function (err, css) {
   if (err) return cb(err);
   cb(null, css, css.split('\n'));  
  });
}
