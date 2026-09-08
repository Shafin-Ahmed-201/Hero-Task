// Input: an array of numbers
// Output: how many numbers are divisible by 3
// Returns: a number
function countMultiplesOfThree(numbers) {
let count = 0;
for(let digit of numbers){
    if(digit%3===0){
        count++
    }
}
return count;
}
console.log(countMultiplesOfThree([3, 4, 6, 7, 9, 10,15])); // Expected: 3