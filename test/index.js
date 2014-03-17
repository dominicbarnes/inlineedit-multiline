// dependencies
var domify = require("domify");
var expect = require("expect.js");
var InlineEditMultiline = require("inlineedit-multiline");

describe("InlineEditMultiline(settings)", function () {
    describe("#generateForm", function () {
        var prop = InlineEditMultiline.prototype.generateForm;

        it("should be a string by default", function () {
            expect(prop).to.be.a("string");
        });

        it("should not be the default form", function () {
            var frag = domify(prop);

            expect(frag.tagName).to.equal("FORM");
            expect(frag.elements[0].tagName).to.equal("TEXTAREA");
            expect(frag.elements[1].tagName).to.equal("BUTTON");
            expect(frag.elements[2].tagName).to.equal("BUTTON");
        });
    });
});

function createInstance(o) {
    if (!o)         o = {};
    if (!o.element) o.element = domify("<div>Hello World</div>");

    document.body.appendChild(o.element);
    return new InlineEdit(o);
}

function destroyInstance(instance) {
    instance.destroy();
    document.body.removeChild(instance.element);
}
