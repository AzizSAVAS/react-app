import React, { Component } from 'react'
import { Alert, Button, Table } from 'react-bootstrap'
import FormComponent from './FormComponent';

export default class UserListComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      show: false,
    }
    this.hide = this.hide.bind(this);
};

hide() {
  this.setState ({ show : false});
}


  render() {
    return (
     <div className='container mt-5'>
        <Button className='btn btn-primary' onClick={() => this.setState({ show : true })}>Add</Button>
        <FormComponent show={this.state.show} hide={this.hide} />
        { this.props.users.length > 0 ? (
          <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {this.props.users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.surname}</td>
              <td>@{user.username}</td>
              <td>
              <Button className='btn btn-warning'>Delete</Button>
            &nbsp;
              <Button className='btn btn-danger'>Delete</Button>
              </td>
            </tr>
            ))}
          </tbody>
        </Table>
        ): 
        (<Alert color='warning'>There is no users</Alert>)
        }
     </div>
    )
  }
}
