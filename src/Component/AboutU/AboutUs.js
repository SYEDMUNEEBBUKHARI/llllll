import React, { Component } from "react";
import Navbar from "../Navbar/navbar";
import Footer from "../footer/footer";
import About from "./About";
class AboutUS extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <About />
                <Footer />
            </React.Fragment>
        );
    }


}
export default AboutUS;