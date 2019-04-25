import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { login as loginAction } from '../actions/login';

import LoginView from '../components/login/login.jsx';

const Login = ({login}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOnChangeEmail = (value) => {
    setEmail(value);
  };
  
  const handleOnChangePassword = (value) => {
    setPassword(value);
  };

  const handleLogin = () => {
    login(email, password);
  };

  return(
    <LoginView
      email={email}
      password={password}
      handleOnChangeEmail={handleOnChangeEmail}
      handleOnChangePassword={handleOnChangePassword}
      login={handleLogin}
    />
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired
};

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(loginAction(email, password))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)