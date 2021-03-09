// Hoisting the variable...

// let - let is block level
// var - var is immediate function level

function getData() {
    var a = 10;

    if(a >= 10 || a < 10) {
        let data = "Mayank";
        let ab = 10;
        console.log(data)
        console.log(ab)
    }

    for(var i = 0; i< 10;i++) {
        // Do nothing
    }
    console.log(ab)
    console.log(i)

    console.log(data)
    console.log(a)
}

getData();