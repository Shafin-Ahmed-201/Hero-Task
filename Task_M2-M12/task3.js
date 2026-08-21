function evenOrOdd(number){
    if(number%2===0){
        return 'Even';
    }
    else if(number%2===1){
        return 'Odd';
    }
    else{
        return'What is this?'
    }
}
let result=evenOrOdd(66)
console.log(result)