/*
Add up the Numbers from a Single Number
Create a function that takes a number as an argument.
Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

Examples
addUp(4) ➞ 10

addUp(13) ➞ 91

addUp(600) ➞ 180300
Notes
Expect any positive number between 1 and 1000.
*/

const addUp = (n) => {
  if (n < 0 || n > 1000 || typeof(n) !== "number") {
    return "Enter any positive number between 1 and 1000."
  } else {
   let a = 0;
   let b = 1;
   for (let i = 0; i < n; i++) {
    a = a + b;
    b = b + 1;
   }
   return a;
  }
  
};

addUp(4)