function factorial(n){
    let factorial = 1;
// n × (n - 1) × (n - 2) × ... × 1
for (let i = n; i >= 1; i--) {
    factorial = factorial * i;
}
return factorial;
}

let result=factorial(7)
console.log(result)