/**
 
 ** Exercise 5: The lottery machine **
 
Don't you just love the thrill of the lottery? What if I told you we can make our own lottery machine? Let'
 s get started!

   Write a
 function that takes 4 arguments.

   - A start value
   - An end value
   - A callback that executes if the number is divisible by 3
   - A callback that executes if the number is divisible by 5

 The  function should first generate an array containing values from start value to end value(inclusive).

 Then the  function should take the newly created array and iterate over it, and calling the first callback
 if the array value is divisible by 3.

 The function should call the second callback
 if the array value is divisible by 5.

 Both functions should be called
 if the array value is divisible by both 3 and 5.

*/

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    const numbers = [];
    for (startIndex; startIndex < stopIndex + 1; startIndex++) {
        numbers.push(startIndex);
        if (startIndex % 3 === 0 && startIndex % 5 === 0) {
            console.log(fiveCallback(startIndex));
            console.log(threeCallback(startIndex));
        } else if (startIndex % 3 === 0) {
            console.log(threeCallback(startIndex));
        } else if (startIndex % 5 === 0) {
            console.log(fiveCallback(startIndex));
        }
    }
    console.log(numbers);
}

function sayThree(num) {
    return `number  ${num} is dividable by 3`;
}

function sayFive(num) {
    return `number ${num} is dividable by 5 `;
}
threeFive(10, 15, sayThree, sayFive);