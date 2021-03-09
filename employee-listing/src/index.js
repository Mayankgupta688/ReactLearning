import React from "react";
import ReactDOM from "react-dom";

import InterpolatingData from "./components/InterpolatingData";

var employeeList = [{
    firstName: "Random Name",
    age: 120,
    lastName: "Agarwal"
}, {
    firstName: "Random Name",
    age: 120,
    lastName: "Agarwal"
}, {
    firstName: "Random Name",
    age: 120,
    lastName: "Agarwal"
}]

ReactDOM.render((
    <div>
        <InterpolatingData ></InterpolatingData>
    </div>
), document.getElementById("root"));



