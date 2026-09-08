// Input: a sentence (string)
// Output: sentence with word order reversed
// Returns: a string
function reverseWords(sentence) {
let reverseWord=sentence.split(' ').reverse().join(' ')
return reverseWord
}
console.log(reverseWords("hello world")); // Expected: "world hello"