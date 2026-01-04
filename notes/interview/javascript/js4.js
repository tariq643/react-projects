console.log([] == []);
console.log("B" + "A");
console.log("B" - "A");
console.log("B" + "A" - "C");

console.log("7" - "8");
console.log("7" + "8");
console.log([] + [], typeof ([] + []));

// convert an object into string
const obj = {
  a: 1,
  b: 2,
};

const objString = JSON.stringify(obj);

console.log(objString);
// Output: {"name":"John","age":30,"city":"New York"}

console.log(typeof objString);
// Output: string

function restPara(x, ...rest) {
  return {
    rest,
  };
}

console.log(restPara(10, [12, 34, 56], "hello"));

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.map((num) => num % 2 === 0);
console.log(evenNumbers);
// Output: [2, 4]

var x = 100;
{
  var x = -100;
}
let y = x;
{
  let y = -200;
}
console.log(x, " , ", y);

console.log({ a: 100 } == { a: 100 });
console.log({ a: 100 } === { a: 100 });

// remove duplicate elements from array
let arr = [1, 1, 2, 2, 3, 4, 4];
console.log(...new Set(arr));

let j = 0;

for (let index = 0; index < arr.length - 1; index++) {
  if (arr[index] != arr[index - 1]) {
    arr[j++] = arr[index];
  }
}

console.log(arr, j);

while (j < arr.length) {
  arr[j] = 0;
  j++;
}

// Non-curried function
const add = (a, b, c) => a + b + c;
console.log(add(1, 2, 3)); // Output: 6

// Curried version
const curriedAdd = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};

console.log(curriedAdd(1)(2)(3)); // Output: 6

// Or even more concisely with arrow functions
const curriedAddES6 = (a) => (b) => (c) => a + b + c;
console.log(curriedAddES6(1)(2)(3)); // Output: 6

let obj1 = { name: "a1" };
const obj2 = obj1;
obj1.name = "a2";
console.log(obj1.name + " " + obj2.name);
