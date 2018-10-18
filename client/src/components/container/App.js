import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthorizedHome from './AuthorizedHome';
import Navbar from './Navbar';
import Login from './Login';
import SignUp from './Signup';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/' exact render={props => <Login {...props}/>} />
            <Route path='/signup' exact render={props => <SignUp {...props}/>} />
            <Route path='/home' exact render={props => <AuthorizedHome {...props}/>} />
          </Switch> 
        </div>
      </BrowserRouter>
    );
  }

}

export default App;