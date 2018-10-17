import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthorizedHome from './AuthorizedHome';
import Navbar from './Navbar';
import Login from './Login';
import SignUp from './Signup';

class App extends Component {
  // check if token exists 
    // render authorized home view 
    // else render signin/signup page

  // post to signin and post to signup
    // render authorized home view upon successful log in/signup, 
    // else render signin/signup view with error message
  
  render() {
    return (
      <div>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/signup' component={SignUp}/>
          <Route path='/home/:userId' component={AuthorizedHome}/>
        </Switch> 
      </div>
    );
  }
}

export default App;