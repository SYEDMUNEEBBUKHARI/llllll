import React, { Component } from 'react';
import Land1 from "../../assets/c.jpg";
import Land3 from "../../assets/maxresdefault.jpg";
import Land2 from "../../assets/hassold.jpg";
import { Card, Col, Container, CardGroup, Row } from 'react-bootstrap'
import Logo from "../../assets/index.jpeg";
import { TiTick } from "react-icons/ti"
import { MdClose } from "react-icons/md"
import "./Cardd.css"
class Cardview extends Component {
    render() {
        return (


            <div className="makedark">
                {/* <header className="App-header">
        <img src={logoo} className="App-logo" alt="logo" /> 
         
       </header> */}
                <br></br>
                <br></br>
                <p className="cardhead" >An Easy Process</p>

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
                                <p className=" cardtitlee">Contact Us</p>

                                <span>
                                    TODAY Tell us about your property and we will begin  </span><span style={{ textAlign: 'center' }}> crafting a great offer </span><p style={{ textAlign: 'center' }}> for you.</p>


                            </Card.Body>
                        </Card>{" "}
          &nbsp; &nbsp; &nbsp; &nbsp;
          <Card className=" overflow ml-sm-2 text-center">
                            <Card.Img varient="top" src={Land3} className="card-img-top" />
                            <Card.Body>
                                <p className=" cardtitlee">
                                    Get Offer
              </p>

                                <Card.Text>
                                    Get the market price you derserve for
                                    <span style={{ textAlign: 'center' }}> your property in as little as</span>
                                    <p style={{ textAlign: 'center' }}> 24 hours.</p>

                                </Card.Text>
                            </Card.Body>
                        </Card>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <Card className="overflow ml-sm-2 text-center">
                            <Card.Img varient="top" src={Land2} className="card-img-top text-center " />
                            <Card.Body>
                                <p className=" cardtitlee">
                                    Freedom!
              </p>

                                <Card.Text>
                                    Get the CASH you need now! You do NOT have to wait 6 – 12 months
                                <p style={{ textAlign: 'center' }}>to get your property sold.</p>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>

                </Container>
                <br></br><br></br>
                <div className="text-center ">
                    <span className="ltrspc">WHY YOU SHOULD WORK</span>
                    <p className="ltrspc"> WITH QPG?</p>
                </div>
                <br></br>
                <br></br>
                <div class="container text-center">
                    <div class="row">
                        <div class="col-sm-2 col-md-2">

                        </div>
                        <div class="col-sm-4 col-md-4">

                            <li><img className="adjustlogo" src={Logo} /></li>
                            <br></br>


                            <li><TiTick className="makeGREEN" />FREE offer in under 24 hours</li>
                            <li><TiTick className="makeGREEN" />No realtor commissions</li>
                            <li> <TiTick className="makeGREEN" />No showings</li>
                            <li> <TiTick className="makeGREEN" />No closing costs </li>

                            <li><TiTick className="makeGREEN" />We’ll Buy Your Property “AS-IS” No repairs needed No upgrade costs

                            </li>



                        </div>
                        <div class="col-sm-4 col-md-4">

                            <li className="adjusttrad">Traditional Sale</li>
                            <br></br>



                            <li ><MdClose className="makered" />No guaranteed sale date</li>
                            <li><MdClose className="makered" />High commisions </li>
                            <li><MdClose className="makered" />Inconvenient showings</li>
                            <li><MdClose className="makered" />Costly repairs</li>
                            <li><MdClose className="makered" />Expensive upgrades</li>

                        </div>
                        <div class="col-sm-2 col-md-2">

                        </div>
                    </div>
                </div>
                <br></br><br></br>
                <div style={{ textAlign: 'center' }}>   <button className="btnsetting">Discover My Offer</button>
                </div>
                <br></br><br></br>
            </div >

        );
    }


}

export default Cardview;