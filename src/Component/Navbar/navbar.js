import React, { Component } from 'react';
import "./navbar.css";
import { Navbar, NavDropdown, Nav, Image } from "react-bootstrap";
import Logo from "../../assets/index.jpeg";
import { TiThMenu } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai"
import { Redirect } from "react-router-dom"
class Navbarweb extends Component {
    state = {
        changeicon: false,
        about: false,
        withus: false

    }
    changeiconfrom = () => {
        this.setState((prevstate) => {
            return { changeicon: !prevstate.changeicon };
        });
    }
    movetoabout = () => {
        this.setState({ about: true });
    }
    moveto = () => {
        this.setState({ withus: true });
    }
    render() {
        let alignthe = 'collapse navbar-collapse text-center';
        let icon;
        if (this.state.changeicon) {
            icon = <AiOutlineClose style={{ color: 'white' }} />;
            alignthe = 'collapse navbar-collapse text-center bgimageshow'
        }
        else {
            icon = <TiThMenu style={{ color: 'white' }} />;
        }
        if (this.state.about) {
            return <Redirect to='/aboutus' />
        }
        if (this.state.withus) {
            return <Redirect to='/connectwithus' />
        }
        return (
            <React.Fragment>

                <nav className="navbar navbar-expand-sm ">
                    <div className="container">
                        <a href="#" ><img className="adjustlogo" src={Logo} /></a>


                        <button onClick={() => this.changeiconfrom()} className="navbar-toggler" data-toggle="collapse" data-target="#navbaraid">
                            <span >
                                {icon}
                            </span>
                        </button>

                        <div className="collapse navbar-collapse text-center" id="navbaraid">

                            <ul className=" navbar-nav ml-auto">
                                <li className="nav-item "><a href="/" className="nav-link fontsetting">HOME</a></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <li className="nav-item"><a href="/aboutus" style={{ cursor: 'pointer' }} onClick={() => { this.movetoabout() }} className="nav-link fontsetting">ABOUT US</a></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <li className="nav-item"><a href="/connectwithus" style={{ cursor: 'pointer' }} onClick={() => { this.moveto() }} className="nav-link fontsetting">CONNECT WITH US</a></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </ul>
                        </div>



                    </div>
                </nav>

            </React.Fragment >
        );
    }


}
export default Navbarweb;