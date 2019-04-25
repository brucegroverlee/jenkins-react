import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { logout } from '../actions/logout';

import DashboardView from '../components/dashboard/dashboard.jsx';

const Dashboard = ({email, logout}) => {
  return(
    <DashboardView
      email={email}
      logout={logout}
    />
  );
};


Dashboard.propTypes = {
  email: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired
};


const mapStateToProps = state => ({
  email: state.session.email
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);