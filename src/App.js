import React, { Component } from "react";
import "./App.css";
import Posts from "./Components/Posts";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Post from "./Components/Post";
import Navigation from "./Components/Navigation";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navigation />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
