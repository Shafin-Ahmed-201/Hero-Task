// Input: an array of numbers
// Output: array with only even numbers
// Returns: an array
function keepEvenNumbers(numbers) {
let result = [];
for(digit of numbers){
    if(digit%2===0){
        result.push(digit)
    }
}
return result;
}
console.log(keepEvenNumbers([3, -5, 8, -1, 0])); // Expected: [8, 0]