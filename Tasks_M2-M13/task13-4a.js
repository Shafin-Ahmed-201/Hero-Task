// Input: a string (lowercase letters only)
// Output: count of vowels
// Returns: a number
 
function countVowels(str) {
  let vowels = "aeiou";
  let count = 0;
  for(i=0; i<str.length; i++){
    let letter=str[i]
    if(vowels.includes(letter)){
        count++;
    }
  }
 
  return count;
}
 
console.log(countVowels("javascriptoala")); // Expected: 3
