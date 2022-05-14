import React, { Component } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid'

export default class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = 
    {
      name:'',
      surname:'',
      username:''
    }
  }

  onSubmit(){
    this.props.addUser(
      this.state.name,
      this.state.surname,
      this.state.username);
      this.props.hide();
  }
    
  render() {
    return (
      <>
        <Modal show={this.props.show}>
          <Modal.Header>
            <Modal.Title>User Add</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label for="name">Name</Form.Label>
                <Form.Control onChange={(e) => this.setState({ name: e.target.value })}
                id="name"
                type="text"
                name="name"/>
              </Form.Group>
              <Form.Group>
                <Form.Label for="surname">Surname</Form.Label>
                <Form.Control  onChange={(e) => this.setState({ surname: e.target.value })}
                id="surname"
                type="text"
                name="surname"/>
              </Form.Group>
              <Form.Group>
                <Form.Label for="username">Username</Form.Label>
                <Form.Control  onChange={(e) => this.setState({ username: e.target.value })}
                id="username"
                type="text"
                name="username"/>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.onSubmit()} variant="success" >
              Add
            </Button>
            <Button onClick={() => this.props.hide()} variant="danger">
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}
