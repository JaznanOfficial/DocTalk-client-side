import {
    Box,
    Button,
    Container,
    FormControl,
    FormControlLabel,
    FormLabel,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Radio,
    RadioGroup,
    Select,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import logo from "../../../images/logo.png";

const AddDoctorPage = () => {
    const [gender, setGender] = useState("");

    const handleGender = (e) => {
        setGender(e.target.value);
    };

    const nameRef = useRef();
    const emailRef = useRef();
    const serviceRef = useRef();
    const locationRef = useRef();
    const feesRef = useRef();

    const maleRef = useRef();
    const femaleRef = useRef();
    const otherRef = useRef();

    const handleAddDoctor = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const specialized = serviceRef.current.value;
        const location = locationRef.current.value;
        const fees = feesRef.current.value;

        const doctorData = { name, email, specialized, location, fees, gender };

        fetch(`http://localhost:5000/api/add-doctor`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(doctorData),
        }).then((res) => {
            if (!res.ok) {
                throw new Error(res.statusText);
            }
            return (
                new Swal({
                    title: "Good job!",
                    text: "Your information successfully sent! Please stay with us",
                    icon: "success",
                }),
                (nameRef.current.value = ""),
                (emailRef.current.value = ""),
                (serviceRef.current.value = ""),
                (locationRef.current.value = ""),
                (feesRef.current.value = ""),
                window.location.reload()
            );
        });
    };

    return (
        <Box className="sign-up" style={{ padding: "100px 10px", textAlign: "center" }}>
            <Container style={{ textAlign: "center" }}>
                <Box
                    className="sign-up-box"
                    style={{
                        border: "1px solid #565ACF",
                        borderRadius: "50px",
                        backgroundColor: "#FFFFFF",
                        width: "520px",
                        margin: "0 auto",
                        paddingBottom: "40px",
                    }}
                >
                    <Box>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKFcqIIPo_uiF78vGIzlthccy7H3LLfFSrDQ&usqp=CAU"
                            alt="img not found"
                            width={"200px"}
                            heigt={"100px"}
                            style={{ margin: "80px 0px 50px 0px" }}
                        />
                    </Box>
                    <Box>
                        <form action="" onSubmit={handleAddDoctor}>
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
                                    required
                                />
                            </FormControl>{" "}
                            <br />
                            <FormControl style={{ width: "87%", textAlign: "left" }}>
                                <InputLabel id="demo-simple-select-label">
                                    Specialized in
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    //   value={age}
                                    label="Specialized in"
                                    //   onChange={handleChange}
                                    inputRef={serviceRef}
                                    required
                                >
                                    <MenuItem value={"Body Surgery"}>Body Surgery</MenuItem>
                                    <MenuItem value={"Dental Care"}>Dental Care</MenuItem>
                                    <MenuItem value={"Eye Care"}>Eye Care</MenuItem>
                                    <MenuItem value={"Blood Cancer"}>Blood Cancer</MenuItem>
                                    <MenuItem value={"Neuro Surgery"}>Nreuro Surgery</MenuItem>
                                    <MenuItem value={"Allergy Treat"}>Allergy Treat</MenuItem>
                                </Select>
                            </FormControl>
                            <br />
                            <FormControl
                                className="input-field"
                                sx={{ m: 1, width: "50ch" }}
                                variant="outlined"
                            >
                                <InputLabel htmlFor="outlined-adornment-name">Location</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-name"
                                    type="text"
                                    label="Location"
                                    inputRef={locationRef}
                                    required
                                />
                            </FormControl>{" "}
                            <br />
                            <FormControl
                                className="input-field"
                                sx={{ m: 1, width: "50ch" }}
                                variant="outlined"
                            >
                                <InputLabel htmlFor="outlined-adornment-name">Fees</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-name"
                                    type="number"
                                    label="Fees"
                                    inputRef={feesRef}
                                    required
                                />
                            </FormControl>{" "}
                            <br />
                            <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">
                                    Gender
                                </FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    onChange={handleGender}
                                    required
                                >
                                    <FormControlLabel
                                        value="male"
                                        control={<Radio />}
                                        label="Male"
                                        inputRef={maleRef}
                                    />
                                    <FormControlLabel
                                        value="female"
                                        control={<Radio />}
                                        label="Female"
                                        inputRef={femaleRef}
                                    />
                                    <FormControlLabel
                                        value="other"
                                        control={<Radio />}
                                        label="Other"
                                        inputRef={otherRef}
                                    />
                                </RadioGroup>
                            </FormControl>
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
                                Register
                            </Button>
                        </form>

                        {/* <h3 style={{ color: "#565ACF" }}>Or</h3>

                        <Container>
                            <hr style={{ border: "1px solid #EAE7FF" }} />
                        </Container>
                        <h3 style={{ color: "#44446E" }}>Already have any account?</h3> */}
                        {/* <NavLink to="/doctor-login">
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
                                    backgroundColor: "#F17732",
                                    fontWeight: "400",
                                    cursor: "pointer",
                                    textTransform: "none",
                                }}
                            >
                                Login
                            </Button>
                        </NavLink> */}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default AddDoctorPage;
