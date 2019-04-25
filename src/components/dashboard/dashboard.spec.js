import React from 'react';
import { shallow } from 'enzyme';

import Dashboard from './dashboard.jsx';

const setup = (email) => {
  const actions = {
    logout: jest.fn()
  };

  const component = shallow(
    <Dashboard
      email={email}
      {...actions}/>
  );

  return {
    component,
    actions,
    h2: component.find('h2'),
    logoutButton: component.find('#logout-button')
  };
};

describe('Dashboard component', () => {
  test('Should show the email', () => {
    const { h2 } = setup('Juan');
    expect(h2.text()).toMatch(/^Hi Juan/);
  });

  test('Should trigger the logout action', () => {
    const { logoutButton, actions } = setup('');
    logoutButton.simulate('click');
    expect(actions.logout).toBeCalled();
  });
});