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

## Installation

    npm install verisass

## API

<!-- START docme generated API please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN docme TO UPDATE -->

<div>
<div class="jsdoc-githubify">
<section>
<article>
<div class="container-overview">
<dl class="details">
</dl>
</div>
<dl>
<dt>
<h4 class="name" id="verisass"><span class="type-signature"></span>verisass<span class="signature">(scssFile)</span><span class="type-signature"> &rarr; {Object}</span></h4>
</dt>
<dd>
<div class="description">
<p>Creates a verisass instance used to test functins inside the given scss file.</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>scssFile</code></td>
<td class="type">
<span class="param-type">String</span>
</td>
<td class="description last"><p>full path to the scss file whose functions to test</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/verisass/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/verisass/blob/master/index.js#L8">lineno 8</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>verisass instance</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Object</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="verisass.run"><span class="type-signature"></span>verisass.run<span class="signature">(scssSrc, cb)</span><span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Uses the functions defined in the given scss file together with the scss source to
compile CSS that can be tested for validity.</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>scssSrc</code></td>
<td class="type">
<span class="param-type">String</span>
</td>
<td class="description last"><p>scss that causes the sass functions to execute and CSS to be generated</p></td>
</tr>
<tr>
<td class="name"><code>cb</code></td>
<td class="type">
<span class="param-type">function</span>
</td>
<td class="description last"><p>called back with the generated CSS or an error</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/verisass/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/verisass/blob/master/index.js#L21">lineno 21</a>
</li>
</ul></dd>
</dl>
</dd>
</dl>
</article>
</section>
</div>

*generated with [docme](https://github.com/thlorenz/docme)*
</div>
<!-- END docme generated API please keep comment here to allow auto update -->

## License

MIT


