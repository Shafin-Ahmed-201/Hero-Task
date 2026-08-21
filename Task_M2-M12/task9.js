function reverseString(text){
    let arrayText=text.split('')
    let reverseArray=[]
    let joinString=''
    for(i=0; i<arrayText.length; i++){
        let singleWord=arrayText[i]
        reverseArray.unshift(singleWord)
        joinString=reverseArray.join('')
    }
    return joinString;
}

let reverseStrings=reverseString('Hello Gello')
console.log(reverseStrings)