import React from "react";
import Axios from "axios";

export default class RenderEmployee extends React.Component {
  constructor() {
    debugger;
    super();
    this.state = {
      employeeList: []
    }

    Axios.get("https://5c055de56b84ee00137d25a0.mockapi.io/api/v1/sample").then((response) => {
      debugger;
        this.setState({
          employeeList: response.data
        });
    })
  }

  deleteEmployee = (id) => {

    //https://5c055de56b84ee00137d25a0.mockapi.io/api/v1/sample/1

    var newList = this.state.employeeList.filter((employee) => {
      return employee.id !== id;
    })

    this.setState({
      employeeList: newList
    })
  }

  // Ganesh

  deleteCustomer = (id) => {
    Axios.delete(`https://604afdb1ee7cb900176a106a.mockapi.io/api/customers/Customers/${id}`).then((responce)=>{
        alert("Customer is Deleted from Api");
        var newlist = this.state.customerList.filter((customer) => {
            return customer.id !== id;
        })

        this.setState({
            customerList : newlist
        })
    });
}

  render() {
    debugger
    return (
      <div>
        <h1>Employee List is Given Below:</h1>
        {this.state.employeeList.map((emp) => {
          return (
            <div>
              <h1> {emp.id}</h1>
              <h1> {emp.name}</h1>
              <input type="button" value="Delete Employee" onClick={() => this.deleteEmployee(emp.id)} /><hr/> 
            </div>
          )
        })}
      </div>
    )
  }

  componentDidMount() {
    debugger;
  }
}