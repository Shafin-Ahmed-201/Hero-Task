// Input: a number
// Output: the number with digits reversed
// Returns: a number

function reverseNumber(num) {
  let str = num.toString();
  const reverseString = str.split("").reverse().join("");


  return reverseString;
}

console.log(reverseNumber(1234));
console.log(reverseNumber(7));