import {
    Box,
    Button,
    Container,
    FormControl,
    InputLabel,
    OutlinedInput,
    TextField,
} from "@mui/material";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import React from "react";
import "../SignupPage/SignUp.css";
import BookingLeftSide from "./BookingLeftSide";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const BookingRightSide = () => {
    const today = new Date();
    console.log(today);
    const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
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
                        <BookingLeftSide></BookingLeftSide>
                        <Box>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Patient_logo_2019.svg/1200px-Patient_logo_2019.svg.png"
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
                                    <InputLabel htmlFor="outlined-adornment-name">Name</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-name"
                                        type="name"
                                        label="name"
                                    />
                                </FormControl>{" "}
                                <br />
                                <FormControl
                                    className="input-field"
                                    sx={{ m: 1, width: "50ch" }}
                                    variant="outlined"
                                >
                                    <InputLabel htmlFor="outlined-adornment-email">
                                        Email
                                    </InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-email"
                                        type="email"
                                        label="Email"
                                    />
                                </FormControl>{" "}
                                <br />
                                <FormControl
                                    className="input-field"
                                    sx={{ m: 1, width: "50ch" }}
                                    variant="outlined"
                                >
                                    <InputLabel htmlFor="outlined-adornment-phone">
                                        Phone Number
                                    </InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-phone"
                                        type="tel"
                                        label="tel"
                                    />
                                </FormControl>{" "}
                                <br />
                                <FormControl
                                    className="input-field"
                                    sx={{ m: 1, width: "50ch" }}
                                    variant="outlined"
                                >
                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Address"
                                        multiline
                                        rows={4}
                                        defaultValue=""
                                    />
                                </FormControl>{" "}
                                <br />
                                <FormControl
                                    className="input-field"
                                    sx={{ m: 1, width: "50ch" }}
                                    variant="outlined"
                                >
                                    <DesktopDatePicker
                                        label="Date desktop"
                                        inputFormat="dd/MM/yyyy"
                                        value={value}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </FormControl>{" "}
                                <br />
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
                                    Book
                                </Button>
                            </form>
                        </Box>
                    </Box>
                </Container>
            </div>
        </LocalizationProvider>
    );
};

export default BookingRightSide;
