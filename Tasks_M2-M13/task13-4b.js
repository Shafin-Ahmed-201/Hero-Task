function removeFirstAndLast(str) {
//     let middlestr=''
// for(i=1; i<str.length-1; i++){
//     let letter = str[i]
//     middlestr+= letter
// }
//  return middlestr;

//Using slice method
let middlepart=str.slice(1,4)
return middlepart;
}
 
console.log(removeFirstAndLast("hello")); // Expected: "ell"
