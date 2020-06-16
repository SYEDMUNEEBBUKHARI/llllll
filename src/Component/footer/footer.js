import React, { Component } from 'react';
import "./footer.css"
import { AiOutlineCopyrightCircle } from "react-icons/ai"
class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="bgcolor">
                    <br></br>
                    <li> <AiOutlineCopyrightCircle style={{ color: 'white' }} /> 2020 by Crowned Estate Group.</li>
                    <li>  Serving homeowners in New Jersey, New York and Florida</li>
                    <li>  Connect with us on Facebook & Instagram</li>
                    <br></br>
                </div>
            </React.Fragment>
        );

    }



}

export default Footer;