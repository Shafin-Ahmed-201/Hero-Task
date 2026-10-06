// Apply the full debugging process to find this bug
function countVowels(str) {
let vowels = "aeiou";
let count = 0;
for (let i = 0; i < str.length; i++) { // find the bug
if (vowels.includes(str[i])) {
count = count + 1;  //count++
}
}
return count;
}
console.log(countVowels("orangei")); // Expected: 3