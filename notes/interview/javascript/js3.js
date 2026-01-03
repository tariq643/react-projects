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

// question -> tariqabc 1800 print t1a8r0i0qabc
const str1 = "tariqabc";
const str2 = "1800";
let ans = "";

let i1 = 0,
  i2 = 0;
while (i1 < str1.length && i2 < str2.length) {
  ans = ans + str1[i1++] + str2[i2++];
}
while (i1 < str1.length) {
  ans = ans + str1[i1++];
}
while (i2 < str2.length) {
  ans = ans + str2[i2++];
}
console.log(ans);
