import React from "react";
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

const PaymentPage = () => {
    const { id } = useParams();

    const { data, loading, error } = useFetch(`https://doctalk-server.herokuapp.com/booking/${id}`);
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
                                <form action="">
                                    <FormControl
                                        className="input-field"
                                        sx={{ m: 1, width: "50ch" }}
                                        variant="outlined"
                                    >
                                        <InputLabel htmlFor="outlined-adornment-name">
                                            Card Number
                                        </InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-card"
                                            type="text"
                                            label="card number"
                                        />
                                    </FormControl>{" "}
                                    <Grid
                                        container
                                        spacing={{ xs: 2, md: 3 }}
                                        columns={{ xs: 4, sm: 8, md: 12 }}
                                    >
                                        <Grid item xs={4} sm={4} md={6}>
                                            <FormControl
                                                className="input-field"
                                                sx={{ width: "18ch" }}
                                                variant="outlined"
                                            >
                                                <InputLabel htmlFor="outlined-adornment-name">
                                                    DD/YY
                                                </InputLabel>
                                                <OutlinedInput
                                                    id="outlined-adornment-name"
                                                    type="number"
                                                    label="DD/YY"
                                                />
                                            </FormControl>{" "}
                                        </Grid>
                                        <Grid item xs={4} sm={4} md={6}>
                                            <FormControl
                                                className="input-field"
                                                sx={{ width: "18ch" }}
                                                variant="outlined"
                                            >
                                                <InputLabel htmlFor="outlined-adornment-name">
                                                    CVV
                                                </InputLabel>
                                                <OutlinedInput
                                                    id="outlined-adornment-name"
                                                    type="number"
                                                    label="cvv"
                                                />
                                            </FormControl>{" "}
                                        </Grid>
                                    </Grid>
                                    <br />
                                    <Button
                                        className="sign-up-btn"
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
                                    >
                                        Pay ${data.fees}
                                    </Button>
                                </form>
                            </Box>
                        </Box>
                    </Container>
                </div>
            )}
        </>
    );
};

export default PaymentPage;
