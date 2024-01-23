import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import MakeNav from "./Header.jsx";

const AnotherElement = (
  <a href="https://google.com" target="_blank">
    Visit google
  </a>
);

// to create react elements
const ReactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
  },
  "click me to see google"
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode></React.StrictMode>
);

// when working with vite react components should be written in a jsx file , and compents start with capital letter

// react creats the object to render the elements
// only evaluated expression can only be given to react components
