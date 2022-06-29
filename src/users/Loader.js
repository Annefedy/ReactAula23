import React from "react";
import User from "./User";

export default class Loader extends React.Component {
  constructor() {
    super();

    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((user) => this.setState({ user }));
  }

  render() {
    return this.state.user.name === undefined ? (
      <div>Loading...</div>
    ) : (
      <User user={this.state.user} />
    );
  }
}
