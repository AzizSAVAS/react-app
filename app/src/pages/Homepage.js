import React, { Component } from 'react';
import { Navbar , Nav , Container , NavDropdown } from 'react-bootstrap';
import UserListComponent from '../component/UserListComponent';

export default class Homepage extends Component {
  render() {
    return (
      <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        </Container>
      </Navbar>
      <UserListComponent/>
      </>
      
      
    )
  }
}
