import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    // here we are giving data to the context
    setUser({ username, Password });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={(e) => handleSubmit(e)}>Submit</button>
    </div>
  );
}

export default Login;
