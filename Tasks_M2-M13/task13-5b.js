// Input: a sentence (string)
// Output: the shortest word
// Returns: a string
 
function findShortestWord(sentence) {
  let words = sentence.split(" ");
  let shortest = words[0];
  for(i=0; i<words.length; i++){
    let singleWord=words[i]
    if(singleWord.length<shortest.length){
        shortest=singleWord
    }
  }
 
  return shortest;
}
 
console.log(findShortestWord("JavaScript is a fun language")); // Expected: "a"
