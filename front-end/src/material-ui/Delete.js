import React, { Component } from "react";
import { Container, Row, Col, Form, FormGroup, Label } from "reactstrap";
import axios from "axios";
import {
  Button,
  ListGroup,
  ListGroupItem,
  Table,
  Input,
  InputGroup,
  InputGroupAddon
} from "reactstrap";
import { Link } from "react-router-dom";

export default class Delete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      users: [],
      id: ""
    };
    this.onDelete = this.onDelete.bind(this);
  }

  componentDidMount() {
    this.fetchdata();
  }

  fetchdata() {
    axios.get("http://localhost:3001/").then(res => {
      this.setState({ users: res.data });
    });
  }

  handleChange = e => {
    // e.preventDefault();
    this.setState({ id: e.target.value });
    console.log(this.state.id);
    this.setState({ search: e.target.value });
    console.log(this.state.search);
  };
  onDelete(id) {
    axios
      .delete(`http://localhost:3001/delete/${id}`)
      .then(console.log("success"))
      .then(
        this.setState({
          users: this.state.users.filter(user => {
            return user.id !== id;
          })
        })
      )
      .then(console.log(this.state.users))
      .then(this.setState({ id: (this.state.id = "") }))
      .catch(err => console.log(err));
  }

  render() {
    let filteredSearch = this.state.users.filter(user => {
      return user.id.toString().indexOf(this.state.search) !== -1;
    });
    console.log(filteredSearch);
    return (
      <Container>
        {" "}
        <br />
        <div>
          {" "}
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <Form onSubmit={() => this.onDelete(this.state.id)}>
                <FormGroup row>
                  <InputGroup>
                    <Input
                      type="id"
                      name="id"
                      id="id"
                      placeholder="Search for id"
                      value={this.state.id}
                      onChange={this.handleChange}
                    />
                    <InputGroupAddon addonType="append">
                      <Button color="danger">Delete</Button>
                    </InputGroupAddon>
                  </InputGroup>
                </FormGroup>
              </Form>
            </Col>
          </Row>
        </div>
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
                  {filteredSearch.map(user => (
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
      </Container>
    );
  }
}
