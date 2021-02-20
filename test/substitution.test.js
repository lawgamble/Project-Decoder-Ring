const { expect } = require("chai");
const substitution = require("../src/substitution");
const tester = require("../src/substitution");

describe("tester", () => {
    it ("should return false if there is no argument, if the input is not exactly 26 characters, or there are any repeated characters.", () => {
        expect(tester("waerhyfg")).equal(false);
        expect(tester()).equal(false);
        expect(tester("qqwertyuiopasdfghjklzxcvbn")).equal(false);
    })
})

describe("substitution", () => {
    it ("should correctly translates the given phrase, based on the alphabet given to the function.", () => {
        expect(substitution("message", "plmoknijbuhvygctfxrdzeswaq")).equal("ykrrpik");
    })
    it ("should return false if the alphabet argument is not exactly 26 characters long or there is no alphabet argument.", () => {
        expect(substitution("hello", "qwertyugdfgdfg")).equal(false);
        expect(substitution("hello")).equal(false);
    })
    it ("should maintain spaces in the message, before and after encoding or decoding.", () => {
        expect(substitution("me age", "plmoknijbuhvygctfxrdzeswaq")).equal("yk pik");
        expect(substitution("yk pik", "plmoknijbuhvygctfxrdzeswaq", false)).equal("me age"); 
    })
    it ("should ignore capital letters, returning lowercase letters", () => {
        expect(substitution("MesSage", "plmoknijbuhvygctfxrdzeswaq")).equal("ykrrpik");
    });
    
});

