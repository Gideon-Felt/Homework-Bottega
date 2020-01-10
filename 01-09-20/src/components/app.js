import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

import Counter from "./counter";
import WordToggle from "./word-toggle";
import HideToggle from "./hide-toggle";
import WordSize from "./word-size";
import TextAlign from "./text-align";
import Clock from "./clock";
import ColorChanger from "./color-changer";
import Landing from "./landing";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* NAVIGATION */}
        <div className="left-column">
          <div className="links-wrapper">
            <div className="link-wrapper">
              <NavLink
                exact
                to="/"
                className="linkElement"
                activeClassName="active"
              >
                Home
              </NavLink>
            </div>

            <div className="link-wrapper">
              <NavLink
                to="/counter"
                className="linkElement"
                activeClassName="active"
              >
                Counter
              </NavLink>
            </div>

            <div className="link-wrapper">
              <NavLink
                to="/word-toggle"
                className="linkElement"
                activeClassName="active"
              >
                WordToggle
              </NavLink>
            </div>

            <div className="link-wrapper">
              <NavLink
                to="/hide-toggle"
                className="linkElement"
                activeClassName="active"
              >
                HideToggle
              </NavLink>
            </div>

            <div className="link-wrapper">
              <NavLink
                to="/word-size"
                className="linkElement"
                activeClassName="active"
              >
                Word Size
              </NavLink>
            </div>

            <div className="link-wrapper">
              <NavLink
                to="/text-align"
                className="linkElement"
                activeClassName="active"
              >
                Text Alignment
              </NavLink>
            </div>

            <div className="link-wrapper">
              <NavLink
                to="/clock"
                className="linkElement"
                activeClassName="active"
              >
                Clock
              </NavLink>
            </div>

            <div className="link-wrapper">
              <NavLink
                to="/color-changer"
                className="linkElement"
                activeClassName="active"
              >
                Color Changer
              </NavLink>
            </div>
          </div>
        </div>

        {/* TOOL DISPLAY */}
        <div className="right-column">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/counter" component={Counter} />
            <Route exact path="/word-toggle" component={WordToggle} />
            <Route exact path="/hide-toggle" component={HideToggle} />
            <Route exact path="/word-size" component={WordSize} />
            <Route exact path="/text-align" component={TextAlign} />
            <Route exact path="/clock" component={Clock} />
            <Route exact path="/color-changer" component={ColorChanger} />
          </Switch>
        </div>
      </BrowserRouter>

      {/* <Counter />
      <hr />
      <WordToggle />
      <hr />
      <HideToggle />
      <hr />
      <WordSize />
      <hr />
      <TextAlign />
      <hr />
      <Clock />
      <hr />
      <ColorChanger /> */}
    </div>
  );
}
