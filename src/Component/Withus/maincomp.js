import React, { Component } from 'react';

import "./maincompo.css";
import { FiNavigation } from "react-icons/fi";
import Logo from "../../assets/logo.svg";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { FaFacebook, FaMobileAlt } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import Insta from "../../assets/insu.png";
import Fba from "../../assets/fba.png";
import Youtu from "../../assets/youtu.png";

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
                                        <a href="#" className="east">qpg.realestate@gmail.com</a>
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
                                        <p className="east">(201)-565-3336 </p>
                                    </div>
                                </div>


                            </div>

                        </div>

                        <div className="card">
                            {/* <img className="card-img-top" src={Land3} alt="Card image cap" /> */}
                            <div className="Land3">
                                <div className="back1">
                                    <div className="card-img-top" style={{ paddingTop: '150px' }}>
                                        <a href="https://www.instagram.com/qpg_realty/"> <img src={Insta} style={{ height: '60px' }} />  </a> <a href="#"> <img src={Fba} style={{ height: '60px' }} /></a><a href="#"> <img src={Youtu} style={{ height: '60px' }} /></a>
                                        <br></br><br></br>
                                        <p className="east">Find us on Instagram, facebook & Youtube </p>
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
