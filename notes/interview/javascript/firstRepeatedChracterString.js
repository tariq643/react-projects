function firstRepeatedCharacterString(str) {
  const seenChars = new Set();
  for (let ch of str) {
    if (!seenChars.has(ch)) {
      seenChars.add(ch);
    } else {
      return ch;
    }
  }
  return undefined;
}

console.log(firstRepeatedCharacterString("hello"));
console.log(firstRepeatedCharacterString("deepansh"));
