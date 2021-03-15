// 1. Master List of Data (employee list with all details) (Same)
// 2. Two different set of user (General HR and Finance HR)
// 3. General HR need to render basic details
// 4. Financial need to display Financial Information...
import React from "react";
function higherOrderFunctionImplementation(WrapperComponent) {
  debugger;
  return class extends React.Component {
    constructor() {
      debugger;
      super();
      this.state = {
        employeeList: [{
          name: "Mayank",
          age: 20,
          designation: "Developer",
          salary: 2000
        }, {
          name: "Anshul",
          age: 20,
          designation: "Developer",
          salary: 2000
        }]
      }
    }

    deleteEmployee = (name) => {
      var filteredList = this.state.employeeList.filter((emp) => {
        return emp.name !== name;
      });

      this.setState({
        employeeList: filteredList
      })
    }
    render() {
      debugger;
      return <WrapperComponent deleteEmployee={this.deleteEmployee} {...this.state}></WrapperComponent>
    }
  }
}

function GeneralHR(props) {
  return (
    <div>
      { props.employeeList.map(emp => {
        return (
          <div>
          <h1>Employee Name: {emp.name}</h1>
          <h2>Employee Age: {emp.age}</h2>
        </div>
        )
      })}
    </div>
  )
}

function FinancialHR(props) {

  debugger;
  return (
    <div>
      { props.employeeList.map(emp => {
        return (
          <div>
          <h1>Employee Name: {emp.name}</h1>
          <h2>Employee Age: {emp.salary}</h2>
          <input type="button" value="Delete..." onClick={() => props.deleteEmployee(emp.name)} />
        </div>
        )
      })}
    </div>
  )
}

function OtherHR(props) {
  return (
    <div>
      <h1>Employee Name: {props.name}</h1>
      <h2>Employee Age: {props.designation}</h2>
      <h2>Employee Age: {props.age}</h2>
    </div>
  )
}

var FinancialHRDetails = higherOrderFunctionImplementation(FinancialHR);
export var GeneralHRDetails = higherOrderFunctionImplementation(GeneralHR);

export default FinancialHRDetails