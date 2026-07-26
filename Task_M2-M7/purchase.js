let price = 200;
let quantity = 3;
let discount = 10;

let total = price*quantity;
let afterDiscount = (total*discount)/100;
let final = total-afterDiscount;

console.log("Total Price: "+total);
console.log("Discount Amount: "+afterDiscount);
console.log("Final Price: "+final);