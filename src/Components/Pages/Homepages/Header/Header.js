import React from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { Link } from "react-router-dom";
import './Header.css';
import { Button, Container } from '@mui/material';

const Header = () => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 12, md: 12 }}
            style={{ justifyContent: "conter" }}
            className="header-main-grid">
                
                    <Grid item xs={12} md={6}>
                        <Box container sx={{ textAlign: "left", width: "100%" }} className='header-left-box'>
                            <h6
                                style={{
                                    fontSize: "20px",
                                    fontWeight: "bolder",
                                    margin: "15px 0px",
                                    color: "#6C6FD5",
                                }}
                            >
                                We Provide All Health Care Solution
                            </h6>
                            <h1
                                style={{
                                    fontSize: "45px",
                                    fontWeight: "bolder",
                                    position: "relative",
                                    margin: "0",
                                    color: "#1F2278",
                                }}
                            >
                                Protect Your Health And <br />
                                Take Care To Of Your <br />
                                Health
                            </h1>
                            <Link to="about">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    style={{
                                        margin: "15px 0px",
                                        padding: "15px 30px",
                                        fontSize: "15px",
                                        backgroundColor: "#F17732",
                                        color: "#FEF3ED",
                                        fontWeight: "bolder",
                                        cursor: "pointer",
                                        textTransform: "none",
                                    }}
                                >
                                    Read More
                                </Button>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box style={{ position: "relative" }} className='header-right-box'>
                            <img
                                src="https://meditro.themetrades.com/react/static/media/doctor.7c2bc96d.png"
                                width={"470px"}
                                alt="img not found"
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Header;