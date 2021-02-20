const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    if (encode === false) {
      return caesar(input, shift * -1);
    }
    if (shift < 0) {
      return caesar(input, shift + 26);
    }
    input = input.toLowerCase();
    let result = "";
    for (let i = 0; i < input.length; i++) {
      let output = input[i];
      if (output.match(/[a-z]/)) {
        let code = input.charCodeAt([i]);
        output = String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }
      result += output;
    }
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
