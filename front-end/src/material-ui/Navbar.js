import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  NavLink
} from "reactstrap";
import { Link } from "react-router-dom";

export default class MyNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <Link exact to="/">
            <NavbarBrand>Blood Donation Management System</NavbarBrand>
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link exact to="/collect">
                  <Button color="warning">I want Blood</Button>{" "}
                </Link>
                <Link exact to="/donate">
                  <Button color="danger">Donate Blood</Button>{" "}
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

{
  /* <Link to="/about/">About</Link> */
}
