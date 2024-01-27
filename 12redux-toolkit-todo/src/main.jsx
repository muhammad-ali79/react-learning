import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./App/store";

console.log(Provider, store);

ReactDOM.createRoot(document.getElementById("root")).render(
  // we also need to wrap the elements in the provider like we also do in context api but this this we get the provider by the redux and unless like value in context api there we store attribute where we pass the refernce of the actuall store in our case its called Store
  <Provider store={store}>
    <App />
  </Provider>
);
