import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./home";
import Comp1 from "./comp1";
import Comp2 from "./comp2";
import NavBar from "./navbar";
import CurrentDate from "./time";

import "../style/main.scss";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <NavBar />
          <switch>
            <Route exact path="/" component={Home} />
            <Route path="/component1" component={Comp1} />
            <Route path="/component2" component={Comp2} />
          </switch>
          <CurrentDate />
        </div>
      </BrowserRouter>
    </div>
  );
}
