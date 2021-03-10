var myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Mayank Gupta with Rejection....")
    }, 10000)
});

console.log("Hello World...")

myPromise.then((data) => {
    console.log(data)
}, (rejectionData) => {
    console.log(rejectionData)
})

myPromise.then((data) => {
    console.log(`Promise Is Resolved with the data ${data}`)
}, (rejectionData) => {
    console.log(rejectionData)
})

myPromise.then((data) => {
    console.log(`Promise Is Resolved with the data again ${data}`)
}, (rejectionData) => {
    console.log(rejectionData)
})

console.log("Working With Promises...")