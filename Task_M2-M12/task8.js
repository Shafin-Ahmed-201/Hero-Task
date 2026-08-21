function countVowels(text) {
    let stringArray = text.split('')
    let vowels = 0
    let vowel=['a','e','i','o','u']
    for (singleLatter of stringArray) {
        // i = 0; i < stringArray.length; i++
        // let singleLatter = stringArray[i]
        if (vowel.includes(singleLatter)){
            vowels++
        }
}
return vowels;
}

let result = countVowels('Programming Hero')
console.log('Number of Vowels: ',result)

