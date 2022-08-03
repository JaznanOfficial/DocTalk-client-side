import React, { useEffect, useState } from "react";
import "./PaymentPage.css";
import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    FormControl,
    Grid,
    InputLabel,
    OutlinedInput,
} from "@mui/material";
import payment from "../../../images/payment.jpg";
import { useParams } from "react-router-dom";
import useFetch from "../../CustomHooks/useFetch";
import { css } from "@emotion/react";
import { ClockLoader } from "react-spinners";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Swal from "sweetalert2";

const PaymentPage = () => {
    const { id } = useParams();
    const [processing, setProcessing] = useState(false);

    const { data, loading, error } = useFetch(`https://doctalk-server.herokuapp.com/booking/${id}`);
    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
    `;
    const paymentData = data;
    const { fees } = paymentData;
    const stripe = useStripe();
    const elements = useElements();

    const [{ clientSecret }, setClientSecret] = useState("");
    console.log(clientSecret);

    useEffect(() => {
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(paymentData),
        })
            .then((res) => res.json())
            .then((paymentIntentData) => setClientSecret(paymentIntentData));
    }, [paymentData]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (elements == null) {
            return;
        }
        const card = elements.getElement(CardElement);
        setProcessing(true);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });
        if (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${error.message}`,
            });
        } else {
            console.log(paymentMethod);
        }

        // payment intent---------------->

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: "Jenny Rosen",
                    },
                },
            }
        );

        if (intentError) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${intentError.message}`,
            });
            setProcessing(false);
        } else {
            console.log(paymentIntent);
            e.target.reset();
            setProcessing(true);

            fetch(`http://localhost:5000/api/booking?id=${id}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({status: "paid"}),
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.acknowledged) {
                        new Swal({
                            title: "Good job!",
                            text: "Your payment successfully done! Please stay with us",
                            icon: "success",
                        });
                    }
                    else {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: `${intentError.message}`,
                        });
                    }
                })
        }
    };

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
                <div
                    className="sign-up"
                    style={{ padding: "100px 10px", textAlign: "center", margin: "0" }}
                >
                    <Container style={{ textAlign: "center" }}>
                        <Box
                            className="sign-up-box"
                            style={{
                                border: "1px solid #565ACF",
                                borderRadius: "50px",
                                backgroundColor: "#FFFFFF",
                                margin: "0 auto",
                                paddingBottom: "40px",
                            }}
                        >
                            <Box>
                                <img
                                    className="payment-img"
                                    src={payment}
                                    alt="patient img"
                                    width={"390px"}
                                />
                            </Box>
                            <Box>
                                <Box style={{ margin: "0 50px" }}>
                                    <form onSubmit={handleSubmit}>
                                        <CardElement />

                                        <br />
                                        {!processing && (
                                            <Button
                                                className="sign-up-btn payment-btn"
                                                type="submit"
                                                variant="contained"
                                                color="primary"
                                                style={{
                                                    width: "31ch",
                                                    color: "white",
                                                    margin: "5px 0px",
                                                    padding: "5px 10px",
                                                    fontSize: "25px",
                                                    backgroundColor: "#565ACF",
                                                    fontWeight: "400",
                                                    cursor: "pointer",
                                                    textTransform: "none",
                                                }}
                                                disabled={!stripe || !elements}
                                            >
                                                Pay ${data.fees}
                                            </Button>
                                        )}
                                    </form>
                                </Box>
                            </Box>
                        </Box>
                    </Container>
                </div>
            )}
        </>
    );
};

export default PaymentPage;
