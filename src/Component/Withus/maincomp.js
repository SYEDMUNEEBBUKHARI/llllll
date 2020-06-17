import React, { Component } from 'react';

import "./maincompo.css";
import { FiNavigation } from "react-icons/fi";
import Logo from "../../assets/logo.svg";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { FaFacebook, FaMobileAlt } from "react-icons/fa";

class MainComp extends Component {

    render() {

        return (
            <React.Fragment>
                <div className="bgc">
                    <div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className="setthehead">We'd love to help</div>
                        <p className="smalletter"><em>connect with us!</em></p>

                    </div>


                    <br></br>
                    <br></br>
                    <br></br>





                    <div className="card-group container">
                        <div className="card">
                            {/* <img className="card-img-top" src={Land1} alt="Card image cap" /> */}
                            <div className="Land1">

                                <div className="back1">
                                    <div className="card-img-top" style={{ paddingTop: '150px' }}>
                                        <FiNavigation className="navi" /><br></br><br></br>
                                        <a href="#" className="east">Homes@crownedestategroup.com</a>
                                    </div>
                                </div>
                            </div>

                        </div>






                        <div className="card">
                            {/* <img className="card-img-top" src={Land2} alt="Card image cap" /> */}
                            <div className="Land2">

                                <div className="back2">
                                    <div className="card-img-top" style={{ paddingTop: '150px' }}>
                                        <FaMobileAlt className="mob" />
                                        <br></br><br></br>
                                        <p className="east">(201) 581-3297 </p>
                                    </div>
                                </div>


                            </div>

                        </div>

                        <div className="card">
                            {/* <img className="card-img-top" src={Land3} alt="Card image cap" /> */}
                            <div className="Land3">
                                <div className="back1">
                                    <div className="card-img-top" style={{ paddingTop: '150px' }}>
                                        <a href="#">   <TiSocialYoutubeCircular className="navii" /></a> <a href="#"> <FaFacebook className="fb" /></a>
                                        <br></br><br></br>
                                        <p className="east">Find us on youtube and facebook </p>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>




                </div>

            </React.Fragment>




        );



    }




}
export default MainComp;
