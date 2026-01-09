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
    if (typeof num === "number") {
      num.push(number);
    } else if (number.length == 1) {
      char.push(number);
    }
  });
}
split();
console.log(num);
console.log(char);
