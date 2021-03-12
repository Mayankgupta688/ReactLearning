import React from 'react';
import Axios from "axios";
 
export default class EmployeeListing extends React.Component {
    constructor() {
        super();
        this.state = {
            employeeList: []
        }
    }
 
    render() {
        return (
            <div>
                <h1> {this.state.employeeList.map((value) => {
                    return value.firstName + value.lastName
                })}

                </h1>
            </div>
        )
    }

    componentDidMount() {
        Axios.get("https://5c055de56b84ee00137d25a0.mockapi.io/api/v1/sample").then((dta) => {
            debugger;
        })
    }
}