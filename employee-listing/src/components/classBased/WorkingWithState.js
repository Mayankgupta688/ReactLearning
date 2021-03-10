import React from "react"

export default class WorkingWithState extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 45
    }

    setInterval(() => {
      this.setState({
        counter: this.state.counter + 1
      })
    }, 1000)
  }

  render() {
    return <h1>Counter Value is: {this.state.counter}</h1>
  }
}