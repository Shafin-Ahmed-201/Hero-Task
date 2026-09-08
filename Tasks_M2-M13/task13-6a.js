// Input: an array of numbers
// Output: the second smallest number
// Returns: a number
 
function findSecondSmallest(numbers) {
  let smallest = Infinity;
  let secondSmallest = Infinity;
  for (let i = 1; i < numbers.length; i++) {
    const number = numbers[i];

    if (number < smallest) {
        secondSmallest = smallest;
        smallest = number;
    } else if (number < secondSmallest && number !== smallest) {
        secondSmallest = number;
    }
}
 
  return secondSmallest;
}
 
console.log(findSecondSmallest([10, 5, 8, 20, 15])); // Expected: 8



//For SecondLargest Finding
// const numbers = [20, 50, 10, 90, 70, 80, 100, 250, 30];

// let largest = numbers[0];
// let secondLargest = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//     const number = numbers[i];

//     if (number > largest) {
//         secondLargest = largest;
//         largest = number;
//     } else if (number > secondLargest && number !== largest) {
//         secondLargest = number;
//     }
// }

// console.log("Largest:", largest);
// console.log("Second Largest:", secondLargest);