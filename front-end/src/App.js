import React, { Component } from "react";
import MyNav from "./material-ui/Navbar";
import CollectBlood from "./material-ui/CollectBlood";
import "./App.css";
import DonateBlood from "./material-ui/Donate";
import Home from "./components/Home";
import Delete from "./material-ui/Delete";
import Update from "./material-ui/Update";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <MyNav />

          <Route exact path="/" component={Home} />
          <Route exact path="/donate" component={DonateBlood} />
          <Route exact path="/collect" component={CollectBlood} />
          <Route exact path="/delete" component={Delete} />
          <Route exact path="/update" component={Update} />
        </div>
      </Router>
    );
  }
}

export default App;
