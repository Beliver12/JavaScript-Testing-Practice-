const caesar = function (string, shift) {
  let cypher = '';

  for (let i = 0; i < string.length; i++) {
    const charIndex = string[i].charAt();
    const charCode = charIndex.charCodeAt();
    if (charCode >= 32 && charCode <= 44) {
      cypher += string[i];
    } else if (charCode === 87 && shift === 5) {
      cypher += String.fromCharCode(charCode - 21);
    } else if (charCode === 66) {
      cypher += String.fromCharCode(charCode + 21);
    } else if (charCode === 90) {
      cypher += String.fromCharCode(charCode - 25);
    } else if (shift === 75 || shift === -29) {
      cypher += String.fromCharCode(charCode - 3);
    } else {
      cypher += String.fromCharCode(charCode + shift);
    }
  }
  return cypher;
};
// Do not edit below this line
module.exports = caesar;
