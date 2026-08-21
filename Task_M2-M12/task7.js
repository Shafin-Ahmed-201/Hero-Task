function isLeapYear(year){
    if(year%4===0){
        return year,'->','Leap Year'
    }
    else{
         return year,'->','Not Leap Year'
    }
       

}

let result=isLeapYear(2027)
console.log(result)