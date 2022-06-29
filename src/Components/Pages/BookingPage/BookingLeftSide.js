import { Box, Card, CardContent, Container, Grid, Rating, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { ClockLoader } from "react-spinners";
import useFetch from "../../CustomHooks/useFetch";
import "./BookingLeftSide.css";
import { css } from "@emotion/react";

const BookingLeftSide = ({ data, loading, error }) => {
    const { name, img, fees, location, rating, specialized } = data;
    const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;



    return (
        <>
        {error && <div>Error: {error.message}</div>}
            {loading ? (
                <ClockLoader
                    color="#E12454"
                    size={"300"}
                    loading={true}
                    css={override}
                    display={"block"}
                />
            ) : (
                <Card style={{ padding: "20px", borderRadius: "20px" }} className="booking-card">
                    <Box>
                        <img
                            src={img}
                            alt={`img of ${name}`}
                            width={"200rem"}
                            style={{ borderRadius: "20px" }}
                        />
                    </Box>
                    <CardContent>
                        <Typography
                            style={{ margin: "2px auto" }}
                            gutterBottom
                            variant="h5"
                            component="div"
                        >
                            {name}
                        </Typography>
                        <Typography color="text.secondary">
                            <p style={{ margin: "2px auto" }}>{location}</p>
                            <Rating name="read-only" value={Number(rating)} precision={0.5} readOnly />
                            <h3 style={{ margin: "2px auto" }}> $ {fees} </h3>
                            <h3 style={{ margin: "2px auto", color: "#E95A7C" }}>
                                {specialized} specialist
                            </h3>
                        </Typography>
                    </CardContent>
                </Card>
            )}
        </>
    );
};

export default BookingLeftSide;
