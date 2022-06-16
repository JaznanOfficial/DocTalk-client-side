import React from "react";

import { Box, Container, Grid } from "@mui/material";
import "./Footer.css";
import logo from "../../../../images/logo.png";
import afterHeader from "../../../../images/footre-after-title.png";

const Footer = () => {
    return (
        <Box className="footer">
            <Container>
                <Grid
                    container
                    spacing={{ xs: 2, md: 12 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                    style={{ marginTop: "0", paddingBottom: "2rem" }}
                >
                    <Grid item xs={4} sm={4} md={4}>
                        <Box style={{ textAlign: "center" }}>
                            <img src={logo} alt="img not found" width={"200px"} heigt={"100px"} />
                            <p
                                style={{
                                    fontSize: "1rem",
                                    textAlign: "justify",
                                    fontWeight: "500",
                                }}
                            >
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Repudiandae hic dolor mollitia inventore animi, temporibus error
                                iure ab accusamus. Harum, cum impedit. Illo, unde. Explicabo officia
                                asperiores aliquam dolor et.
                            </p>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <h1>
                                    <i
                                        className="fa-solid fa-phone"
                                        style={{
                                            width: "50px",
                                            color: "white",
                                            backgroundColor: "#F17732",
                                            padding: "10px",
                                            borderRadius: "50% 50% 0px 50%",
                                            marginRight: "10px",
                                        }}
                                    ></i>
                                </h1>
                                <div>
                                    <h4
                                        style={{
                                            marginBottom: "0",
                                            textAlign: "left",
                                            color: "#F17732",
                                        }}
                                    >
                                        Contact Us
                                    </h4>
                                    <h2
                                        style={{
                                            marginTop: "2px",
                                            textAlign: "left",
                                            color: "#1F2278",
                                        }}
                                    >
                                        +880 123 456 78
                                    </h2>
                                </div>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                        <Box style={{ textAlign: "center" }}>
                            <h1 className="footer-h1" style={{ textAlign: "center" }}>
                                Quick Links
                            </h1>
                            <img src={afterHeader} alt="" />
                            <p style={{ textAlign: "center", fontSize: "1.5rem" }}>
                                About us <br />
                                Our Doctors <br />
                                Booking <br />
                                Blog <br />
                                Faq's <br />
                            </p>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                        <Box style={{ textAlign: "center" }}>
                            <h1 className="footer-h1">Our Services</h1>
                            <img src={afterHeader} alt="" />
                            <p style={{ textAlign: "center", fontSize: "1.5rem" }}>
                                Dental Care <br />
                                Cardiac <br />
                                Massege Therapy <br />
                                Diagonosis <br />
                                Surgery <br />
                                Ambulance <br />
                            </p>
                        </Box>
                    </Grid>
                </Grid>
                <hr style={{ border: "1px solid #EAE7FF" }} />
                <h3>
                    Copyright © 2022 resurved. Design & Developed by{" "}
                    <a
                        style={{ color: "#1F2278" }}
                        href="https://www.linkedin.com/in/jaznanofficial/"
                    >
                        Md Abdur Rahman
                    </a>
                </h3>
            </Container>
        </Box>
    );
};

export default Footer;