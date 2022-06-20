import React from 'react';
import CountUp from 'react-countup';

import { Box, Container, Grid } from "@mui/material";

const SecondShortAbout = () => {
    return (
        <Container style={{marginBottom:'3rem'}}>
        <hr style={{ border: "1px solid #EAE7FF" }} />
        <Grid
            container
            spacing={{ xs: 2, md: 8 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            style={{ marginTop: "5rem" }}
        >
            <Grid item xs={4} sm={8} md={4}>
                <Box>
                    <img
                        src="https://medi-dove.netlify.app/img/counter/counter-icon-7.png"
                        alt="img not found"
                    />
                    <h1 style={{ fontSize: "3rem" }}><CountUp end={540} duration={5} />+</h1>
                    <h4 style={{ color: "#8FB569" }}>Expert Doctors</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut lab.
                    </p>
                </Box>
            </Grid>
            <Grid item xs={4} sm={8} md={4}>
                <Box>
                    <img
                        src="https://medi-dove.netlify.app/img/counter/counter-icon-83.png"
                        alt="img not found"
                    />
                    <h1 style={{ fontSize: "3rem" }}><CountUp end={899} duration={5} />+</h1>
                    <h4 style={{ color: "#8FB569" }}>Problem Solved</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut lab.
                    </p>
                </Box>
            </Grid>
            <Grid item xs={4} sm={8} md={4}>
                <Box>
                    <img
                        src="https://medi-dove.netlify.app/img/counter/counter-icon-9.png"
                        alt="img not found"
                    />
                    <h1 style={{ fontSize: "3rem" }}><CountUp end={40} duration={5} />+</h1>
                    <h4 style={{ color: "#8FB569" }}>Award Winner</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut lab.
                    </p>
                </Box>
            </Grid>
        </Grid>
    </Container>
    );
};

export default SecondShortAbout;