/**

** Exercise 4: Guess more **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/

const x = 9;

function f1(val) {
    val = val + 1;
    return val;
}
f1(x);
console.log(x);

const y = {
    x: 9
};

function f2(val) {
    val.x = val.x + 1;
    return val;
}
f2(y);
console.log(y);

/*
The output of calling f1 is 10, we assign the variable x with the value of 9,
then we call it as an argument in the function f1. The value of x in the 
console.lo(x) is 9, it changes just when calling the function f1.

The output of calling f2 is 10, giving the value of x in the object y 
and giving it as an argument to the function f2.
Because objects are mutable, the value of y in the console.log is 10.
*/