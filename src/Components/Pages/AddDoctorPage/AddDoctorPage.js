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
import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../images/logo.png";

const AddDoctorPage = () => {

    const nameRef = useRef();
    const emailRef = useRef();
    const serviceRef = useRef();
    const locationRef = useRef();
    const feesRef = useRef();
    const genderRef = useRef();
    const maleRef = useRef();
    const femaleRef = useRef();
    const otherRef = useRef();


    const handleAddDoctor = (e) => {
        e.preventDefault();
        // const name = nameRef.current.value;
        // const email = emailRef.current.value;
        // const service = serviceRef.current.value;
        // const location = locationRef.current.value;
        // const fees = feesRef.current.value;
        // const gender = genderRef.current.value;

        console.log(maleRef.current.value);
    }

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

                        <h3 style={{ color: "#565ACF" }}>Or</h3>

                        <Container>
                            <hr style={{ border: "1px solid #EAE7FF" }} />
                        </Container>
                        <h3 style={{ color: "#44446E" }}>Already have any account?</h3>
                        <NavLink to="/doctor-login">
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
                        </NavLink>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default AddDoctorPage;
