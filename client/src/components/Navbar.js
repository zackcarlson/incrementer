import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    localStorage.removeItem('admin');
    localStorage.removeItem('user');
    sessionStorage.removeItem('admin');
    sessionStorage.removeItem('user');
    this.props.handleLogout();
  }

  render() {
    return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
        <Link className="navbar-brand" to="/">
            Grio
          </Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <NavItem eventKey={1} to="/">
          { localStorage.getItem('admin') && 
            sessionStorage.getItem('admin') ? (
             <Button
                bsStyle="primary"
                className="btn-margin"
                onClick={this.logout}
              >
                Log Out
              </Button>
            ) : (
              <div></div>
            )
          }
        </NavItem>
      </Nav>
    </Navbar>
    );
  }
}