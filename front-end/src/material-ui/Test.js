import React, { Component } from "react";
import axios from "axios";
import { ListGroup, ListGroupItem, Table } from "reactstrap";

class Test extends Component {
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
    axios.get("http://localhost:3001/").then(res => {
      console.log(res.data);
      this.setState({ users: res.data });
    });
  }

  render() {
    return (
      <div>
        <ListGroup>
          <ListGroupItem>
            {" "}
            <Table dark>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Age</th>
                  <th>Phonenumber</th>
                  <th>Bloodgroup</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map(user => (
                  <tr key={user.id}>
                    <td>{user.id} </td>
                    <td>{user.name} </td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td>{user.phonenumber}</td>
                    <td>{user.bloodgroup}</td>
                    <td>{user.address}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}

export default Test;
