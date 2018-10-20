import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AuthorizedHome from './AuthorizedHome';
import NavBar from './Navbar';
import Login from './Login';

const checkAuth = () => {
  const token = localStorage.getItem('admin');
  const refreshToken = sessionStorage.getItem('admin');
  if (!token && !refreshToken) {
    return false;
  }
  return true;
}

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    checkAuth() ? (
      <Component {...props} />
    ) : (
        <Redirect to={{ pathname: '/' }} />
      )
  )} />
)

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin() {
    this.setState({
      loggedIn: true,
    });
  }

  handleLogout() {
    this.setState({
      loggedIn: false
    });
  }

  render() {
    return (
      <div>
        <NavBar loggedIn={this.state.loggedIn} handleLogout={this.handleLogout}/>
        <Switch>
          <AuthRoute exact path='/home' component={AuthorizedHome} />
          <Route exact path='/' exact render={props => 
            <Login {...props} handleLogin={this.handleLogin}/>
          }/>
        </Switch> 
      </div>
    );
  }
}