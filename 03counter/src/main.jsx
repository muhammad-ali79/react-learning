import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// when working with vite react components should be written in a jsx file , and compents start with capital letter

// react creats the object to render the elements
// only evaluated expression can only be given to react components
