import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class ModalIncrement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
      const closeBtn = <button className='close' onClick={this.toggle}>&times;</button>;
      return (
      <div classnName='increment-btn'>
        <Button color='danger' onClick={ () => { 
          this.props.increment(); 
          this.toggle();
        }}>
          Increment
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} close={closeBtn}></ModalHeader>
          <ModalBody>
            <h2>Next Count: {this.props.next}</h2>
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={ () => {
              this.props.confirmIncrement();
              this.toggle(); 
            }}>
              Confirm
            </Button>{' '}
            <Button color='secondary' onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}