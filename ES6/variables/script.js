// LET

/* This example shows that let variable has a block scope and we can't use it outside */
function foo() {
    var x = 1;

    if (x > 0) {
        let y = 2;
    }

    console.log("x = " + x); // logs x = 1
    console.log("y = " + y); // throws ReferenceError: y is not defined
}

foo();

// CONST

/* in this example 'a' variable can't reassigned because it's a constant */
const a = [1, 2, 3];
a = [1, 2];
console.log(a); // throws TypeError: Assignment to constant variable.

/* 'b' can’t be reassigned, but the value itself that the variable is referencing can be changed if it is mutable value( like an array or object) */
const b = [1, 2, 3];
b[0] = 'a';
console.log(b); // logs ["a", 2, 3]