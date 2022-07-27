import { Container, Grid } from "@mui/material";
import React from "react";
import BookingPageLeft from "./BookingPageLeft/BookingPageLeft";
import BookingPageRight from "./BookingPageRight/BookingPageRight";

const MyBookingPage = () => {
    return (
        <Container style={{ marginTop: "30px", marginBottom: "30px" }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <BookingPageLeft></BookingPageLeft>
                <BookingPageRight></BookingPageRight>
            </Grid>
        </Container>
    );
};

export default MyBookingPage;
