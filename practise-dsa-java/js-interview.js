// promises

const myPromise = new Promise((resolve, reject) => {

    // async code goes here
    setTimeout(()=>{
        const randomNum = Math.floor(Math.random() * 10);
        if (randomNum > 5) {
            resolve(`Success ${randomNum}`);
        }
    },100);
});

myPromise.then((result)=>console.log(result);)
.catch((error)=>{console.log(error);
})
