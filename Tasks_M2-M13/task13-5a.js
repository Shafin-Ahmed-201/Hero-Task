// Input: a string
// Output: true or false
// Returns: a boolean
 
function isPalindrome(str) {
  let reverseString=str.split('').reverse().join('')
  if(str===reverseString){
    return true;
  }
  else if(str!==reverseString){
    return false;
  }
}
 
console.log(isPalindrome("level")); // Expected: true
console.log(isPalindrome("hello")); // Expected: false
