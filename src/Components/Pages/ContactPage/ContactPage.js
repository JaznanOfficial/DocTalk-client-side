import { Box, Container, Grid } from "@mui/material";
import React from "react";
import "./ContactPage.css";

const ContactPage = () => {
    return (
        <div style={{marginBottom:'5rem'}}>
            <Box className="about-top">
                <Container style={{ paddingTop: "30px" }}>
                    <h1 style={{ textAlign: "left", marginBottom: "0", color: "#E12454" }}>
                        We're here for your care
                    </h1>
                    <h1
                        className="about-h1"
                        style={{
                            marginTop: "0",
                            paddingTop: "0",
                            textAlign: "left",
                            fontSize: "10rem",
                            color: "#5357CA",
                        }}
                    >
                        Contact
                    </h1>
                </Container>
            </Box>
            <Container className="contact-content">
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={4} sm={8} md={6}>
                        <div
                            className="left w-100 mx-3"
                            style={{ width: "100%", margin: "auto 20px", textAlign: "left" }}
                        >
                            <div style={{textAlign:'center', marginRight:'30px'}}>
                            <div className="text">Get in Touch</div>
                            {/* <p style={{fontWeight:'bolder', color:'#F27732'}}>
                                In any purpose you can contact with Us
                            </p> */}
                            </div>
                            <div className="icons ms-3 text-start">
                                <div className="row-icon">
                                    <div>
                                        <i className="fas fa-user"></i>
                                    </div>
                                    <div className="info">
                                        <div className="head">Name</div>
                                        <div className="sub-title">Ace Of Science</div>
                                    </div>
                                </div>
                                <div className="row-icon">
                                    <div>
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div className="info">
                                        <div className="head">Address</div>
                                        <div className="sub-title">Chittagong, Bangladesh</div>
                                    </div>
                                </div>
                                <div className="row-icon">
                                    <div>
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div className="info">
                                        <div className="head">Email</div>
                                        <div className="sub-title">dev.aceofscience@gmail.com</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={4} sm={8} md={6}>
                        <div className="column right w-100 mx-3">
                            <div className="text">Message us</div>
                            <form action="#" style={{marginTop:'30px'}}>
                                <div className="fields">
                                    <div className="field name">
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            name="name"
                                            required
                                        />
                                    </div>
                                    <div className="field email">
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            name="email"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <input
                                        type="text"
                                        placeholder="Subject"
                                        name="subject"
                                        required
                                    />
                                </div>
                                <div className="field textarea">
                                    <textarea
                                        cols="30"
                                        rows="10"
                                        placeholder="Message.."
                                        name="message"
                                        required
                                    ></textarea>
                                </div>
                                <div className="button-area">
                                    <button type="submit">Send message</button>
                                </div>
                            </form>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default ContactPage;
