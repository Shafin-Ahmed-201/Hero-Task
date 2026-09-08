// Input: an object (values are unique)
// Output: a new object with keys and values swapped
// Returns: an object
function invertObject(obj) {
let inverted = {};

// let ob=Object.entries(obj)
// for(i=0; i<ob.length; i++){
//     let singleArr=ob[i]
//     let reverseArr=singleArr.reverse().join(':')

for(let key in obj){
    inverted[obj[key]]=key;
}
  return inverted;  
}

// }
console.log(invertObject({ a: 1, b: 2, c: 3 }));
// Expected: { 1: "a", 2: "b", 3: "c" }