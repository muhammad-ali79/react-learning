import React from "react";
import UserContextProvider from "./Context/UserContextProvider";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

function App() {
  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;

// why we need contxt api
// because to avoid prop drilling

// so how its works
// 1. we create the context in a file
// 2. then we make a context provider here we pass the data that we want to use in context
// 3. then we give some data to context provider method here in the form of an object
// 4. then we use the data in other components if we want to to avoid prop drilling
