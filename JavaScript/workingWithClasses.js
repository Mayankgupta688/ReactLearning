class Employee {
  constructor(name, age, designation, department) {
    this.name = name;
    this.age = age;
    this.designation = designation;
    this.department = department;
  }

  getDetails = () => {
    console.log(this.name);
    console.log(this.age);
    console.log(this.designation);
    console.log(this.department);
  }
}

var employeeOne = new Employee("Mayank", 30, "Developer", "Software");
employeeOne.getDetails()

var employeeTwo = new Employee("Anshul", 30, "Manager", "Sales");
employeeTwo.getDetails()