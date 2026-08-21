function findLargest(numberArray){
let largest=0
for(i=0; i<numberArray.length; i++){
   let number=numberArray[i]
   if(number>largest){
    largest=number;
   }
}
return largest;
}
let numbers=[20,50,90,10,78,99]
let result=findLargest(numbers)
console.log(result)