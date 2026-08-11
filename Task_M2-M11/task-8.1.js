let scores = { math: 90,
     science: 85,
      art: 95,
    physics: 80 };
let total=0
let ValueCount =0
for(let score in scores){

    let value =scores[score]
    console.log(score,':',value)
    total=total+value
    ValueCount++

}
console.log('Average of key values: ',total/ValueCount)