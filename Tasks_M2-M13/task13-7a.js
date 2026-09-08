// Input: an array of numbers
// Output: the average of all numbers
// Returns: a number
function averageOfArray(numbers) {
let total = 0;
for(digit of numbers){
    total+=digit
}
let average=total/numbers.length
return average;
}
console.log(averageOfArray([2, 4, 6, 8])); // Expected: 4