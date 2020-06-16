import React, { Component } from 'react';
import Navbar from "../Navbar/navbar"
import Footer from "../footer/footer"
import { Nav } from 'react-bootstrap';
import Mapcom from "./mapcomp";
import MainComp from "./maincomp";
class ConnectwithUs extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <MainComp />
                <Mapcom />
                <Footer />

            </React.Fragment>


        );

    }

}
export default ConnectwithUs;