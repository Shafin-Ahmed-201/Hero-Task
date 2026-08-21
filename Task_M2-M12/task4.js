function findLargest(a,b){
    if(a>b){
        return a;
    }
    else{
        return b;
    }
}

let largeOne=findLargest(4,2)
console.log('Largest Number: ',largeOne)