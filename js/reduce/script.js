let values = [5, 4, 1, 2, 9];
let sum = 0;

/* example of a function that receives and array of numbers and return sum of them */
const func = v => {
  for (let i = 0; i < values.length; i++) {
    sum += v[i];
  }
  console.log(sum);
}
func(values); // output 21

/* Now let's achieve same result with reduce() method */

const func1 = (acc, val) => {
  return acc + val;
}

// in reduce function we can also pass a second argument which will determine the value of accumulator (by default it's equeal to the first element of an array) */
console.log(values.reduce(func1)); // output 21

/* shorter version */
console.log(values.reduce((acc, val) => acc + val)); // output 21
