import React from "react";

export default class WorkingWithMultipleEvents extends React.Component{
  constructor(){
    debugger;
    super();
    this.state = {
        counter : 0
    }
  }

  updateCounter = (data) =>{
    debugger;
    this.setState({
        counter  : this.state.counter + data
    })
  }

  arrow = () => {this.updateCounter(1)}


  render(){
    debugger;
      return (
          <div>
              <h1>
                  Counter value is : {this.state.counter}
              </h1>
              <button id="1" type="button" onClick={() => {this.updateCounter(1)}}>Counter +1</button>
              <button id="2" type="button" onClick={() => {this.updateCounter(2)}}>Counter +2</button>
          </div>
      )
  }

}