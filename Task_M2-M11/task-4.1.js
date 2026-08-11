let str='JavaScript'

let sp= str.split('')
// let reverse=sp.reverse()
// let reJoin=reverse.join('')
// console.log(reJoin)
let arr=[]
// for(letter of sp)(
//     arr.unshift(letter)
// let reJoin=arr.join('')
// console.log(reJoin)

for(i=str.length-1; i>=0;i--){
   let le=str[i]
   arr.push(le)
   let reJoin= arr.join('')
   console.log(reJoin)

}