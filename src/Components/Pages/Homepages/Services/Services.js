import React from 'react';
import { Box, Container, Grid, Typography } from "@mui/material";
import './Services.css';

const Services = () => {
    return (
        <Box  className="services-top-box">
            <Container>
                <Box className="top-container-box" container style={{ textAlign: "left" }}>
                    <h3 style={{ color: "#647589", marginBottom: "0" }}>
                        We are here for your care
                    </h3>
                    <h1 style={{ color: "#5357CA", fontSize: "3rem", marginTop: "0", marginBottom:'5rem' }}>Services</h1>

                    <Grid
                        spacing={{ xs: 0, md: 4 }}
                        columns={{ xs: 4, md: 4 }}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item xs={4} md={2}>
                            <Box>
                            <h4 style={{ color: "#F17732", textAlign: "left", marginBottom:'0' }}>
                            Healthcare Facilities
                            </h4>
                                <h1
                                    style={{
                                        color: "#E12454",
                                        fontSize: "50px",
                                        textAlign: "left",
                                        marginTop: "0",
                                    }}
                                >
                                Would you rather stay at home than go into a health care facility?
                                </h1>
                                
                            </Box>
                        </Grid>
                        <Grid item xs={4} md={2}>
                            <Box>
                                <Typography>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Reprehenderit qui nulla praesentium ratione, nostrum ipsum
                                        est. Illum ducimus natus repellat quia earum consequuntur
                                        minima, inventore ut animi architecto rem nihil itaque
                                        asperiores reiciendis accusantium veritatis labore quis
                                        possimus doloremque eaque ab culpa deleniti alias? At
                                        consequatur atque aperiam cum rem.
                                    </p>
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Services;