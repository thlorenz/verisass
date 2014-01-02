# verisass [![build status](https://secure.travis-ci.org/thlorenz/verisass.png)](http://travis-ci.org/thlorenz/verisass)

Verify that your sass functions generate the css you expect.

**ve·ri·tas/wey-ri-tahs/** meaning truth, was the goddess of truth, a daughter of Saturn and the mother of Virtue.

```js
var verisass = require('verisass');

verisass(path.join(fixtures, 'add-fn.scss'))
  .run('x { x: add(1px, 2px)}', function (err, css, lines) {
    console.log('css:', css);
    console.log('lines:', lines);
  });
```

### Output

```css
css: x {
  x: 3px;
}
lines: [ 'x {', '  x: 3px;', '}' ]
```

```js
var verisass = require('verisass');

verisass(path.join(fixtures, 'add-fn.scss'))
  .run('x { x: add(1px, 2px)}', function (err, lines) {
    console.log(lines);
  });
```

### Output

```
[ 'x {', '  x: 3px;', '}' ]
```


## Status

Nix, Nada, Nichevo, Nothing --> go away!
## Installation

    npm install verisass

## API


## License

MIT
