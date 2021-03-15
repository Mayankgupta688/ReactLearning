// 1. Grand Parents (Village, Native Language)
// 2. Parents
// 3. Children
// 4. GrandChildren
// 5. GrandGrandChildren (Village, Native Language)

import React from "react";

var familyContext = React.createContext({});

export default class GrandParent extends React.Component {
  constructor() {
    super();
      this.state = {
        village: "Delhi",
        language: "Hindi"
      }
  }

  updateDetails = () => {
    this.setState({
      village: "UP",
      language: "Unknown"
    })
  }

  render() {
    return (
      <div>
        <familyContext.Provider value= {
          {
            data: this.state, 
            updateDetails: this.updateDetails
          }
        }>

          <h1>This is Grand Parent Component</h1>
          <h2>Grand Parent Village: {this.state.village}</h2>
          <h2>Grand Parent Language: {this.state.language}</h2>
          <input type="button" value="Updte Village Name and Language" onClick={this.updateDetails} /><hr/>

          <Parents {...this.state}></Parents>
        </familyContext.Provider>
      </div>
    )
  }
}

function Parents() {
  debugger;
  return (
    <div>
      <h1>This is Parent Component</h1><hr/>
      <Children></Children>
    </div>
  )
}

function Children() {
  debugger;
  return (
    <familyContext.Consumer>
      {(context) => {
        return (
          <div>
            <h1>This is Children Component</h1>
            <h2>Grand Parent Village: {context.data.village}</h2>
              <h2>Grand Parent Language: {context.data.language}</h2><hr/>
              <GrandChildren></GrandChildren>
          </div>
        )
      }}
    </familyContext.Consumer>
  )
}

function GrandChildren() {
  debugger;
  return (
    <div>
      <h1>This is Grand Children Component</h1><hr/>
      <GrandGrandChildren></GrandGrandChildren>
    </div>
  )
}

function GrandGrandChildren() {
  return (
    <familyContext.Consumer>
      {(context) => {
        return (
          <div>
            <h1>This is Grand Grand Children Component</h1>
            <h2>Grand Parent Village: {context.data.village}</h2>
              <h2>Grand Parent Language: {context.data.language}</h2>
              <input type="button" value="Update Village Name and Language from Extreme Child" onClick={context.updateDetails} /><hr/>
          </div>
          
        )
      }}
    </familyContext.Consumer>
    
  )
}