// parsing
console.log(parseInt("F78"));
console.log(parseInt("78F"));

console.log(
  [1, 2, 13, 4, 5].map((e) => {
    if (e > 10) {
      return;
    } else {
      return e * 10;
    }
  })
);
