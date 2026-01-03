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
    x,
    ...rest,
  };
}

console.log(restPara(10, [12, 34, 56], "hello"));
