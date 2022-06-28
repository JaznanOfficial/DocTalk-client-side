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
import React, { useRef } from "react";
import "../SignupPage/SignUp.css";
import BookingLeftSide from "./BookingLeftSide";

const BookingRightSide = () => {

    const date = new Date();
    const [today, setToday] = React.useState(date.toISOString().split("T")[0]);
   
    const doctorNameRef = useRef();
    const nameRef = useRef();
    const emailRef = useRef();
    const numberRef = useRef();
    const addressRef = useRef();
    const dateRef = useRef();


    
    
    const handleSubmit = (e) => { 
        e.preventDefault();
        const patientName = nameRef.current.value;
        console.log(patientName);

    }



    return (
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
                        <form action="" onSubmit={handleSubmit}>
                            <FormControl
                                className="input-field"
                                sx={{ m: 1, width: "50ch" }}
                                variant="outlined"
                            >
                                <InputLabel htmlFor="outlined-adornment-name">Doctor's Name</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-name"
                                    type="text"
                                    label="doctor's name"
                                    ref={doctorNameRef}
                                    value={''}
                                />
                            </FormControl>{" "}
                            <FormControl
                                className="input-field"
                                sx={{ m: 1, width: "50ch" }}
                                variant="outlined"
                            >
                                <InputLabel htmlFor="outlined-adornment-name">Name</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-name"
                                    type="text"
                                    label="name"
                                    ref={nameRef}
                                />
                            </FormControl>{" "}
                            <br />
                            <FormControl
                                className="input-field"
                                sx={{ m: 1, width: "50ch" }}
                                variant="outlined"
                            >
                                <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-email"
                                    type="email"
                                    label="Email"
                                    ref={emailRef}
                                />
                            </FormControl>{" "}
                            <br />
                            <FormControl
                                className="input-field"
                                sx={{ m: 1, width: "50ch" }}
                                variant="outlined"
                            >
                                <InputLabel htmlFor="outlined-adornment-phone">Phone</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-phone"
                                    type="number"
                                    label="phone"
                                    maxLength='11'
                                    minLength='11'
                                    ref={numberRef}
                                    
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
                                    ref={addressRef}
                                />
                            </FormControl>{" "}
                            <br />
                            <FormControl
                                className="input-field"
                                sx={{ m: 1, width: "50ch" }}
                                variant="outlined"
                            >
                                <InputLabel htmlFor="outlined-adornment-date">Date</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-date"
                                    type="date"
                                    label="date"
                                    defaultValue={today}
                                    min={today}
                                    ref={dateRef}
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
    );
};

export default BookingRightSide;
