import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Posts.css";
class Posts extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  getPosts() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
      this.setState({ posts: response.data, loaded: true });
    });
  }

  componentDidMount() {
    this.getPosts();
  }

  render() {
    const { posts } = this.state;
    if (posts) {
      return (
        <div>
          <h1
            style={{
              textAlign: "center",
              marginTop: "10px",
              marginBottom: "20px"
            }}
          >
            Posts List
          </h1>
          <div className="cards">
            {posts.map(post => (
              <li className="cards__item">
                <div className="card" key={post.id}>
                  <div className="card__image card__image--fence" />

                  <div className="card__content">
                    <div className="card__title">
                      {post.title.substring(0, 18) + "..."}
                    </div>
                    <p className="card__text">{post.body}</p>
                    <Link
                      to={"/posts/" + post.id}
                      className="btn btn--block card__btn"
                    >
                      View Post
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </div>
        </div>
      );
    }
  }
}
export default Posts;
