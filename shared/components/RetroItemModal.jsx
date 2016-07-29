import React from 'react';
import { Modal, Button, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default class RetroItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        showModal: false,
        type: '',
        description: '' 
    };
  }
  
  close() {
    this.setState({ showModal: false });
  }
  
  open(title) {
    this.setState({ 
        showModal: true,
        type: title,
        description: ''
    });
  }

  save() {
    this.props.createRetroItem({
        type: this.state.type,
        description: this.state.description
    });
    
    this.close();
  }
  
  onDescriptionKeyUp(event) {
      this.setState({ description: event.target.value });
  }
  
  render() {
    return (
        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
                <Modal.Title>New Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form ref="forms">
                <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>Description</ControlLabel>
                    <FormControl onKeyUp={this.onDescriptionKeyUp.bind(this)} ref="description-text" componentClass="textarea" placeholder="Please enter the description of your retro item here" />
                </FormGroup>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="primary" onClick={this.save.bind(this)}>Save</Button>
            <Button bsStyle="default" onClick={this.close.bind(this)}>Cancel</Button>
          </Modal.Footer>
        </Modal>
    );
  }
}