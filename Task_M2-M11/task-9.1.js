let contact = {
  name: "Alex Johnson",
  email: "ALEX@EMAIL.COM",
  phone: "555-1234"
};
// problem-1
contact.email=contact.email.toLowerCase()
// problem-2
// for(let key in contact){

//     let value =contact[key]
//     console.log(key,':',value)
// }
// problem-3
// contact['favoriteWords']=['M','K','D']
// console.log(contact)
// problem-4
// let reArr=[]
// let reJoin=''
// for(let i=contact.name.length-1; i>=0; i--){
//     let word=contact.name[i]
//     reArr.push(word)
//     reJoin =reArr.join('')
// }
//  console.log(reJoin)
// problem-5
// if(contact.email.includes('@email.com')){
//     console.log('Included');
    
// }
// else{
//     console.log('Not Included')
// }
// problem-6
if(contact.email.endsWith('email.com')){
    console.log('Yes')
}
else{
    console.log('No')
}



