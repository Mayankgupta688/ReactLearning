import React, { useState } from "react";
import Axios from "axios";
import { BrowserRouter, Route, Link } from "react-router-dom";
export default function ContainerComponent() {
    return (
        <div>
            <h1>This is Header for the Application</h1>
            <nav>
                <a style={{"marginRight": "10px"}} href="/">Home Page</a>
                <a style={{"marginRight": "10px"}} href="/help">Help Page</a>
                <a style={{"marginRight": "10px"}} href="/about">About Page</a>
            </nav><br/><br/>

            <div>
                <BrowserRouter>
                    <LinkComponent></LinkComponent><hr/><br/><br/>
                    <Route exact path="/" component={HomeComponent}></Route>
                    <Route exact path="/help" component={HelpComponent}></Route>
                    <Route exact path="/about" component={AboutComponent}></Route>
                    <Route exact path="/details/:userId" component={DetailsComponent}></Route>
                </BrowserRouter>
                <hr/>
            </div>

            <h2>This is Component Footer...</h2>
        </div>
    )
}

function HomeComponent(props) {
    var inputProps = props;
    var [employeeList, setEmployeeList] = useState([]);
    var getEmployees = () => {
        Axios.get('https://5c055de56b84ee00137d25a0.mockapi.io/api/v1/emp').then((success) => {
            setEmployeeList(success.data)
        })
    }
    var viewmoreDetails = (id) => {
        debugger;
        alert(id)
        inputProps.history.push(`/details/${id}`)
    }
    return (
        <>
            <button type="button" onClick={() => getEmployees()}>Get Employees</button>
            <hr />
            {employeeList.map(employee => {
                return (
                    <React.Fragment key={employee.id}>
                        <h1>{employee.name}</h1>
                        <button type="button" onClick={() => viewmoreDetails(employee.id)}>More Details</button>
                    </React.Fragment>
                )
            })}
        </>
    )
}

function LinkComponent() {
    return (
        <div>
            <nav>
                <Link style={{"marginRight": "10px"}} to="/">Home Page Link</Link>
                <Link style={{"marginRight": "10px"}} to="/help">Help Page Link</Link>
                <Link style={{"marginRight": "10px"}} to="/about">About Page Link</Link>
            </nav><hr/><br/><br/>
        </div>
    )
}


function DetailsComponent(props) {
    debugger;
    debugger;
    return <h1>This is HelpComponent...</h1>
}

function HelpComponent() {
    return <h1>This is HelpComponent...</h1>
}

function AboutComponent() {
    return <h1>This is About Page...</h1>
}