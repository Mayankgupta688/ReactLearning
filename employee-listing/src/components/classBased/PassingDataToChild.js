import React from "react";

export default class PassingDataToChild extends React.Component {
  constructor() {
    super();
    this.state = {
      timer: 100,
      counter: 0
    }

    setInterval(() => {
      debugger;
      this.setState({
        timer: this.state.timer + 2,
        counter: this.state.counter + 1
      })
    }, 1000) 
  }

  render() {
    debugger
    return (
      <div>
        <ShowCounter counter={this.state.counter}></ShowCounter>
        <ShowTimer timer={this.state.timer}></ShowTimer>
      </div>
    )
  }
}


function ShowCounter(props) {
  return <h1>Value of Counter is {props.counter}</h1>
}

function ShowTimer(props) {
  return <h1>Value of Counter is {props.timer}</h1>
}