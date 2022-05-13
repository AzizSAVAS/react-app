import React, { Component } from 'react';
import { Navbar , Container } from 'react-bootstrap';
import UserListComponent from '../component/UserListComponent';

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users:
      [
        {
          id:1,
          name:'Aziz',
          surname:'SAVAS',
          username:'azizsavas'
        },
        {
          id:2,
          name:'Rabia',
          surname:'SAVAS',
          username:'rabiasavas'
        },
        {
          id:3,
          name:'Meryem',
          surname:'SAVAS',
          username:'meryemsavas'
        },
        {
          id:4,
          name:'Yakup',
          surname:'SAVAS',
          username:'yakupsavas'
        }
      ]
    }

  }
  render() {
    return (
      <>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          </Container>
        </Navbar>
        <UserListComponent users={this.state.users} />
      </>


    )
  }
}
