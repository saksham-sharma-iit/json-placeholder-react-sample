import React from "react";
import "./App.css";

import AppPosts from "./AppPosts.js";
import services from "./services";
import { Spinner, Jumbotron } from "react-bootstrap";

class AppAllPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      posts: [],
      line: ""
    };
    this.setPosts = this.setPosts.bind(this);
    this.change = this.change.bind(this);
  }

  change(str) {
    this.setState({ line: str });
  }

  setPosts(posts) {
    if (this._mounted) {
      this.setState({ posts: posts, loading: false });
    }
  }

  componentDidMount() {
    let hash = window.location.hash;
    let search = hash.substring(hash.indexOf("?") + 1);
    let urlParams = new URLSearchParams(search);
    // console.log(JSON.stringify(urlParams));
    let userIdSearched = urlParams.get("userId");
    // console.log("userIdSearched->" + userIdSearched);

    if (userIdSearched) {
      services.getPostsFromUser(userIdSearched, this.setPosts);
    } else {
      services.getPosts(this.setPosts);
    }

    this._mounted = true;
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  render() {
    let postsDivs = [];

    let postDiv = null;

    for (let i = 0; i < this.state.posts.length; i++) {
      let post = this.state.posts[i];
      if (!post.body.includes(this.state.line)) {
        continue;
      }
      // console.log(user);
      postDiv = (
        <AppPosts
          key={post.id}
          postId={post.id}
          Uid={post.userId}
          post={post}
          body={post.body}
        />
      );
      postsDivs.push(postDiv);
    }

    if (this.state.loading) {
      postsDivs = <Spinner animation="border" />;
    }

    return (
      <div className="App">
        <input
          type="text"
          placeholder="Search post"
          onChange={e => this.change(e.target.value)}
        />
        <br />
        Number of Posts: {postsDivs.length}
        <br />
        <Jumbotron>{postsDivs}</Jumbotron>
      </div>
    );
  }
}

export default AppAllPosts;
