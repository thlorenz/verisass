'use strict';

var exec      =  require('child_process').exec
  , os        =  require('os')
  , fs        =  require('fs')
  , path      =  require('path')
  , cuid      =  require('cuid')
  , parse     =  require('css-parse')
  , stringify =  require('css-stringify')
  ; 

// HACK: to make this work in travis
var scssCmd = process.env.VERISASS_SCSS || 'scss';

var tmpdir = os.tmpDir();

function run(progName, cmds, cb) {
  var task = progName + ' ' + cmds.join(' ');
  var prog = exec(
      task
    , { stdio: 'inherit', env: { SASSPATH: '.' } }
    , function (err, stdout, stderr) { cb(err); }
  )
}

/**
 * Runs scss program with for given scss and call back with resulting css.
 *
 * @name scss
 * @private
 * @function
 * @param {String} scssPath full path to scss file that contains the scss to be tested
 * @param {String} scssTest scss snippet to test the scss contained in the scss path
 * @param {Function} cb called when scss is finished
 */
var go = module.exports = function (scssPath, scssTest, cb) {

  var scssTgtPath =  path.join(tmpdir, cuid() + '.scss')
    , cssPath     =  path.join(tmpdir, cuid() + '.css')
    , args        =  [ scssTgtPath, cssPath ];
    
  var scssImport = '@import "' + scssPath + '";\n\n';

  fs.writeFile(scssTgtPath, scssImport + scssTest, 'utf8', function (err) {
    if (err) return cb(err);
    run(scssCmd, args, returnCss);
  });

  function returnCss(err) {
    if (err) return cb(err);

    fs.readFile(cssPath, 'utf8', function (err, css) {
      if (err) return cb(err);
      
      // ensure that formatting stays the same via parse->stringify
      try {
        var stringified = stringify(parse(css));
        cb(null, stringified)
      } catch (e) {
        cb(e);
      }
    });
    // TODO: cleanup tmp files?
  }
};
