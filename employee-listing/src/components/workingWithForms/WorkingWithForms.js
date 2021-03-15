import React from "react";

export default class WorkingWithForms extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }

  getUpdatedValue = (event) => {
    this.setState({
      userName: event.target.value,
      userAge: this.state.age
    })
  }

  updateAge = (event) => {
    this.setState({
      userAge: event.target.value,
      userName: this.state.userName
    })
  }

  updateValues = (event) => {
    debugger
    if((+event.target.value) > 5) {
      this.setState({
        [event.target.id]: event.target.value
      });
    } else {
      this.setState({
        [event.target.id]: event.target.value
      }, () => {
        console.dir(this.state)
      })
    }
    
  }

  render() {
    return (
      <div>
        Enter Name: <input id="userName" type="text" value={this.state.inputValue} onChange={this.updateValues}></input><br/><br/>
        Enter Age: <input id="userAge" type="text" value={this.state.inputValue} onChange={this.updateValues}></input><br/><br/>
        Enter Salary: <input id="userSalary" type="text" value={this.state.inputValue} onChange={this.updateValues}></input><br/><br/>
        Enter Designation: <input id="userDesignation" type="text" value={this.state.inputValue} onChange={this.updateValues}></input><br/><br/>
        Enter Bonus: <input id="userBonus" type="text" value={this.state.inputValue} onChange={this.updateValues}></input><br/><br/>
      </div>
    )
  }
}