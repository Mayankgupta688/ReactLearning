var salary = [10, 20, 30, 40, 50, 60, 70];
 
const sumAge = salary.reduce((total, num)=>{
    return total + num;
}, 100);
 
console.log(sumAge);