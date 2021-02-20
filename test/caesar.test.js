const { expect } = require("chai");
const caesar = require("../src/caesar")

describe("caesar", () => {
    it("should correctly encode the string input by the amount of shift given.", () => {
        expect(caesar("zebra magazine", 3)).equal("cheud pdjdclqh");
    })
    it("should returns false if the shift value is equal to 0, less than -25, greater than 25, or not present.", () => {
        expect(caesar("input", 0)).equal(false);
        expect(caesar("input")).equal(false);
        expect(caesar("input", -26)).equal(false);
        expect(caesar("input", 26)).equal(false);
    })
    it("should decode a message if encode is false.", () => {
        expect(caesar("ifmmp", 1, false)).equal("hello");
    })
    it("should ignore capital letters and return in all lowercase.", () => {
        expect(caesar("HELLO", 1)).equal("ifmmp");
    })
    it("should handle shifts that go past the end of the alphabet; returning to a from z.", () => {
        expect(caesar("z", 3)).equal("c");
    })
})