import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  // here children is a prop it can be any element
  const [user, setUser] = React.useState(null);
  return (
    // we also need to provide that what data we will pass to the children so here we are passing the user and setUser
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
