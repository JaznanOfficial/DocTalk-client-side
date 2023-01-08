import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../CustomHooks/useFetch";
import BookingRightSide from "./BookingRightSide";

const BookingPage = () => {
    const { id } = useParams();

    const { data, loading, error } = useFetch(`https://doctalk-server.onrender.com/booking/${id}`);
    // console.log(data);
    return <BookingRightSide data={data} loading={loading} error={error}></BookingRightSide>;
};

export default BookingPage;
