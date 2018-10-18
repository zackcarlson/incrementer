import React, { Component } from 'react';
import Increment from '../presentational/Increment';
import Value from '../presentational/Value';

class AuthorizedHome extends Component {
  constructor() {
    super();
    this.state = {
      currVal: 0
    };
  }

  // post function to initially do math 
  // post function to confirm and store output of math
    // pass these funcs to increment
  
  componentWillMount() {
    this.props.history.push(this.props.history.location.pathname);
  }

  render() {
    return (
      <div>
        <Increment />
        <Value value={this.state.currVal} />
      </div>
    );
  }
}

export default AuthorizedHome;