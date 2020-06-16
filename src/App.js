import React, { Component } from 'react';
import WithUs from "../src/Component/Withus/Withusus";
import './App.css';
import Navbar from "./Component/Navbar/navbar"


import Mainheader from "./Component/mainheader/Mainheader"
import Cradview from "./Component/Card/pictureCard"
import Footer from "./Component/footer/footer"
import history from "./Services/history";
import { Router, Redirect } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import Aboutus from "./Component/AboutU/AboutUs"

class App extends Component {


  componentDidMount() {

  }
  render() {
    return (
      <Router history={history}>


        <React.Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/aboutus" component={Aboutus} />
            <Route path="/connectwithus" component={WithUs} />


          </Switch>
        </React.Fragment>


      </Router>

    );
  }
}

export default App;


const Home = () => (
  <React.Fragment>
    <Navbar />

    <Mainheader />
    <Cradview />
    <Footer />
  </React.Fragment>
);


