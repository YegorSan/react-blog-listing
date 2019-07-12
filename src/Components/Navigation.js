import React, { Component } from "react";
import Post from "./Post";
import Posts from "./Posts";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./Navigation.scss";

class Navigation extends Component {
  render() {
    return (
      <div classNameName="page">
        <header tabindex="0">Blog Listing App</header>
        <div id="nav-container">
          <div className="bg" />
          <div className="button" tabindex="0">
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </div>
          <div id="nav-content" tabindex="0">
            <ul>
              <li>
                <a href="#0">Home</a>
              </li>

              <li>
                <a href="#0">About</a>
              </li>
              <li>
                <a href="#0">Contact</a>
              </li>
              <li className="small">
                <a href="#0">Facebook</a>
                <a href="#0">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
        <main>
          <div className="content">
            <Route path="/posts/:id" component={Post} />
            <Route exact path="/" component={Posts} />
          </div>
        </main>
      </div>
    );
  }
}
export default Navigation;
