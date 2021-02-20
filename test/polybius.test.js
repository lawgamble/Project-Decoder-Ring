const { expect } = require("chai");
const polybius = require("../src/polybius");


describe("polybius", () => {
    it("should return encoded numbers when a string is used as an argument.", () => {
        expect(polybius("message")).equal("23513434112251");
    })
    it("should return an empty string if input argument does not match any object in the chart.", () => {
        expect(polybius("!!!!@#$%")).equal("");
    })
    it("should decode a message if the input argument are numbers and encode is false.", () => {
        expect(polybius("23513434112251", false)).equal("message");
    })
    it("should group the letters i and j when the correct argument is used.", () => {
        expect(polybius("42", false)).equal("(i/j)");
        expect(polybius("i")).equal("42");
        expect(polybius("j")).equal("42");
    })
    it("should return false if no input is used or the input argument is not a string", () => {
        expect(polybius()).equal(false);
    })
    it("should return false if when decoding, encode is false and the input amount of numbers is odd", () => {
        expect(polybius("424", false)).equal(false);
    })
    it("ignores capital letters and uses all lowercase letters", () => {
        expect(polybius("Message")).equal("23513434112251");
    })
    it("maintains spaces before and after encoding and decoding", () => {
        expect(polybius("me age")).equal("2351 112251");
        expect(polybius("2351 112251", false)).equal("me age");
    })
})

