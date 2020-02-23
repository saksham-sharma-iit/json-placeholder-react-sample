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
        <div key={"userDiv:" + i}>
          <p style={{ font: "Arial" }}>
            <i>{user.id}</i>
            <br />
            <br />
            {user.name} {"(" + user.email + ")"}
            <br />
          </p>
          <hr></hr>
        </div>
      );
      userDivs.push(userDiv);
    }

    return <div className="posts">{userDivs}</div>;
  }
}

export default AppAllUsers;
