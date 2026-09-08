// Input: a number
// Output: true or false
// Returns: a boolean
function isPerfectSquare(num) {
let sq=Math.sqrt(num)
if(sq%1!==0){
    return false
}
else{
return true
}

}
console.log(isPerfectSquare(47)); // Expected: true
// console.log(isPerfectSquare(20)); // Expected: false