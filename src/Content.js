import React, { Component } from "react";
import Userlist from "./Userlist";
import { Select } from "./Select";

export default class Content extends Component {
  state = {
    filteredUsers: this.props.users
  };

  selectUser = ({ target }) => {
    this.setState({
      filteredUsers: this.props.users.filter(user =>
        user.age == target.value ? user : null
      )
    });
  };

  render() {
    let { users } = this.props;
    return (
      <div>
        <Select users={users} selectUser={this.selectUser} />
        <Userlist users={this.state.filteredUsers} />
      </div>
    );
  }
}
