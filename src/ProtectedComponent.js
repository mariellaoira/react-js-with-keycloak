import React from 'react';

const ProtectedComponent = ({ keycloak }) => {
  const logout = () => {
    keycloak.logout();
  };

  return (
    <div>
      <h2>Protected Component</h2>
      <p>Welcome, {keycloak.tokenParsed.preferred_username}!</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default ProtectedComponent;
