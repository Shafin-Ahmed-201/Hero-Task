const weight = 60;
const height = 5.6;

const metre = height*0.3048

if(weight/metre**2<=18.5){
    console.log('Underweight')
}
else if(weight/metre**2<=25){
    console.log('Normal')
}
else if(weight/metre**2<=30){
    console.log('Overweight')
}
else {
    console.log('Obesity')
}