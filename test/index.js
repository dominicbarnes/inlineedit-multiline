// dependencies
var domify = require("domify");
var expect = require("expect.js");
var InlineEditMultiline = require("inlineedit-multiline");

describe("InlineEditMultiline(settings)", function () {
    describe("#interfaceElement", function () {
        var prop = InlineEditMultiline.prototype.interfaceElement;

        it("should be a string by default", function () {
            expect(prop).to.be.a("string");
        });

        it("should not be the default form", function () {
            expect(domify(prop).tagName).to.equal("TEXTAREA");
        });
    });
});
