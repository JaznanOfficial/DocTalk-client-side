import {
    Box,
    Button,
    Container,
    FormControl,
    InputLabel,
    OutlinedInput,
    TextField,
} from "@mui/material";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import useAuth from "../../CustomHooks/useAuth";
import "../SignupPage/SignUp.css";
import BookingLeftSide from "./BookingLeftSide";

const BookingRightSide = ({ data, error, loading }) => {
    const {user} = useAuth();
    const { name, specialized } = data;
    const navigate = useNavigate();
    const date = new Date();
    const [today, setToday] = React.useState(date.toISOString().split("T")[0]);

    const doctorNameRef = useRef();
    const serviceRef = useRef();
    const nameRef = useRef();
    const emailRef = useRef();
    const numberRef = useRef();
    const addressRef = useRef();
    const dateRef = useRef();
    const uid = uuid();
    // console.log(uid);

    const handleSubmit = (e) => {
        e.preventDefault();
        const doctorName = doctorNameRef.current.value;
        const serviceName = serviceRef.current.value;
        const patientName = nameRef.current.value;
        const email = emailRef.current.value;
        const number = numberRef.current.value;
        const address = addressRef.current.value;
        const date = dateRef.current.value;
        const bookingData = {
            doctorName,
            serviceName,
            patientName,
            email,
            number,
            address,
            date,
            uid,
            status: "pending",
        };

        fetch(`https://doctalk-server.herokuapp.com/api/booking`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bookingData),
        }).then((res) => {
            if (!res.ok) {
                throw new Error(res.statusText);
            }
            return navigate(`/payment/${uid}`);
        });
    };

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
                    <BookingLeftSide data={data}></BookingLeftSide>

                    <Box>
                        <form action="" onSubmit={handleSubmit}>
                            <FormControl
                                className="input-field"
                                sx={{ m: 1, width: "50ch" }}
                                variant="outlined"
                            >
                                <OutlinedInput
                                    type="text"
                                    inputRef={doctorNameRef}
                                    value={name}
                                    disabled
                                    focused
                                    required
                                />
                            </FormControl>{" "}
                            <FormControl
                                className="input-field"
                                sx={{ m: 1, width: "50ch" }}
                                variant="outlined"
                            >
                                <OutlinedInput
                                    id="outlined-adornment-name"
                                    type="text"
                                    inputRef={serviceRef}
                                    value={specialized}
                                    disabled
                                    focused
                                    required
                                />
                            </FormControl>{" "}
                            <Box>
                                <img
                                    className="booking-img"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Patient_logo_2019.svg/1200px-Patient_logo_2019.svg.png"
                                    alt="patient img"
                                    width={"390px"}
                                />
                            </Box>
                            <FormControl
                                className="input-field"
                                sx={{ m: 1, width: "50ch" }}
                                variant="outlined"
                            >
                                <InputLabel htmlFor="outlined-adornment-name">
                                    Patient Name
                                </InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-name"
                                    type="text"
                                    label="patient name"
                                    inputRef={nameRef}
                                    required
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
                                    inputRef={emailRef}
                                    value={user.email}
                                    required
                                    disabled={user.email}
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
                                    maxLength="11"
                                    minLength="11"
                                    inputRef={numberRef}
                                    required
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
                                    inputRef={addressRef}
                                    required
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
                                    inputRef={dateRef}
                                    required
                                />
                            </FormControl>{" "}
                            <br />
                            <br />
                            {/* <Link to={`/payment/${_id}`}> */}
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
                            {/* </Link> */}
                        </form>
                    </Box>
                </Box>
            </Container>
        </div>
    );
};

export default BookingRightSide;
