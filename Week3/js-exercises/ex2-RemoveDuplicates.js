/**
 
 ** Exercise 2: The lottery machine **

Write a function called removeDuplicates. This function accept an array as an argument
does not return anything but removes any duplicate elements from the array.

 The  function should remove duplicate elements.So the result should be:

   
 */


// WRITE YOUR FUNCTION HERE
function removeDuplicates(letter) {
    let uniq = [...new Set(letter)];
    return uniq;
}
const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

console.log(removeDuplicates(letters));
if (removeDuplicates(letters))
    console.log("Hooray!");