import { Box, Container, Grid } from "@mui/material";
import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
    return (
        <Box classname="about-page" style={{ marginTop: "0" }}>
            <Box className="about-top">
                <Container style={{ paddingTop: "30px" }}>
                    <h1 style={{ textAlign: "left", marginBottom: "0", color: "#E12454" }}>
                        We're here for your care
                    </h1>
                    <h1 className="about-h1"
                        style={{
                            marginTop: "0",
                            paddingTop: "0",
                            textAlign: "left",
                            fontSize: "10rem",
                            color: "#5357CA",
                        }}
                    >
                        About
                    </h1>
                </Container>
            </Box>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={4} sm={4} md={6}>
                        <div className='about-left'>
                            <img
                                src="https://medi-dove.netlify.app/img/about/about-img.jpg"
                                alt="img not found"
                            />
                        </div>
                    </Grid>
                    <Grid item xs={4} sm={4} md={6}>
                        <div style={{ textAlign: "left" }}>
                            <h3 style={{ color: "#648694" }}>About us</h3>
                            <h1 style={{ fontSize: "60px", color: "#223645" }}>
                                Short Story About DocTalk.
                            </h1>
                            <p>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia.
                            </p>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <div>
                                    <img
                                        src="https://medi-dove.netlify.app/img/about/destination-icon-1.png"
                                        alt="doctor icon"
                                    />
                                </div>
                                <div style={{marginLeft:'20px'}}>
                                    <h3>Our Mission</h3>
                                    <p>
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                        irure dolor in reprehenderit in voluptate velit esse.
                                    </p>
                                </div>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <div>
                                    <img
                                        src="https://medi-dove.netlify.app/img/about/destination-icon-2.png"
                                        alt="doctor icon"
                                    />
                                </div>
                                <div style={{ marginLeft: '20px' }}>
                                    <h3>Our Vission</h3>
                                    <p>
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                        irure dolor in reprehenderit in voluptate velit esse.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AboutPage;
