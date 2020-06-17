import React, { Component } from "react";
import Navbar from "../Navbar/navbar";
import Footer from "../footer/footer";
import "./About.css"
class About extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="bimage">
                    <div className="container containe setaboutus" style={{ backgroundColor: 'black' }}>

                        <br></br> <br></br>  <br></br> <br></br>  <p className="incsize">About Us</p>
                        <p className="makedim">  YOU NAME IT. WE BUY IT.</p><br></br>
                        <div className="work">
                            <li>   We are Crowned Estate Group and  </li>



                            <li>    we buy houses! </li>
                            <br></br>

                            <li>   Single Family Homes </li>
                            <li>Land</li>
                            <li>   Multi - Family Homes</li >

                            <li>     Condos / Townhomes</li >

                            <li>   Commercial Properties</li >
                            <li>
                                And more!</li >

                            <br></br><br></br>

                            <li> We will offer you top dollar for your </li><li>property and we will work on YOUR </li > <li> timeline! No agent commissions, no costly </li><li>repairs, and no waiting around. You will be  </li >  <li>satisfied with our service guaranteed.</li><li>What are you waiting for? Get your free, no</li><li> hassle cash offer today!</li >

                        </div></div>
                </div>
            </React.Fragment>
        );
    }


}
export default About;