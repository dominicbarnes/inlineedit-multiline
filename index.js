/**
 * An inlineedit extension that gives a <textarea> as the editing interface.
 *
 * @see http://github.com/dominicbarnes/inlineedit
 *
 * @author Dominic Barnes <dominic@dbarnes.info>
 */

"use strict";

// dependencies
var InlineEdit = require("inlineedit");


// single export
module.exports = InlineEdit.extend({
    generateInterface: require("./interface.html")
});
