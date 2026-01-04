// diff between arrow function and normal function
// this Binding:
// Normal Functions: this is dynamic, determined by how the function is called (e.g., object method, global, new keyword).
// Arrow Functions: this is lexical; it inherits this from the enclosing scope where it's defined, making it predictable.

// inserting 5 into an array
let arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr);

let x = {};
let y = { name: "zakya" };
let z = { name: "rani" };
x[y] = { name: "ram" };
x[z] = { name: "kapil" };
console.log(x[y]);
console.log(x[z]);

const a = { name: "ram", age: 21, city: "odisha" };
let b = { ...a, name: "rahul" };
const { name, ...xyz } = a;
console.log(xyz, b);
