import React, { Component } from "react";
import axios from "axios";

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    this.fetchdata();
  }

  fetchdata() {
    axios.get("http://localhost:3001/collect").then(res => {
      console.log(res.data);
      this.setState({ users: res.data });
    });
  }

  render() {
    return (
      <div>
        {this.state.users.map(user => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    );
  }
}

export default Result;
