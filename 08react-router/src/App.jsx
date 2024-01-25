import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Header />
      {/* we wil use the outlet from the reate router when we want to dispaly something that changes between the components and its upper and lower components remains same*/}
      <Outlet />
      <Footer />
    </div>
  );
}
