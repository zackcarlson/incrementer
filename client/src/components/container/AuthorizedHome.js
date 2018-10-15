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