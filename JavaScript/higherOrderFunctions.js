var arrData = [10, 20, 30, 40, 50, 60, 70];

var data = {
    name: "Mayank",
    age: 20
}

var newArray = [];
for(var i of arrData) {
    console.log(i)
}

for(let a in data) {
    console.log(a)
}

arrData.forEach((value) => {
    newArray.push(value + 1)
})

console.log(newArray)


var newDataArray = arrData.map((value) => value + 1);
var filteredDataArray = arrData.filter((value) => value % 3 == 0);

debugger;