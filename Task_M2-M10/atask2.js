const mixedArray=[4,'Hello',5,'Gello',6,'Ello',7,'Mello']
let stringArray=[]
let numberArray=[]

for (let i = 0; i < mixedArray.length; i++) {
    let value= mixedArray[i]
    if(typeof value==="string"){
        stringArray.push(value)
    }
    else if(typeof value==="number"){
        numberArray.push(value)
    }
}
console.log(stringArray)
console.log(numberArray)