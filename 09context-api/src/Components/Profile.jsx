import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  console.log(user);

  // here we are using the data
  if (!user) return <h1>Please Login</h1>;

  return <h1>Welcom {user.username}</h1>;
}

export default Profile;
