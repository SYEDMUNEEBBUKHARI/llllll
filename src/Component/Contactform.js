import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Modal, Button, Form, Col } from "react-bootstrap";

import { MdPerson } from "react-icons/md";




import "./contactform.css"

class ContactForm extends Component {
    SubmitData55 = this.SubmitData55.bind(this);

    state = {
        showsign: true,
        Zip: "",
        State: "",
        Address: "",
        Phone: "",
        FName: "",
        LName: "",
        Email: ""

    };
    componentDidMount() {


    }


    updateAddress = (e) => {
        e.preventDefault();
        const { Address, value } = e.target;
        console.log("Address", Address);
        console.log("value", value);
        this.setState({ Address: e.target.value });
    };
    updateEmail = (e) => {
        e.preventDefault();
        const { Email, value } = e.target;

        console.log("value", value);
        this.setState({ Email: e.target.value });
    };
    updateZip = (e) => {
        e.preventDefault();
        const { Zip, value } = e.target;

        console.log("value", value);
        this.setState({ Zip: e.target.value });
    };
    updateFName = (e) => {
        e.preventDefault();
        const { FName, value } = e.target;

        console.log("value", value);
        this.setState({ FName: e.target.value });

    };
    updateLName = (e) => {
        e.preventDefault();
        const { LName, value } = e.target;

        console.log("value", value);
        this.setState({ LName: e.target.value });
    };
    updateState = (e) => {
        e.preventDefault();
        const { State, value } = e.target;

        console.log("value", value);
        this.setState({ State: e.target.value });
    };
    updatePhone = (e) => {
        e.preventDefault();
        const { Phone, value } = e.target;

        console.log("value", value);
        this.setState({ Phone: e.target.value });
    };




    handelsubmit = (event) => {
        event.preventDefault();


    };

    handelchange = (e) => {

    };


    handleRegister = () => {

    };

    SubmitData55(e) {
        e.preventDefault();


    }
    handelhide = () => {
        this.setState({ showsign: false });
        this.props.close();
    }
    close = () => {
        this.setState({ errflag: false });
    };

    render() {




        return (
            <React.Fragment>



                <Modal show={this.state.showsign} className="setLogin" animation={false} onHide={this.handelhide}>
                    <Modal.Header bsPrefix="modal-header " className="signup2 d-block">
                        <Modal.Title className="signup2">
                            <MdPerson className="signup2" /> Contact Information
            </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <span style={{ color: "grey", textAlign: 'center' }}>To get your offer, please take the time to fill out the information below.</span>
                        <br></br>
                        <Form
                            onSubmit={this.SubmitData55}
                            id="myForm"
                            className="form"
                            ref={(form) => (this.messageForm = form)}
                        >
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        value={this.state.FName}
                                        onChange={this.updateFName.bind(this)}
                                        placeholder="Enter First Name"
                                    />
                                </Form.Group>

                                <Form.Group as={Col} controlId="LName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        value={this.state.LName}
                                        placeholder="Image"
                                        onChange={this.updateLName.bind(this)}
                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        value={this.state.Email}
                                        onChange={this.updateEmail.bind(this)}
                                        placeholder="Enter email"
                                    />
                                </Form.Group>


                            </Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control

                                    value={this.state.Phone}
                                    onChange={this.updatePhone.bind(this)}
                                    placeholder="Enter PhoneNo"
                                />
                            </Form.Group>
                            <Form.Row>

                            </Form.Row>
                            <Form.Group as={Col} controlId="formGridAddress1">
                                <Form.Label>Propert Address & City</Form.Label>
                                <Form.Control
                                    value={this.state.Address}
                                    onChange={this.updateAddress.bind(this)}
                                    placeholder="1234 Main St"
                                />
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col} controlId="State">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control
                                        placeholder=""
                                        value={this.state.State}
                                        onChange={this.updateState.bind(this)}
                                    />
                                </Form.Group>

                            </Form.Row>
                            <Form.Row>
                                <Form.Group controlId="formGridCity">
                                    <Form.Label>Zip code</Form.Label>
                                    <Form.Control
                                        value={this.state.Zip}
                                        onChange={this.updateZip.bind(this)}
                                        placeholder=""
                                    />
                                </Form.Group>

                            </Form.Row>
                            <button

                                className="chkbtn"
                                type="submit"

                            >
                                Submit
              </button>
                        </Form>


                    </Modal.Body>
                    <Modal.Footer>
                        <button
                            variant="secondary"
                            onClick={
                                this.props.close
                            }
                            className="chkbtn"
                        >
                            Close
            </button>
                    </Modal.Footer>
                </Modal>

            </React.Fragment>
        );
    }
}

export default ContactForm;
