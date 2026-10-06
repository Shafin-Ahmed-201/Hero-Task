// Bug: explain this line out loud — what does str.length actually equal for ""?
function isEmpty(str) {
if (str.length === 0) { // find the bug //Logical Error
return true;
} else {
return false;
}
}
console.log(isEmpty("")); // Expected: true
console.log(isEmpty("hi")); // Expected: false