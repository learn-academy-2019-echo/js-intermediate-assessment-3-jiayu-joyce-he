// ASSESSMENT 3: INTERMEDIATE JAVASCRIPT
// Coding practical questions

// Be sure to use all given test cases

// 1. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

//can take any positive number as input
const getFib = (num) => {
	let arr = new Array(num)
	for (let i = 0; i<num; i++) {
		arr[i] = (arr[i-1] || 1) + (arr[i-2] || 0)
	}
	return arr
}
console.log(getFib(10))

//hard code to output 10
const getFib2 = () => {
	let arr = [1,1]
	for (i=2; i<10; i++) {arr.push(arr[i-2]+arr[i-1])}
	return arr
}
console.log(getFib2())

//using 2 functions

const numFib = n => (n < 2) ? n : numFib(n-1) + numFib(n-2)

const getFib3 = num => {
  let arr = []
  for(let i = 1; i <= num; i++){
    arr.push(numFib(i))
  }
  return arr
}

console.log(getFib3(10))

//recursion with array
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

console.log(getFib4(10))


// 2. Write a function called oddChecker that takes in an array and returns a new array of only odd numbers.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [9, 7, 199, -9]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [7, 23, -823]

const filterOdd = arr => arr.filter(n => n%2 !== 0 && (typeof n === "number") )
console.log(filterOdd(fullArr1))
console.log(filterOdd(fullArr2))


// 3. Given the object below, complete the console.log to find specific information:

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek"
	}
}

// Log the type of bicycle:
console.log(bicycle.type)

// Log the bell:
console.log(bicycle.gear[2])
console.log(...bicycle.gear.filter(x => x.includes("bell"))) // Notes: a more dynamic search function
// console.log(...bicycle.gear.filter(x => x.includes("toe"))) //works too

// Log the PSI:
console.log(bicycle.wheels.specs.pop())


// 4. Write a function that takes in an array and returns an array in reverse order.

var originalArray1 = [1, 2, 3, 4, 5, 6, 7]
// Expected output: [7, 6, 5, 4, 3, 2, 1],
var originalArray2 = ["9", "1", "o", "h", "c", "e"]
// Expected output: ["e", "c", "h", "o", "1", "9"]

const reverseArr = arr => arr.reverse()

console.log(reverseArr(originalArray1));
console.log(reverseArr(originalArray2));


// 5. Write the code that would make this test pass.

// describe("multTwo", () => {
//     test ("returns an array with all the numbers multiplied by two", () => {
//         expect(multTwo([3, 4, 5])).toEqual([6, 8, 10])
//         expect(multTwo([23, -9, 0])).toEqual([46, -18, 0])
//         expect(multTwo([4.5, -4.5, 12])).toEqual([9, -9, 24])
//     })
// })

const timesTwo = arr => arr.map(n => n*2)
console.log(timesTwo([3, 4, 5]));
console.log(timesTwo([23, -9, 0]));
console.log(timesTwo([4.5, -4.5, 12]));


// 6. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.

var ourString = "Hello Learn Students!"
// Expected output: 3
const letterCounter = arr => arr.split("").map(x => x.toLowerCase().includes('l')).reduce((a,c) => a + c)
console.log(letterCounter(ourString));


// 7. Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”

const findMiddle = string => string.length%2 !== 0 ? string[(string.length-1)/2] : string[string.length/2 - 1] + string[string.length/2]
console.log(findMiddle(middleLetters1));
console.log(findMiddle(middleLetters2));


// 8. Write a program to get the area of a sphere using object classes. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)

class Sphere {
    constructor(radius) {
        this.radius = radius
    }
		getArea(){
			return 4*Math.PI*this.radius^2
		}
}

let sphere1 = new Sphere(1);
let sphere2 = new Sphere(2);
let sphere3 = new Sphere(3);

// console.log(sphere1.getArea());
// console.log(sphere2.getArea());
// console.log(sphere3.getArea());

// Or using this after defining the spheres.
// const getArea = radius => 4*Math.PI*radius^2

// console.log(getArea(sphere1.radius))
// console.log(getArea(sphere2.radius))
// console.log(getArea(sphere3.radius))

// 9. Use object destructuring to return the nested values of specs. Expected output: 4, "manual"
// Don't overthink this one, it's just destrcturing practice.

var myCar = {
  make: "VW",
  model: "Jetta",
  specs: {
    doors: 4,
    transmission: "manual",
  }
}

const {specs} = myCar
console.log(specs)

// 10. STRETCH: Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []

const accSum = array => {
	return array.map((value,index,arr) => {
		return arr.slice(0,index+1).reduce((a,c) => a + c)})
}

console.log(accSum(numbersToAdd1));
console.log(accSum(numbersToAdd2));
console.log(accSum(numbersToAdd3));

/*Process notes:
console.log([2, 4, 45, 9].slice(0,4).reduce((a,c) => a + c));
console.log([2, 4, 45, 9].map((value,index,arr) => {
	return arr.slice(0,index+1).reduce((a,c) => a + c)})
)
*/
