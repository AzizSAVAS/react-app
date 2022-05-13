import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'

export default class FormComponent extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
        <Modal fade={false} isOpen={this.props.visible}>
        
        <Modal.Header>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
      
        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=> this.props.visible = true}>
            Close
          </Button>
          <Button variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
      
      </Modal>
    )
  }
}
