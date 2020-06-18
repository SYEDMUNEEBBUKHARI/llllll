import React, { Component } from "react";
import "./mapcom.css";
import { TiLocationOutline } from "react-icons/ti";
class Mapcom extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="mapicolor">
                    <div className="hoc container">
                        <div className=" card-group bgmap ">
                            <div className="mapcolor ">
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <div className="maintitlefor">Quintessential Property Group is currently</div>
                                <div className="minarrange">servicing the following areas:</div>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <div className="row container">
                                    <div className="col-md-4 col-sm-1 adjli">
                                        <b style={{ textAlign: "center" }} className="sizeadjust" >New Jersey</b>
                                        <li>  <TiLocationOutline className="makeblu" />Bergen</li>
                                        <li> <TiLocationOutline className="makeblu" />Passaic</li>
                                        <li> <TiLocationOutline className="makeblu" />Essex </li>
                                        <li> <TiLocationOutline className="makeblu" />Hudson</li>
                                        <li> <TiLocationOutline className="makeblu" />Ocean</li>

                                    </div>
                                    <div className="col-md-4 col-sm-1 adjli">
                                        <b style={{ textAlign: "center" }} className="sizeadjust">New York</b>
                                        <li> <TiLocationOutline className="makeblu" />Rockland </li>
                                        <li> <TiLocationOutline className="makeblu" />Westchester</li>

                                    </div>
                                    <div className="col-md-4 col-sm-1 adjli">
                                        <b style={{ textAlign: "center" }} className="sizeadjust">Florida</b>
                                        <li> <TiLocationOutline className="makeblu" />Tampa</li>
                                        <li> <TiLocationOutline className="makeblu" />Miami</li>
                                        <li> <TiLocationOutline className="makeblu" />Port St. Lucie</li>

                                    </div>

                                </div>
                                <br></br>
                                <div style={{ textAlign: 'center' }} className="maintitlefor">We look foward to helping homeowners in more </div>
                                <div style={{ textAlign: 'center' }} className="minarrange">cities soon - sell your house fast!</div>
                            </div>
                            <br></br>

                        </div>


                    </div>



                </div>
            </React.Fragment>



        );

    }


}

export default Mapcom;