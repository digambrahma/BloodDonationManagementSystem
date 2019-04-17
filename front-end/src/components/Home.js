import React, { Component } from "react";
import Test from "../material-ui/Test";
import { Jumbotron } from "reactstrap";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h3 className="display-3">
            Blood Donation will save someone's life!
          </h3>
          <img
            src="https://images.pexels.com/photos/1409716/pexels-photo-1409716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            width="100%"
            height="100%"
          />
        </Jumbotron>
        <h2>Some of our donors</h2>
        <Test />
      </div>
    );
  }
}
