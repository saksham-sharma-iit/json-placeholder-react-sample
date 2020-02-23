import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Nav } from "react-bootstrap";
import AppAllUsers from "./AppAllUsers.js";
import AppPreNext from "./AppPreNext.js";
import AppAllPosts from "./AppAllPosts";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="AppStyle">
          <Nav activeKey="/">
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/posts">All Posts</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/users"> All users</Nav.Link>
            </Nav.Item>
          </Nav>
          <hr />
          <Switch>
            <Route exact path="/">
              <AppPreNext />
            </Route>
            <Route path="/posts">
              <AppAllPosts />
            </Route>
            <Route path="/users">
              <AppAllUsers />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
