function calculateDiscount(price, discount){
    let dis=price*discount/100
    
    let final=price-dis

// Object Return
    return{
        dis:dis,
        final:final
    };
// Array Return
//  return [dis, final];
    
}
// Object Return
let result=calculateDiscount(1500,20)

console.log('Discount Amount: ',result.dis)
console.log('Final price: ',result.final)

// OR
// let { dis, final } = calculateDiscount(1000, 5);

// console.log(dis);
// console.log(final);

//Array Return
// let result = calculateDiscount(100, 5);

// console.log(result);

// OR
// let [dis, final] = calculateDiscount(1000, 5);

// console.log(dis);       
// console.log(final);