import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

class Post extends Component {
  constructor() {
    super();
    this.state = {
      post: { title: "", body: "" },

      user: {}
    };
  }
  getPost() {
    axios
      .get(
        "https://jsonplaceholder.typicode.com/posts/" +
          this.props.match.params.id
      )
      .then(response => {
        if (response.data) {
          this.setState({ post: response.data });
          this.getUser();
        }
      });
  }
  getUser() {
    let userId = this.state.post.userId;
    axios
      .get("https://jsonplaceholder.typicode.com/users/" + userId)
      .then(response => {
        if (response.data) {
          this.setState({ user: response.data, loaded: true });
        }
      });
  }
  componentDidMount() {
    this.getPost();
  }

  render() {
    if (this.state.post) {
      return (
        <div>
          <h1
            style={{
              textAlign: "center",
              marginTop: "10px",
              marginBottom: "20px"
            }}
          >
            Single Post Page
          </h1>
          <div className="post-wrapper">
            <h4>Post author</h4>
            <p>{this.state.user.name}</p>
            <h4>Post header</h4>
            <h2>{this.state.post.title}</h2>
            <h4>Post body</h4>
            <p>{this.state.post.body}</p>
            <Link to="/">Close</Link>
          </div>
        </div>
      );
    }
  }
}
export default Post;
