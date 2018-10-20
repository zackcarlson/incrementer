import React, { Component } from "react";
import Redirect from "react-router-dom";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Table } from "reactstrap";
import axios from 'axios';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
    this.validateForm = this.validateForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.history.push(this.props.history.location.pathname);
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.username, this.state.password);
    axios.post('/login', {
      username: this.state.username,
      password: this.state.password
    })
    .then(session => {
      if (!session) {
        return;
      } else {
        this.props.handleLogin();
        localStorage.setItem('admin', session.data.admin);
        localStorage.setItem('user', session.data.user);
        sessionStorage.setItem('admin', session.data.admin);
        sessionStorage.setItem('user', session.data.user);
        this.props.history.push('/home');
        return <Redirect to='/home' />;
      } 
    })
    .catch(() => {
      console.log('Access denied');
    });
  }

  render() {
    const divStyle = {textAlign: "center"};
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="username" bsSize="large">
            <ControlLabel>Username</ControlLabel>
            <FormControl
              autoFocus
              type="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsStyle="primary" bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
          <br></br>
          <ListGroup style={divStyle}>
            <ListGroupItem>To log in, please enter the credentials below</ListGroupItem>
          </ListGroup>
          <Table borderless>
            <tbody>
              <tr style={divStyle}>
                <th scope="row">username:</th>
                <td><i>coolusername</i></td>
              </tr>
              <tr style={divStyle}>
                <th scope="row">password:</th>
                <td><i>solidpassword</i></td>
              </tr>
            </tbody>
          </Table>
        </form>
      </div>
    );
  }
}