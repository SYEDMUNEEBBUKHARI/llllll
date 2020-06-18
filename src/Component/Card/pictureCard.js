import React, { Component } from 'react';
import Land1 from "../../assets/c.jpg";
import Land3 from "../../assets/maxresdefault.jpg";
import Land2 from "../../assets/hassold.jpg";
import { Card, Col, Container, CardGroup, Row } from 'react-bootstrap'
import Logo from "../../assets/index.jpeg";
import { TiTick } from "react-icons/ti"
import { MdClose } from "react-icons/md"
import "./Cardd.css"
import ContactForm from "../Contactform";
class Cardview extends Component {

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


            <div className="makedark">
                {/* <header className="App-header">
        <img src={logoo} className="App-logo" alt="logo" /> 
         
       </header> */}
                <br></br>
                <br></br>
                <div className="cardhead" >An Easy Process</div>

                <Row className="mt-5">
                    <Col sm={3}></Col>
                    <Col sm={3}></Col>
                </Row>
                <Row>
                    <Col sm={1}></Col>
                    <Col sm={10}></Col>
                    <Col sm={1}></Col>
                </Row>

                <Container>
                    <CardGroup className="mt-sm-3">
                        <Card className="overflow ml-sm-2 text-center">
                            <Card.Img varient="top" src={Land1} className=" card-img-top " />
                            <Card.Body>
                                <div className=" cardtitlee">Contact Us</div>

                                <div>
                                    TODAY Tell us about your property and we will begin crafting a great offer </div><div style={{ textAlign: 'center' }}>  </div><div style={{ textAlign: 'center' }}> for you.</div>

                                <p></p>
                            </Card.Body>
                        </Card>{" "}
          &nbsp; &nbsp; &nbsp; &nbsp;
          <Card className=" overflow ml-sm-2 text-center">
                            <Card.Img varient="top" src={Land3} className="card-img-top" />
                            <Card.Body>
                                <div className=" cardtitlee">
                                    Get Offer
              </div>

                                <div>
                                    Get the market price you derserve for
                                    <div style={{ textAlign: 'center' }}> your property in as little as</div>
                                    <div style={{ textAlign: 'center' }}> 24 hours.</div>

                                </div>
                            </Card.Body>
                        </Card>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <Card className="overflow ml-sm-2 text-center">
                            <Card.Img varient="top" src={Land2} className="card-img-top text-center " />
                            <Card.Body>
                                <div className=" cardtitlee">
                                    Freedom!
              </div>

                                <div>
                                    Get the CASH you need now! You do NOT have to wait 6 – 12 months
                                <div style={{ textAlign: 'center' }}>to get your property sold.</div>

                                </div>
                            </Card.Body>
                        </Card>
                    </CardGroup>

                </Container>
                <br></br><br></br>
                <div className="text-center ">
                    <span className="ltrspc">WHY YOU SHOULD WORK</span>
                    <div className="ltrspc"> WITH QPG?</div>
                </div>
                <br></br>
                <br></br>
                <div className="container text-center">
                    <div className="row">
                        <div className="col-sm-2 col-md-2">

                        </div>
                        <div className="col-sm-4 col-md-4">

                            <li><img className="adjustlogo" src={Logo} /></li>
                            <br></br>


                            <li><TiTick className="makeGREEN" />FREE offer in under 24 hours</li>
                            <li><TiTick className="makeGREEN" />No realtor commissions</li>
                            <li> <TiTick className="makeGREEN" />No showings</li>
                            <li> <TiTick className="makeGREEN" />No closing costs </li>

                            <li><TiTick className="makeGREEN" />We’ll Buy Your Property “AS-IS” No repairs needed No upgrade costs

                            </li>



                        </div>
                        <div className="col-sm-4 col-md-4">

                            <li className="adjusttrad">Traditional Sale</li>
                            <br></br>



                            <li ><MdClose className="makered" />No guaranteed sale date</li>
                            <li><MdClose className="makered" />High commisions </li>
                            <li><MdClose className="makered" />Inconvenient showings</li>
                            <li><MdClose className="makered" />Costly repairs</li>
                            <li><MdClose className="makered" />Expensive upgrades</li>

                        </div>
                        <div className="col-sm-2 col-md-2">

                        </div>
                    </div>
                </div>
                <br></br><br></br>
                <div style={{ textAlign: 'center' }}>   <button className="btnsetting" onClick={this.maketovisible} >Discover My Offer</button>
                </div>
                <br></br><br></br>
                {formfor}
            </div >

        );
    }


}

export default Cardview;