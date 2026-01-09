console.log(typeof null);
console.log({} == {});
console.log({} === {});

// normal routing in react
// /user/1
// dynamic routing
// /user/:id

// get the repeated character from string
const str = "aabbccd";
let seen = new Set();
let duplicates = new Set();
for (let char of str) {
  if (seen.has(char)) {
    duplicates.add(char);
  } else {
    seen.add(char);
  }
}

console.log(duplicates);

console.log("tariq" - 100);
console.log("tariq" + 100);
