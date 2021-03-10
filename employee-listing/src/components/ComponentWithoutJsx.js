import React from "react";
export default function ComponentWithoutjsx() {
  return React.createElement("div", {}, [
    React.createElement("div", {},
      React.createElement("h1", {}, "hello World..")
    ),
    React.createElement("div", {}, [
        React.createElement("p", {}, "This is The COntent for the Application"),
        React.createElement("section", {}, "This is Sample Saction")
    ]),
      React.createElement("div", {},
        React.createElement("h1", {}, "This is The Header For Application..")
      )
  ])
}

