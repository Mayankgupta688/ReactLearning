import React from 'react';
 
export default class EmployeeListing extends React.Component {
    constructor() {
        super();
        this.state = {
            employeeList: [{
                firstName: "Mayank",
                lastName: "Gupta"
            }, {
                firstName: "Anshul",
                lastName: "Gupta"
            }, {
                firstName: "Ankit",
                lastName: "Gupta"
            }]
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
}