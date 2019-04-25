import React from 'react';
import PropTypes from 'prop-types';

const Dashboard = ({email, logout}) => {
  return(
    <div className="container">
      <h2>Hi {email}</h2>
      <a id="logout-button" className="button button-primary" onClick={ () => logout() }>logout</a>
    </div>
  );
};

Dashboard.propTypes = {
  email: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired
};

export default Dashboard;