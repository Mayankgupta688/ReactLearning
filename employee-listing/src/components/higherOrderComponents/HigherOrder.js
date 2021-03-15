import React from "react";

debugger;

function GetDetails() {
  return <h1>Hello World....</h1>
}

function getHigherOrderFunction(WrapperComponent){
  return function() {
    return (
      <div>
        <h1>Welcome to React Session...</h1>
        <WrapperComponent></WrapperComponent>
      </div>
    )
  }
}

var NewComponent = getHigherOrderFunction(GetDetails);

export default NewComponent;