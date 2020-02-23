import React from "react";
import "./App.css";

class AppAllUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        this.setState({ users: users });
      });
  }

  render() {
    let userDivs = [];
    let userDiv = null;
    for (let i = 0; i < this.state.users.length; i++) {
      let user = this.state.users[i];
      userDiv = (
        <p style={{ font: "Arial" }}>
          <i>{user.id}</i>
          <br />
          <br />
          {user.name} {"(" + user.email + ")"}
          <br />
          <hr></hr>
        </p>
      );
      userDivs.push(userDiv);
    }

    return <div className="posts">{userDivs}</div>;
  }
}

export default AppAllUsers;
