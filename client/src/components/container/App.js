import React, { Component } from 'react';
import AuthorizedHome from './AuthorizedHome';

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
        APP CONTAINER
        <AuthorizedHome />
      </div>
    );
  }
}

export default App;