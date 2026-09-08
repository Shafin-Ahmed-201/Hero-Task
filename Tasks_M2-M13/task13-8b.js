// Input: an object, a key (string), a default value
// Output: the value at that key, or the default
// Returns: any value
function getValueOrDefault(obj, key, defaultValue) {
for(keys in obj){
    if(keys===key){
        return obj[keys]  //use [] because key stored in veriable
    }
}
return defaultValue;
}
let person = { name: "Sam", age: 25 };

// console.log(getValueOrDefault(person, "age", 0)); // Expected: 25
console.log(getValueOrDefault(person, "grade", "N/A")); // Expected:
// "N/A"