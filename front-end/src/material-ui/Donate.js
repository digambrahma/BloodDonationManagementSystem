import React from "react";
import axios from "axios";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Modal,
  ModalBody,
  ModalFooter
} from "reactstrap";
import { Link } from "react-router-dom";

export default class DonateBlood extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      age: "",
      phonenumber: "",
      bloodgroup: "",
      address: "",
      modal: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      age: this.state.age,
      phonenumber: this.state.phonenumber,
      bloodgroup: this.state.bloodgroup,
      address: this.state.address
    };

    console.log(newUser);

    axios
      .post("http://localhost:3001/donate", newUser)
      .then(res => console.log(res.data))
      .catch(err => console.log(err.response.data));
    this.toggle();
    this.setState({
      name: "",
      email: "",
      age: "",
      phonenumber: "",
      bloodgroup: "",
      address: ""
    });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div style={{ padding: "30px" }}>
              <Form onSubmit={this.onSubmit}>
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
                      Donate Blood
                    </Button>
                  </Col>
                </Row>
              </Form>
              <br />
              <Link exact to="/update">
                <Row>
                  <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <Button color="warning" size="lg" block>
                      Update Donated Blood
                    </Button>
                  </Col>
                </Row>
              </Link>
              <br />
              <Link exact to="/delete">
                <Row>
                  <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <Button color="danger" size="lg" block>
                      Delete Donated Blood
                    </Button>
                  </Col>
                </Row>
              </Link>
            </div>
          </Col>
        </Row>

        <div>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
            color="success"
          >
            <ModalBody>
              You have Successfully registered for Blood Donation.
            </ModalBody>
            <ModalFooter>
              <Button color="success" onClick={this.toggle}>
                Okay
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </Container>
    );
  }
}
