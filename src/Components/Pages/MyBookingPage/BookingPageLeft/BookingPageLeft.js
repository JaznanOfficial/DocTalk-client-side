import { Box, Container, Grid } from "@mui/material";
import React from "react";
import "./BookingPageLeft.css";

const BookingPageLeft = () => {
    return (
        <Grid item xs={4} sm={8} md={4}>
            <Box class="patient-profile-card" style={{ textAlign: "center" }}>
                <Box class="profile-banner" style={{ textAlign: "center" }}>
                    <img
                        src="https://shreethemes.in/doctris/layouts/assets/images/bg/bg-profile.jpg"
                        class="img-fluid"
                        alt=""
                        width={"100%"}
                        height={"100px"}
                    />
                </Box>

                <Box class="text-center avatar-profile margin-nagative mt-n5 position-relative pb-4 border-bottom">
                    <img
                        src="https://shreethemes.in/doctris/layouts/assets/images/client/09.jpg"
                        class="rounded-circle shadow-md avatar avatar-md-md"
                        alt=""
                        width={"100px"}
                        height={"100px"}
                        style={{ margin: "0 auto", borderRadius: "50%" }}
                    />
                    <h5 class="mt-3 mb-1">Christopher Burrell</h5>
                    <p class="text-muted mb-0">25 Years old</p>
                </Box>

                <div class="list-unstyled p-4">
                    <div class="progress-box mb-4">
                        <h6 class="title">Complete your profile</h6>
                        <div class="progress">
                            <div
                                class="progress-bar position-relative bg-primary"
                                style={{ width: "89%" }}
                            >
                                <div class="progress-value d-block text-muted h6">89%</div>
                            </div>
                        </div>
                    </div>

                    <div class="d-flex align-items-center mt-2">
                        <i class="uil uil-user align-text-bottom text-primary h5 mb-0 me-2"></i>
                        <h6 class="mb-0">Gender</h6>
                        <p class="text-muted mb-0 ms-2">Female</p>
                    </div>

                    <div class="d-flex align-items-center mt-2">
                        <i class="uil uil-envelope align-text-bottom text-primary h5 mb-0 me-2"></i>
                        <h6 class="mb-0">Birthday</h6>
                        <p class="text-muted mb-0 ms-2">19th January 1995</p>
                    </div>

                    <div class="d-flex align-items-center mt-2">
                        <i class="uil uil-book-open align-text-bottom text-primary h5 mb-0 me-2"></i>
                        <h6 class="mb-0">Phone No.</h6>
                        <p class="text-muted mb-0 ms-2">+(125) 458-8547</p>
                    </div>

                    <div class="d-flex align-items-center mt-2">
                        <i class="uil uil-italic align-text-bottom text-primary h5 mb-0 me-2"></i>
                        <h6 class="mb-0">Address</h6>
                        <p class="text-muted mb-0 ms-2">Sydney, Australia</p>
                    </div>

                    <div class="d-flex align-items-center mt-2">
                        <i class="uil uil-medical-drip align-text-bottom text-primary h5 mb-0 me-2"></i>
                        <h6 class="mb-0">Blood Group</h6>
                        <p class="text-muted mb-0 ms-2">B +</p>
                    </div>
                </div>
            </Box>
        </Grid>
    );
};

export default BookingPageLeft;
