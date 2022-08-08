import { Box, Button, Card, CardContent, Container, Grid, Rating, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ClockLoader } from "react-spinners";
import useFetch from "../../CustomHooks/useFetch";
import { css } from "@emotion/react";
import "../Homepages/SingleService/SingleService.css";

const DoctorsPage = () => {
    const { category } = useParams();
    const { data, loading, error } = useFetch(`http://localhost:5000/doctors/${category}`);
    console.log(data);

    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
    `;

    return (
        <Box style={{ margin: "5rem auto" }}>
            {loading && (
                <ClockLoader
                    color="#E12454"
                    size={"300"}
                    loading={true}
                    css={override}
                    display={"block"}
                />
            )}
            {error && <div>Error: {error.message}</div>}
            <Container className="single-service-container">
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {data.map((singleData) => {
                        const { _id, img, name, gender, fees, location, rating } = singleData;

                        return (
                            <Grid item xs={4} sm={4} md={3}>
                                <Card
                                    sx={{ maxWidth: 200 }}
                                    style={{
                                        padding: "20px",
                                        borderRadius: "20px",
                                        margin: "0 auto",
                                        height: "435px",
                                    }}
                                    className="card"
                                >
                                    <Box>
                                        <img
                                            src={img}
                                            alt={``}
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
                                        <Typography variant="body2" color="text.secondary">
                                            <p style={{ margin: "2px auto" }}>{location}</p>
                                            <Rating
                                                name="read-only"
                                                value={rating}
                                                precision={0.5}
                                                readOnly
                                            />
                                            <h3 style={{ margin: "2px auto" }}> $ {fees} </h3>
                                        </Typography>
                                    </CardContent>
                                    <Box style={{ textAlign: "center" }}>
                                        <Link to={`/booking/${_id}`}>
                                            <Button
                                                size="small"
                                                color="error"
                                                style={{
                                                    cursor: "pointer",
                                                    color: "#F1386A",
                                                    borderColor: "#F1386A",
                                                }}
                                            >
                                                Book This Doctor
                                            </Button>
                                        </Link>
                                    </Box>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </Box>
    );
};

export default DoctorsPage;
