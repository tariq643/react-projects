console.log(a);
var a = 100; // throws undefined

//console.log(b);
let b = 100; // throws reference error

var arr = [10, 11, 12, 13, 14];
function print(b, ...a) {
  console.log(a);
  console.log(typeof a);
}

print(8, 9, 10, 11, 12);

// example of map function
let num = [1, 2, 3, 4];
let numMap = num.map((n) => n % 2 == 0);
console.log(numMap);

const numMpp = num.map((ele, idx, num) => {
  return ele + 1;
});
console.log(numMpp);

const numMpp1 = num.map((ele, idx, num) => {
  return (ele = 8);
});
console.log(numMpp1);
