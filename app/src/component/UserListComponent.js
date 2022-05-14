import React, { Component } from 'react'
import { Alert, Button, Table } from 'react-bootstrap'
import FormComponent from './FormComponent';

export default class UserListComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      show: false,
      user: {},
    }
    this.hide = this.hide.bind(this);
};

hide() {
  this.setState ({ show : false});
}

 getElementById(value) {
   this.setState({
     user: value,
     show : true,
   });
 }

  render() {
    return (
     <div className='container mt-5'>
        <Button className='btn btn-primary' onClick={() => this.setState({ user:{}, show : true })}>Add</Button>
       { this.state.show ? (
          <FormComponent 
          show={this.state.show} 
          hide={this.hide} 
          addUser={this.props.addUser} 
          user={this.state.user} 
          editUser={this.props.editUser}/>
         ) : null }
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
              <Button className='btn btn-warning' onClick={() => this.getElementById(user)}>Edit</Button>
            &nbsp;
              <Button className='btn btn-danger' onClick={() => this.props.deleteUser(user)}>Delete</Button>
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
