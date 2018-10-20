import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { ButtonGroup, Button } from 'react-bootstrap';
import Modal from './Modal';
import axios from 'axios';

export default class AuthorizedHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currCount: 0,
      nextCount: 0
    };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleConfirmIncrement = this.handleConfirmIncrement.bind(this);
  }

  componentDidMount() {
    axios.get('/get-recent-count')
    .then(res => {
      this.setState({
        currCount: res.data
      });
    })
    .catch(err => {
      console.error(err);
    });
  }

  handleIncrement() {
    if (this.state.nextCount > this.state.currCount) {
      return;
    } else {
      axios.post('/evaluate-next', {
        currCount: this.state.currCount,
      })
      .then(res => {
        this.setState({
          nextCount: res.data
        });
      })
      .catch(err => {
        console.error(err);
      });
    }
  }

  handleConfirmIncrement() {
    this.setState({
      currCount: this.state.nextCount
    });
  }
  
  componentWillMount() {
    this.props.history.push(this.props.history.location.pathname);
  }

  render() {
    return (
      <Container id='count-and-increment-container'>
        <Row>
        <Col style={{textAlign: 'center'}}>
          <ButtonGroup bsSize="large" justified >
            <Button>
              Count: {this.state.currCount}
            </Button>
            <Button>
              <Modal
                increment={this.handleIncrement}
                next={this.state.nextCount}
                confirmIncrement={this.handleConfirmIncrement}
              />
            </Button>
          </ButtonGroup>
        </Col>
        </Row>
      </Container>
    );
  }
}