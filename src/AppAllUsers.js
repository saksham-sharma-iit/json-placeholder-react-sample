import React from "react";
import "./App.css";
import AppUser from "./AppUser";
import { Jumbotron } from "react-bootstrap";

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
      userDiv = <AppUser user={user} key={i} />;
      userDivs.push(userDiv);
    }

    return (
      <div className="App">
        <Jumbotron>
          <table>
            <tbody>{userDivs}</tbody>
          </table>
        </Jumbotron>
      </div>
    );
  }
}

export default AppAllUsers;
