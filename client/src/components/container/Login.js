import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Login extends Component {

  componentWillMount() {
    this.props.history.push(this.props.history.location.pathname);
  }

  render() {
    return (
      <section className="login-container">
        <div className="login-form">
            <form action="" method="post">
              <h2 className="text-center">Sign in</h2>

              <div className="form-group">
                <div className="input-group">
                  <input type="text" className="form-control" name="username" placeholder="Username" required="required"/>				
                </div>
              </div>

              <div className="form-group">
                <div className="input-group">
                  <input type="password" className="form-control" name="password" placeholder="Password" required="required"/>				
                </div>
              </div>  

              <div className="form-group">
                <button type="submit" className="btn btn-primary login-btn btn-block">Sign in</button>
              </div>
            </form>

            <div className="or-seperator"><i>or</i></div>
            <div className="form-group">
            <NavLink exact to="/signup" style={{textDecoration: 'none'}}><button type="submit" className="btn btn-primary signup-btn btn-block">Sign up</button></NavLink>
            </div>
        </div>
      </section>
    );
  }
}

export default Login;