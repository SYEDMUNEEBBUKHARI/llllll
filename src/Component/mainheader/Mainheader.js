import React, { Component } from 'react';

import './mainheader.css'
class Mainheader extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="bgimage">

                    <div className="adjustcontent">
                        <h2 className="headingsetting" >Consider your home sold</h2>
                        <button style={{ textAlign: 'center' }} className="btnsetting">Discover My Offer</button>
                        <br></br><br></br>
                        <p className="maketext">Tell us about your home. Receive an offer. It's that simple.</p>
                    </div>          </div>



            </React.Fragment>



        );
    }
}
export default Mainheader;