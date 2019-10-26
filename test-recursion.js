getFib4 = num => {
  if (num < 0){
    return "Please input a number equal or larger than 0."
  } else if(num <= 2 ) {   // the condiitonal will be <=2 since index 3 would be the first value to change
		return new Array(num).fill(1)
	} else {
		fibArray = getFib4(num-1)
		return [...fibArray, fibArray[num-2] + fibArray[num-3]] // has to be -2 and -3 given the fibArray expanded is -1. The previous two would be -2 and -3 accordingly.
	}
}

for (let i =0; i<=10; i++) {
  console.log(getFib4(i))
}
