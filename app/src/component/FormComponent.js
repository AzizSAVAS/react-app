import React, { Component } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid'

export default class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = 
    {
      id:null,
      name:"",
      surname:"",
      username:"",
    }
  }

  onSubmit(){
    this.props.addUser(
      this.state.name,
      this.state.surname,
      this.state.username);
      /*this.props.hide();*/
  }

  onUpdate() {
    this.props.editUser(
      this.state.id,
      this.state.name,
      this.state.surname,
      this.state.username);
      this.props.hide();
  }
  
  componentDidMount() {
    this.setState({
      id: this.props.user.id,
      name: this.props.user.name,
      surname: this.props.user.surname,
      username: this.props.user.username,
    });
  }

  render() {
    return (
      <>
        <Modal show={this.props.show}>
          <Modal.Header>
            {this.props.user.id ? (<Modal.Title>User Update</Modal.Title>) : (
            <Modal.Title>User Add</Modal.Title>
            )
            
          }
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
                id="name"
                type="text"
                name="name"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Surname</Form.Label>
                <Form.Control
                value={this.state.surname}
                onChange={(e) => this.setState({ surname: e.target.value })}
                id="surname"
                type="text"
                name="surname"/>
              </Form.Group>
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control
                onChange={(e) => this.setState({ username: e.target.value })}
                value={this.state.username}
                id="username"
                type="text"
                name="username"/>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            {
              this.props.user.id ? (
              <Button variant='success' onClick={() => this.onUpdate()}>Update</Button>) : (
                <Button onClick={() => this.onSubmit()} variant="success" >
              Add
                  </Button>
              )

            }
            <Button onClick={() => this.props.hide()} variant="danger">
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}