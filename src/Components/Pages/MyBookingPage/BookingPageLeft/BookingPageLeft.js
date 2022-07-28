import { Box, Button, Container, Grid } from "@mui/material";
import React from "react";
import "./BookingPageLeft.css";

const BookingPageLeft = () => {
    return (
        <Grid item xs={4} sm={8} md={4}>
            <Box
                class="patient-profile-card"
                style={{ textAlign: "center", margin: 0, padding: "0" }}
            >
                <Box class="profile-banner" style={{ textAlign: "center" }}>
                    <img
                        src="https://shreethemes.in/doctris/layouts/assets/images/bg/bg-profile.jpg"
                        class="img-fluid"
                        alt=""
                        width={"100%"}
                        height={"100px"}
                    />
                </Box>

                <Box
                    class="text-center avatar-profile margin-nagative mt-n5 position-relative pb-4 border-bottom"
                    style={{ position: "relative", top: "-50px" }}
                >
                    <img
                        src="https://shreethemes.in/doctris/layouts/assets/images/client/09.jpg"
                        class="rounded-circle shadow-md avatar avatar-md-md"
                        alt=""
                        width={"100px"}
                        height={"100px"}
                        style={{ margin: "0 auto", borderRadius: "50%" }}
                    />
                    <h3 style={{ color: "#E12454" }}>Christopher Burrell</h3>
                    <hr style={{ border: "1px solid #EAE7FF" }} />
                </Box>

                <div style={{ position: "relative", top: "-50px" }}>
                    <div style={{ margin: "20px", textAlign: "left" }}>
                        <div style={{ display: "flex" }}>
                            <h5 style={{ color: "#215AEE" }}>
                                <i class="fa-solid fa-user"></i>
                            </h5>
                            <h5 style={{ marginLeft: "10px" }}>Gender</h5>
                            <h5 style={{ marginLeft: "10px", color: "gray" }}>Female</h5>
                        </div>

                        <div style={{ display: "flex" }}>
                            <h5 style={{ color: "#215AEE" }}>
                                <i class="fa-solid fa-envelope"></i>
                            </h5>
                            <h5 style={{ marginLeft: "10px" }}>Email</h5>
                            <h5 style={{ marginLeft: "10px", color: "gray" }}>asd@efj</h5>
                        </div>

                        <div style={{ display: "flex" }}>
                            <h5 style={{ color: "#215AEE" }}>
                                <i class="fa-solid fa-book-open"></i>
                            </h5>
                            <h5 style={{ marginLeft: "10px" }}>Phone No.</h5>
                            <h5 style={{ marginLeft: "10px", color: "gray" }}>+(125) 458-8547</h5>
                        </div>

                        <div style={{ display: "flex" }}>
                            <h5 style={{ color: "#215AEE" }}>
                                <i class="fa-solid fa-italic"></i>
                            </h5>
                            <h5 style={{ marginLeft: "10px" }}>Address</h5>
                            <h5 style={{ marginLeft: "10px", color: "gray" }}>Sydney, Australia</h5>
                        </div>

                        <div style={{ display: "flex" }}>
                            <h5 style={{ color: "#215AEE" }}>
                                <i class="fa-solid fa-hand-holding-medical"></i>
                            </h5>
                            <h5 style={{ marginLeft: "10px" }}>Blood Group</h5>
                            <h5 style={{ marginLeft: "10px", color: "gray" }}>B +</h5>
                        </div>
                    </div>
                    <Button
                        size="small"
                        color="error"
                        style={{
                            cursor: "pointer",
                            color: "#F1386A",
                            borderColor: "#F1386A",
                        }}
                    >
                        Edit Profile
                    </Button>
                </div>
            </Box>
        </Grid>
    );
};

export default BookingPageLeft;
