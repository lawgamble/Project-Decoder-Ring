const chart = [
  { letter: "a", pos: 11 },
  { letter: "b", pos: 21 },
  { letter: "c", pos: 31 },
  { letter: "d", pos: 41 },
  { letter: "e", pos: 51 },
  { letter: "f", pos: 12 },
  { letter: "g", pos: 22 },
  { letter: "h", pos: 32 },
  { letter: "i", pos: 42 },
  { letter: "j", pos: 42 },
  { letter: "k", pos: 52 },
  { letter: "l", pos: 13 },
  { letter: "m", pos: 23 },
  { letter: "n", pos: 33 },
  { letter: "o", pos: 43 },
  { letter: "p", pos: 53 },
  { letter: "q", pos: 14 },
  { letter: "r", pos: 24 },
  { letter: "s", pos: 34 },
  { letter: "t", pos: 44 },
  { letter: "u", pos: 54 },
  { letter: "v", pos: 15 },
  { letter: "w", pos: 25 },
  { letter: "x", pos: 35 },
  { letter: "y", pos: 45 },
  { letter: "z", pos: 55 },
];

const polybiusModule = (function () {
 

  function polybius(input, encode = true) {
    if (!input || typeof input !== "string") return false;
    
    let result = "";
    let arr = [];
  
    if (encode) {
      input.toLowerCase().split(" ").forEach((word) => {
        word.split("").forEach((lett) => {
          if (lett.match(/([^a-z\s])/g)) {
            result;
          } else {
            chart.forEach((match) =>
              match.letter === lett ? (result += match.pos) : result
            );
          }
        });
  
        arr.push(result);
        result = "";
      });
    } else if (!encode) {
      if (input.split(" ").join("").length % 2 !== 0) return false;
      input.split(" ").forEach((group) => {
        group.match(/\d{1,2}/g).forEach((num) => {
          if (parseInt(num) === 42) {
            result += "(i/j)";
          } else {
            chart.forEach((match) =>
              parseInt(num) === match.pos ? (result += match.letter) : result
            );
          }
        });
        arr.push(result);
        result = "";
      });
    }
    return arr.join(" ");
  }
   
  

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
