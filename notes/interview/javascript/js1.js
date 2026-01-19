// promises in js

const myPromise = new Promise((resolve, reject) => {
  // async code inside this block
  setTimeout(() => {
    const randomNum = Math.floor(Math.random() * 10);
    if (randomNum > 5) {
      resolve(`Success promise resolved ${randomNum}`);
    } else {
      reject(`Error promise rejected ${randomNum}`);
    }
  }, 100);
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error));

// async await in js
