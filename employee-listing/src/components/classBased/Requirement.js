
import React from "react";
 
export default class WorkWithState extends React.Component{
    constructor(){
        super();
   
        this.state = {
            counter: 0,
            time: `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`,
            myname: "Mayank",
            applicationName: "Technofunnel"
        }

    
        setInterval(() => {
        this.setState({
            counter:this.state.counter+1,
            time: `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`
    
        }) 
        }, 1000)
    }
    
    render(){
        return (
            <div>
                <h1>Application Name: {this.state.applicationName}</h1>
                <h2>Current Time: {this.state.time}</h2>
                <h2>Welcome {this.state.myname} counter value: {this.state.counter}</h2>
            </div>
        )
    }
}