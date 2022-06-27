import { Box, Card, CardContent, Container, Grid, Rating, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../CustomHooks/useFetch";
import './BookingLeftSide.css';

const BookingLeftSide = () => {
    const { id } = useParams();

    const { data, loading, error } = useFetch(`http://localhost:5000/booking/${id}`);

    
    const { name, img, fees, location, rating } = data;
    return (
        
            <Card
                
                style={{ padding: "20px", borderRadius: "20px"}}
                className="booking-card"
            >
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
                    <Typography variant="body2" color="text.secondary">
                        <p style={{ margin: "2px auto" }}>{location}</p>
                        <Rating name="read-only" value={Number(rating)} precision={0.5} readOnly />
                        <h3 style={{ margin: "2px auto" }}> $ {fees} </h3>
                    </Typography>
                </CardContent>
            </Card>
        
    );
};

export default BookingLeftSide;
