// remove duplicates from an array
let arr = [1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 5];
const newArr = [...new Set(arr)];
console.log(newArr);

// split an array into numbers and string
let arrCharNum = ["a", 1, "b", 2, "c", 3];
let num = [];
let char = [];
function split() {
  arrCharNum.map((number) => {
    if (typeof number === "number") {
      num.push(number);
    } else {
      char.push(number);
    }
  });
}
split();
console.log(num);
console.log(char);

// find method and findIndex
let arr1 = [1, 2, 3, 4, 5];
console.log(arr1.find((num) => num > 6));

if ("0") {
  console.log("true");
} else {
  console.log("false");
}

console.log(null === undefined); // false
console.log(null == undefined); // true
