import React from "react";
import "./App.css";

import AppComments from "./AppComments.js";
import services from "./services.js";

class AppPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined,
      comments: []
    };
    this.setUserCallback = this.setUserCallback.bind(this);
    this.setCommentsCallback = this.setCommentsCallback.bind(this);
  }

  setUserCallback(user) {
    this.setState({ user: user });
  }

  setCommentsCallback(comments) {
    this.setState({ comments: comments });
  }

  componentDidMount() {
    services.getUser(this.props.post.userId, this.setUserCallback);
    services.getComments(this.props.postId, this.setCommentsCallback);
  }

  render() {
    let commentsRows = [];
    for (let i = 0; i < this.state.comments.length; i++) {
      let comment = this.state.comments[i];
      let commentRow = (
        <AppComments
          Uid={comment.id}
          key={comment.id}
          comment={comment}
          body={comment.body}
        />
      );
      commentsRows.push(commentRow);
    }

    let userDiv = null;
    if (this.state.user !== undefined) {
      userDiv = (
        <p style={{ font: "Arial" }}>
          <i>
            {this.props.post.id} {this.state.user.name}
            {"(" + this.state.user.email + ")"}
          </i>
        </p>
      );
    }

    return (
      <div className={"posts"}>
        {userDiv}
        <p style={{ font: "Arial" }}>
          <i>{this.props.body}</i>
        </p>
        <br />
        <hr />
        <br />
        {commentsRows}
      </div>
    );
  }
}

export default AppPosts;
