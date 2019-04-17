import React from "react";
import axios from "axios";
import { Col, Form, FormGroup, Label, Input, Container, Row } from "reactstrap";
import { ListGroup, ListGroupItem, Table } from "reactstrap";
export default class CollectBlood extends React.Component {
  constructor() {
    super();
    this.state = {
      search: "",
      users: [],
      errors: {}
    };
    this.updateSearch = this.updateSearch.bind(this);
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

  updateSearch(e) {
    e.preventDefault();
    this.setState({ search: e.target.value });
  }

  render() {
    let filteredSearch = this.state.users.filter(user => {
      return (
        user.bloodgroup
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1
      );
    });
    return (
      <Container>
        <div>
          {" "}
          <br />
          <h1>Search for the Blood group</h1>
        </div>
        <Row>
          <Col>
            <div style={{ padding: "30px" }}>
              <Form>
                <FormGroup row>
                  <Label for="bloodgroup" sm={2}>
                    Bloodgroup
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="bloodgroup"
                      name="bloodgroup"
                      id="bloodgroup"
                      placeholder="bloodgroup"
                      value={this.state.bloodgroup}
                      onChange={this.updateSearch}
                    />
                  </Col>
                </FormGroup>
              </Form>
            </div>
          </Col>
        </Row>
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
