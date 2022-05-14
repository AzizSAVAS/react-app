import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'

export default class FormComponent extends Component {
  constructor(props) {
    super(props);

  }

    
  render() {
    return (
      <>
        <Modal show={this.props.show}>
          <Modal.Header>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="success">
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
