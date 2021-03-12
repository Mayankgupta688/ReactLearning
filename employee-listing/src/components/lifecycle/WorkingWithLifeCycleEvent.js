import React from "react";

export default class WorkingWithLifeCycleEvent extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "Mayank",
      age: 40
    }
  }

  UNSAFE_componentWillMount() {
    // debugger;
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    // debugger;
    return <h1>User Name: {this.state.userName}</h1>
  }

  componentWillUpdate() {
    // debugger;
  }

  componentDidUpdate() {
    // debugger;
  }

  componentDidMount() {
    setTimeout(() => {
      debugger;
      this.setState({
        userName: "Mayank",
        age: 40
      })
    }, 5000)
  }

  componentWillUnmount() {
    // debugger;
  }

}