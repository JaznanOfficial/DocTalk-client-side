import { Container, Grid } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../CustomHooks/useFetch";
import BookingLeftSide from "./BookingLeftSide";
import BookingRightSide from "./BookingRightSide";

const BookingPage = () => {
    const { id } = useParams();

    const { data, loading, error } = useFetch(`http://localhost:5000/booking/${id}`);
    console.log(data);
    return <BookingRightSide data={data} loading={loading} error={error}></BookingRightSide>;
};

export default BookingPage;
