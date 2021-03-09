var employeeData = {
    name: "TechnoFunnel",
    age: 1,
    designation: "Company"
}

// Method 1
var cloneData = employeeData;
cloneData.name = "Incorrect Value..."
console.log(employeeData.name);

// Method 2
var otherData = {};
otherData.name = employeeData.name;
otherData.age = employeeData.age;
otherData.designation = employeeData.designation;

// Method 3
var clonedDataOutput = {
    ...employeeData
}

debugger;


