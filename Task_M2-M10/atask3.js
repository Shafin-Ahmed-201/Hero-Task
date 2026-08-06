const numbers = [-7,3,2, 13, 54, 5, 7, 2, 87, 5,-3,-5];

let largest=numbers[0]
let smallest=numbers[0]

for (let i = 0; i < numbers.length; i++) {
   const number =numbers[i]
   if(number>largest){
    largest=number;
   }
   else if(number<smallest){
    smallest=number;
   }

}
console.log(largest)
console.log(smallest)