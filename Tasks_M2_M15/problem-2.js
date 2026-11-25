function isElevatorSafe(weights) {
  if(Array.isArray(weights)===false){
    return 'Invalid'
  }
let totalWeight=0
  for(let weight of weights){
    totalWeight+=weight
  }

  if(totalWeight<=400){
    return true;
  }
  else if(totalWeight>400){
    return false;
  }
}

console.log(isElevatorSafe([20,30,70,40]))

