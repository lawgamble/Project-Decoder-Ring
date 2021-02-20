const substitutionModule = (function () {
  function tester(alphabet) {
    if (!alphabet || alphabet.length != 26) return false;
    for (letter of alphabet) {
      if (alphabet.indexOf(letter) != alphabet.lastIndexOf(letter)) {
        return false;
      }
    }
  }

  function substitution(input, alphabet, encode = true) {
    if (tester(alphabet) === false) return false;
    const alpha = "abcdefghijklmnopqrstuvwxyz ";
    const inputAlphabet = [...alphabet, " "];
    let result = "";
    input = input.toLowerCase();
    for (let i = 0; i < input.length; i++) {
      if (encode) {
        result += inputAlphabet[alpha.indexOf(input[i])];
      } else {
        result += alpha[inputAlphabet.indexOf(input[i])];
      }
    }
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
