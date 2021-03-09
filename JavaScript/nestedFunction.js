//Closure...inner function can access the properties of outer function....

function outerFunction() {
    var name = "Mayank";

    function innerFunction() {
        var data = 10;
        console.log(data)
        console.log(name)
    }

    innerFunction();
    console.log(data)
}

outerFunction();