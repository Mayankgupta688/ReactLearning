import React from "react";

export default class HelloWorldWithClass extends React.Component {

  constructor() {
    super();
    this.name = "Mayank Gupta";
    this.age = 100;
    this.counter = 0;

    setInterval(() => {
      this.counter += 1;
      console.log(this.counter);
      this.forceUpdate();
    }, 1000) 
  }

  render() {
    return (
      <div>
        <h1>Hello World from Class {this.name} {this.age} </h1>
        <h2>The Counter Value is {this.counter}</h2>
      </div>
    )
  }
}