import React from "react";

import Header from "./components/Header";
import Routes from "./router/routes";

import "./global.css";
export default function App() {
  return (
    <div className="App">
      <div className="container-app">
        <Routes />
      </div>
    </div>
  );
}
