function capitalize(string) {
  const firstLetter = string.charAt(0).toUpperCase();
  const temp = string.slice(1);
  const newString = firstLetter + temp;
  return newString;
}
module.exports = capitalize;

