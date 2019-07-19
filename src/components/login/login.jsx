import React from 'react';
import PropTypes from 'prop-types';

import './login.scss';

const Login = ({email, password, handleOnChangeEmail, handleOnChangePassword, login}) => {
  return(
    <div className="container">
      <h1 className="login__title">Login App Firebase</h1>
      <form>
        <div className="row">
          <div className="six columns">
            <label htmlFor="email-input">Your email</label>
            <input 
              className="u-full-width" 
              type="email" 
              placeholder="test@mailbox.com" 
              id="email-input"
              value={email}
              onChange={(event) => handleOnChangeEmail(event.target.value)}/>
          </div>
          <div className="six columns">
            <label htmlFor="password-input">Your password</label>
            <input 
              className="u-full-width" 
              type="password" 
              placeholder="password" 
              id="password-input"
              value={password}
              onChange={(event) => handleOnChangePassword(event.target.value)}/>
          </div>
        </div>
        <a id="login-button" className="button button-primary" onClick={ () => login() }>login</a>
      </form>
    </div>
  );
};

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleOnChangeEmail: PropTypes.func.isRequired,
  handleOnChangePassword: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired
};

export default Login;