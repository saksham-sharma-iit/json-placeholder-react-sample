import React from "react";
import "./App.css";
import { Nav } from "react-bootstrap";

/**
 * send user as props
 */
class AppUser extends React.Component {
  render() {
    let user = this.props.user;
    return (
      <tr
        key={"userDiv:" + user.id}
        style={{ border: "solid 1px black", padding: 10 }}
      >
        <td>
          <i>{user.id}</i>
        </td>
        <td>
          {user.name} {"(" + user.username + ")"}
        </td>
        <td>{user.email}</td>
        <td>
          <Nav.Link href={"./#/posts?userId=" + user.id}>See Posts</Nav.Link>
        </td>
      </tr>
    );
  }
}

export default AppUser;
