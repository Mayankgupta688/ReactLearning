import React from "react";

export default class MultipleSetState extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    }
  }

  updateCounter = () => {
    debugger;
    this.setState({
      counter: this.state.counter + 1
    },() => {
      alert("State Updated...")
      this.setState({
        counter: this.state.counter + 1
      }, () => {
        alert("State Again Updated...");
        this.setState({
          counter: this.state.counter + 1
        }, () => {
          alert("Updated Third Time")
        })
      })
    })

    alert("State Updation Triggered.....")
  }

  render() {
    return (
      <div>
        <h1>Counter Value is: {this.state.counter}</h1>
        <input type="button" onClick={this.updateCounter} value="Update Counter" />
      </div>
    )
  }
}