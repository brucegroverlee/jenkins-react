const sessionName = 'JENKINS_REACT_APP';

export const set = (email, token) => {
  if (email===undefined || token===undefined /** email or token are undefined */) {
    return false;
  }

  if (email==='' || token==='' /** email or token are empty */) {
    return false;
  }

  localStorage.setItem(sessionName,JSON.stringify({email, token}));
  return true;
};

export const init = () => {
  const sessionContent = localStorage.getItem(sessionName);
  if (sessionContent === null) {
    return {
      email: '',
      token: ''
    };
  } else {
    return JSON.parse(sessionContent);
  }
};

export const clean = () => {
  localStorage.removeItem(sessionName);
};