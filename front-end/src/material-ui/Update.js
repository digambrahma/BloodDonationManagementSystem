import React, { Component } from "react";
import Axios from "axios";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  ListGroup,
  ListGroupItem,
  Table
} from "reactstrap";

export default class Update extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      age: "",
      phonenumber: "",
      bloodgroup: "",
      address: "",
      id: "",
      search: "",
      users: []
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.fetchdata();
  }

  fetchdata() {
    Axios.get("http://localhost:3001/").then(res => {
      this.setState({ users: res.data });
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit() {
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      age: this.state.age,
      phonenumber: this.state.phonenumber,
      bloodgroup: this.state.bloodgroup,
      address: this.state.address,
      id: this.state.id
    };

    console.log(newUser);

    Axios.put("http://localhost:3001/update", newUser)
      .then(res => console.log(res.data))
      .catch(err => console.log(err.response.data));

    this.setState({
      name: "",
      email: "",
      age: "",
      phonenumber: "",
      bloodgroup: "",
      address: "",
      id: "",
      search: ""
    });
  }
  handleChange = e => {
    // e.preventDefault();
    this.setState({ id: e.target.value });
    console.log(this.state.id);
    this.setState({ search: e.target.value });
    console.log(this.state.search);
  };

  render() {
    let filteredSearch = this.state.users.filter(user => {
      return user.id.toString().indexOf(this.state.search) !== -1;
    });
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <div style={{ padding: "30px" }}>
                <Form onSubmit={this.onSubmit}>
                  <FormGroup row>
                    <Label for="Name" sm={2}>
                      Search for id
                    </Label>
                    <Col sm={10}>
                      <Input
                        type="id"
                        name="id"
                        id="id"
                        placeholder="id"
                        value={this.state.id}
                        onChange={this.handleChange}
                        required
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="Name" sm={2}>
                      Name
                    </Label>
                    <Col sm={10}>
                      <Input
                        type="name"
                        name="name"
                        id="name"
                        placeholder="name"
                        value={this.state.name}
                        onChange={this.onChange}
                        required
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="exampleEmail" sm={2}>
                      Email
                    </Label>
                    <Col sm={10}>
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="email address"
                        value={this.state.email}
                        onChange={this.onChange}
                        required
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="age" sm={2}>
                      Age
                    </Label>
                    <Col sm={10}>
                      <Input
                        type="age"
                        name="age"
                        id="age"
                        placeholder="age"
                        value={this.state.age}
                        onChange={this.onChange}
                        required
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="phonenumber" sm={2}>
                      Phone number
                    </Label>
                    <Col sm={10}>
                      <Input
                        type="phonenumber"
                        name="phonenumber"
                        id="phonenumber"
                        placeholder="phonenumber"
                        value={this.state.phonenumber}
                        onChange={this.onChange}
                        required
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="bloodgroup" sm={2}>
                      Blood Group
                    </Label>
                    <Col sm={10}>
                      <Input
                        type="select"
                        name="bloodgroup"
                        id="bloodgroup"
                        value={this.state.bloodgroup}
                        onChange={this.onChange}
                        required
                      >
                        <option>Select</option>
                        <option>AB</option>
                        <option>AB+</option>
                        <option>O+</option>
                        <option>O-</option>
                        <option>A+</option>
                        <option>A-</option>
                        <option>B+</option>
                        <option>B-</option>
                      </Input>
                    </Col>
                  </FormGroup>{" "}
                  <FormGroup row>
                    <Label for="exampleText" sm={2}>
                      Address
                    </Label>
                    <Col sm={10}>
                      <Input
                        type="address"
                        name="address"
                        id="address"
                        value={this.state.address}
                        onChange={this.onChange}
                        required
                      />
                    </Col>
                  </FormGroup>
                  <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                      <Button color="primary" size="lg" block>
                        Update
                      </Button>
                    </Col>
                  </Row>
                </Form>
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
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
