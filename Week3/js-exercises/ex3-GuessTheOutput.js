/**

** Exercise 3: Guess the output **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/



let a = 10;
const x = (function() {
    a = 12;
    return function() {
        alert(a);
    };
})();

x();

/*
The output is alert that prints 12, first we assign the value of 10 to a,
then in the function x we reassign 12 to a that will be printed in the alert 
in the return  function 
*/