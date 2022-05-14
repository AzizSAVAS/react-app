import React, { Component } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import UserListComponent from '../component/UserListComponent';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';



export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users:
        [
          {
            id: uuidv4(),
            name: 'Aziz',
            surname: 'SAVAS',
            username: 'azizsavas'
          },
          {
            id: uuidv4(),
            name: 'Rabia',
            surname: 'SAVAS',
            username: 'rabiasavas'
          },
          {
            id: uuidv4(),
            name: 'Meryem',
            surname: 'SAVAS',
            username: 'meryemsavas'
          },
          {
            id: uuidv4(),
            name: 'Yakup',
            surname: 'SAVAS',
            username: 'yakupsavas'
          }
        ]
    }
    this.addUser = this.addUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }


  addUser = (name, surname, username) => {
    if (name, surname, username) {
      const users = [...this.state.users];
      users.push({
        id: uuidv4(),
        name: name,
        surname: surname,
        username: username,
      });
      this.setState({ users });
      toast('User Added');
    }
    else {
      toast("Please Fill All Fields");
   }
  };

  deleteUser = (obj) => {
    const users = this.state.users.filter(user=>{
      return user.id !== obj.id;
    })
    this.setState({users});
    toast('User Deleted');
  }


  render() {
    return (
      <>
      <ToastContainer />
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          </Container>
        </Navbar>
        <UserListComponent users={this.state.users} addUser={this.addUser} deleteUser={this.deleteUser} />

      </>


    )
  }
}
