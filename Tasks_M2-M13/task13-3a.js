// Input: a number
// Output: product of its digits
// Returns: a number

function productOfDigits(num) {
  let str = num.toString();
  let total = 1;
  for(i=0; i<str.length; i++){
    number=str[i]
    total*=number
  }
  return total;
}

console.log(productOfDigits(4040)); 

