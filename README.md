inlineedit-multiline
====================

An [inlineedit](http://github.com/dominicbarnes/inlineedit) extension that uses
a `<textarea>` to enable multi-line editing.


## Usage:

```html
<p id="page-description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra
    velit vitae pharetra adipiscing. Pellentesque habitant morbi tristique
    senectus et netus et malesuada fames ac turpis egestas. Aliquam consectetur
    imperdiet cursus. Ut feugiat neque ut rhoncus facilisis. Morbi dignissim
    quis ipsum in sagittis. Morbi tempor, erat et porttitor pulvinar, arcu
    metus facilisis ante, et luctus quam nibh eget enim. Vivamus malesuada
    congue ligula, facilisis gravida metus semper a. Duis id nisl scelerisque,
    pharetra nisi at, lobortis nunc.
</p>
```

```javascript
var InlineEditMultiline = require("inlineedit-multiline");

var instance = new InlineEditMultiline({
    element: "#page-description",
    submitForm: function (value, done) {
        // perform AJAX and save this value to your database
        // issue the callback w/ an `err` param (node-style) upon failure
    }
});
```
