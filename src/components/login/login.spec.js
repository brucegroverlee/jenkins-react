import React from 'react';
import { shallow } from 'enzyme';

import Login from './login.jsx';

const setup = (name, email, password) => {
  const actions = {
    handleOnChangeName: jest.fn(),
    handleOnChangeEmail: jest.fn(),
    handleOnChangePassword: jest.fn(),
    login: jest.fn()
  };

  const component = shallow(
    <Login 
      name={name}
      email={email}
      password={password}
      {...actions} />
  );

  return {
    component: component,
    actions: actions,
    emailInput: component.find('#email-input'),
    passwordInput: component.find('#password-input'),
    loginButton: component.find('#login-button')
  };
}

describe('Login Component', () => {
  test('should trigger on change email', () => {
    const { emailInput, actions } = setup('', '', '');
    const event = { target: { value: 'email' } };
    emailInput.simulate('change', event);
    expect(actions.handleOnChangeEmail).toBeCalled();
  });

  test('should trigger on change password', () => {
    const { passwordInput, actions } = setup('', '', '');
    const event = { target: { value: 'email' } };
    passwordInput.simulate('change', event);
    expect(actions.handleOnChangePassword).toBeCalled();
  });

  test('should trigger on click login', () => {
    const { loginButton, actions } = setup('', '', '');
    loginButton.simulate('click');
    expect(actions.login).toBeCalled();
  });
});