import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SignUp extends Component {

  componentWillMount() {
    this.props.history.push(this.props.history.location.pathname);
  }
  render() {
    return (
      <section className="signup-container">
        <div className="signup-form">
          <form action="" method="post">
          <h2>Sign Up</h2>
            <div className="form-group">
              <input type="text" className="form-control" name="username" placeholder="Username" required="required"/>
            </div>

            <div className="form-group">
              <input type="email" className="form-control" name="email" placeholder="Email Address" required="required"/>
            </div>

            <div className="form-group">
              <input type="password" className="form-control" name="password" placeholder="Password" required="required"/>
            </div>

            <div className="form-group">
              <input type="password" className="form-control" name="confirm_password" placeholder="Confirm Password" required="required"/>
            </div> 

          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-lg">Sign Up</button>
          </div>
          </form>
        <div className="text-center">Already have an account? <NavLink exact to="/"><a href="#">Login here</a></NavLink></div>
      </div>
    </section>
    );
  }
}

export default SignUp;