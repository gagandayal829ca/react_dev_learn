import React from "react";
import { useState } from "react";

const Auth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <>
      <button onClick={handleLogin}>
        {isLoggedIn ? <h3>Logout</h3> : <h3>Login</h3>}
      </button>
      {isLoggedIn ? (
        <h3>The user is logged in</h3>
      ) : (
        <h3>The user is not logged in</h3>
      )}
    </>
  );
};

export default Auth;
