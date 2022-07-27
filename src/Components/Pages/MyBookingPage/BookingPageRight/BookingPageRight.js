import { Box, Grid } from "@mui/material";
import React from "react";
import "./BookingPageRight.css";

const BookingPageRight = () => {
    return (
        <Grid item xs={4} sm={8} md={8}>
            <Box>
                <h2 style={{ color: "#E12454", textAlign: "left" }}>Booking List</h2>
                <Box class="booking-header">
                    <div style={{ width: "20%" }}>Id</div>
                    <div style={{ width: "20%" }}>Service Name</div>
                    <div style={{ width: "20%" }}>Doctor Name</div>
                    <div style={{ width: "20%" }}>Date</div>
                    <div style={{ width: "20%" }}>Payment Status</div>
                </Box>
                <Box className="boooking-div">
                {Array.from(Array(10)).map((_, index) => (
                    <Box class="booking-table">
                        <div style={{ width: "20%" }}>4223512668745126765156874</div>
                        <div style={{ width: "20%" }}>Body Sergery</div>
                        <div style={{ width: "20%" }}>Jaznan Abdullah</div>
                        <div style={{ width: "20%" }}>23-12-2022</div>
                        <div style={{ width: "20%" }}>Pending</div>
                    </Box>
                ))}
                </Box>
            </Box>
        </Grid>
    );
};

export default BookingPageRight;
