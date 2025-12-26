// both are hoisted but the function has higher priority than the var ... so clg will print the
// reference of check

function check() {
  return 100;
}

var check;

console.log(check);
console.log(check());

/*

Destructuring is a JavaScript expression introduced in ES6 that makes it possible to unpack values from arrays or properties from objects into distinct, individual variables in a concise and readable way

  
*/

const arr = ["a1", "b2", "c3"];
const [f1, f2, f3] = arr;
console.log(f1, f2, f3);

const product = "T-shirt";
const price = 20;
// Using template literal with interpolation
const message = `The ${product} costs $${price}.`;
console.log(message); // Output: The T-shirt costs $20.
