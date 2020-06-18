import React, { Component } from 'react';
import ContactForm from "../Contactform";
import './mainheader.css'
class Mainheader extends Component {
    state = {
        makevisible: false
    }
    maketovisible = () => {
        console.log("clicked");
        this.setState({ makevisible: true });
    }
    toclose = () => { this.setState({ makevisible: false }); }
    render() {
        let formfor;
        if (this.state.makevisible) {
            console.log("clicked");
            formfor = <ContactForm close={this.toclose} />;

        }
        return (
            <React.Fragment>
                <div className="bgimage">

                    <div className="adjustcontent">
                        <h2 className="headingsetting" >We Make Getting Your Property  </h2>
                        <p className="adjusthe">Sold, An Easy Process</p>
                        <button style={{ textAlign: 'center' }} onClick={this.maketovisible} className="btnsetting">Discover My Offer</button>
                        <br></br><br></br>
                        <p className="maketext">Committed to Quality, delivered with Class and Integrity.</p>
                    </div>          </div>

                {formfor}

            </React.Fragment>



        );
    }
}
export default Mainheader;