import { Box, Button, Grid } from "@mui/material";
import React from "react";
import { ClockLoader } from "react-spinners";
import useFetch from "../../../CustomHooks/useFetch";
import useFirebase from "../../../CustomHooks/useFirebase";
import "./BookingPageRight.css";
import { css } from "@emotion/react";

const BookingPageRight = () => {
    const { user } = useFirebase();
    const email = user.email;
    const { data, loading, error } = useFetch(
        `https://doctalk-server.herokuapp.com/bookings?email=${email}`
    );
    const bookingData = data
    console.log(bookingData);
    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
    `;
    if (loading) {
        return (
            <ClockLoader
                color="#E12454"
                size={"300"}
                loading={true}
                css={override}
                display={"block"}
            />
        );
    }

    else {
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
                        {data.length === 0 ? (
                            <h2>You have no Booking</h2>
                        ) : (
                            bookingData.map((booking) => {
                                console.log(booking)
                                const { _id, doctorName, serviceName, date, status } = booking;
                                return (
                                    <Box class="booking-table">
                                        <div style={{ width: "20%" }}>{_id}</div>
                                        <div style={{ width: "20%" }}>{serviceName}</div>
                                        <div style={{ width: "20%" }}>{doctorName}</div>
                                        <div style={{ width: "20%" }}>{date}</div>
                                        {status === "paid" ? (
                                            <div style={{ width: "20%", color: "green" }}>Paid</div>
                                        ) : (
                                            <div
                                                style={{
                                                    width: "20%",
                                                    padding: "2px",
                                                    fontSize: "10px",
                                                    fontWeight: "bold",
                                                    color: "red",
                                                }}
                                            >
                                                Not Paid
                                            </div>
                                        )}
                                    </Box>
                                );
                            })
                        )}
                    </Box>
                </Box>
            </Grid>
        );
    }
};

export default BookingPageRight;
