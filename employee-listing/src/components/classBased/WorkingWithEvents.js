import React from "react";

export default class WorkingWithEvents extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    }
  }

  updateCounter = (event) => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    return (
      <div>
        <h1>Counter Value is: {this.state.counter}</h1>
        <input type="button" id="my_button" value="Update Counter by 1" onClick={this.updateCounter} /><br/><br/>
        <input type="button" id="my_button" value="Update Counter by 2" onClick={this.updateCounter} /><br/><br/>
        <input type="button" id="my_button" value="Update Counter by 3" onClick={this.updateCounter} /><br/><br/>
        <input type="button" id="my_button" value="Update Counter by 4" onClick={this.updateCounter} /><br/><br/>
        <input type="button" id="my_button" value="Update Counter by 5" onClick={this.updateCounter} /><br/><br/>
      </div>
    )
  }
}