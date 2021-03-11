import React from 'react';
 
export default class EmployeeListingDetailed extends React.Component {
    constructor() {
        super();
        this.state = {
            employeeList: [{
              "id":"1",
              "createdAt":"2018-12-03T11:37:42.015Z",
              "name":"Ms. Gaylord Streich",
              "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/jagan123/128.jpg"
            },{
              "id":"2",
              "createdAt":"2018-12-02T21:06:49.825Z",
              "name":"Roxanne Kunde",
              "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/chaabane_wail/128.jpg"
            },
            {"id":"3","createdAt":"2018-12-03T03:37:39.995Z","name":"Dante Spencer","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/moscoz/128.jpg"},
            {"id":"4","createdAt":"2018-12-03T11:07:34.261Z","name":"Benny Hartmann","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/abdots/128.jpg"},
            {"id":"5","createdAt":"2018-12-03T11:38:36.583Z","name":"Easton Fisher","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/brenton_clarke/128.jpg"},
            {"id":"6","createdAt":"2018-12-02T17:48:52.784Z","name":"Mrs. Brandi Grant","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/g3d/128.jpg"},
            {"id":"7","createdAt":"2018-12-02T17:57:35.899Z","name":"Leopoldo Ortiz","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/aoimedia/128.jpg"},
            {"id":"8","createdAt":"2018-12-03T06:31:54.963Z","name":"Marielle Zulauf","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/jjshaw14/128.jpg"},
            {"id":"9","createdAt":"2018-12-03T00:28:30.136Z","name":"Maynard Hilll","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/danro/128.jpg"},
            {"id":"10","createdAt":"2018-12-03T13:42:04.578Z","name":"Jovanny Dare","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/s4f1/128.jpg"}
          ]}
    }

    deleteEmployee = (id) => {
      this.state.employeeList = this.state.employeeList.filter((employee) => {
        return employee.id !== id;
      })
    }
 
    render() {
        return (
            <div>
              <h1>The List of Employee are Given Below: </h1><hr/>
                 {this.state.employeeList.map((value) => {
                   return <Showdata {...value} deleteEmployee={this.deleteEmployee} ></Showdata>
                })}
            </div>
        )
    }
}


class Showdata extends React.Component {

  callDeleteFromParent = (id) => {
    this.props.deleteEmployee(id);
  }

  render() {
    return (
        <div>
            <h2>User Id: {this.props.id} </h2>
            <h2>User Name in Company : {this.props.name}</h2>
            <input type="button" value='Delete' onClick={() => { this.callDeleteFromParent(this.props.id) }} />
            <hr/>
        </div>
    )
  }
}