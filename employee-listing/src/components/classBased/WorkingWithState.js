import React from "react";

export default class WorkingWithState extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      timer: 40
    }

    setInterval(() => {
      debugger;
      this.setState({
        counter: this.state.counter + 1,
        timer: this.state.timer + 2
      })
    }, 1000)

  }

  render() {
    debugger;
    return (
    <div>
      <h1>Counter Value is: {this.state.counter}</h1>
      <h1>Counter Value is: {this.state.timer}</h1>
    </div>
    )
  }
}