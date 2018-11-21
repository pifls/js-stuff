/* basic example of a function with multiple parameters */
  const func = (x, y) => { console.log(x * y)};

/* basic example of a function with one parameter */
const func1 = x => console.log(x);

/* basic example of a function with no parameters */
const func2 = () => console.log("func2 works fine");

func(2,3); // output 6
func1(5); // output 5
func2(); // output 'func works fine'


/* an example with an array */

const numbers = [1,6,2,9,8,3,7,5];

/* filter method creates a new array filled with array elements that 'pass' a test provided as a function*/ 
const numbersOver5 = numbers.filter(x => x > 5);

console.log(numbers); //output 1 6 2 9 8 3 7 5
console.log(numbersOver5); // output 6 9 8 7