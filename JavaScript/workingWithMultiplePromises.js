var PromiseOne = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise One...")
    }, 5000)
})

var PromiseTwo = new Promise((resolve) => {
    setTimeout(() => {
        reject("Promise Two...")
    }, 15000)
})

var PromiseThree = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise Three...")
    }, 10000)
})

Promise.any([PromiseOne, PromiseTwo, PromiseThree]).then((data) => {
    debugger;
})