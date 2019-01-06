# reduce()

**reduce()** is a function that reduces an array to a 'one thing'

It's a function that takes reducer function (that you provide) on each member of the array resulting in a single output value

```javascript
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
```


## Sources
<https://www.youtube.com/watch?v=-LFjnY1PEDA>

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce>