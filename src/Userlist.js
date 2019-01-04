import React, { Component } from "react";
import { User } from "./User";

export default class UserList extends Component {
  render() {
    let { users } = this.props;
    return users
      .sort(compare)
      .map(user => (
        <User name={user.name} key={user.id} id={user.id} age={user.age} />
      ));
  }
}

function compare(a, b) {
  // Use toUpperCase() to ignore character casing
  const genreA = a.name.toUpperCase();
  const genreB = b.name.toUpperCase();

  let comparison = 0;
  if (genreA > genreB) {
    comparison = 1;
  } else if (genreA < genreB) {
    comparison = -1;
  }
  return comparison;
}
