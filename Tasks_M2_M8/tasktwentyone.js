const cartTotal=1090;
const userMember = false;

if(cartTotal>1000 && userMember){
 const discount = cartTotal*20/100;
 const payableAmount=cartTotal-discount;
 console.log('After 20% discount your payable amount: '+payableAmount+'/= taka.')
}
else if(cartTotal>1000){
    const discount = cartTotal*10/100;
 const payableAmount=cartTotal-discount;
 console.log('After 10% discount your payable amount: '+payableAmount+'/= taka.')
}
else{
    console.log('No Discount')
}