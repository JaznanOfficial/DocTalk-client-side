import {
    Box,
    Button,
    Container,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
} from "@mui/material";
import React from "react";
import "../SignupPage/SignUp.css";
import logo from "../../../images/logo.png";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { NavLink } from "react-router-dom";

const SignIn = () => {
    // ----------------------
    const [show, setShow] = React.useState(false);

    // ----------------------
    const handleClickShowPassword = () => {
        setShow(!show);
    };

    // ---------------------
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Box className="sign-up" style={{ padding: "100px 10px", textAlign: "center" }}>
            <Container style={{ textAlign: "center" }}>
                <Box
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
                            src={logo}
                            alt="img not found"
                            width={"200px"}
                            heigt={"100px"}
                            style={{ margin: "80px 0px 50px 0px" }}
                        />
                    </Box>
                    <Box>
                        <form action="">
                            <FormControl sx={{ m: 1, width: "50ch" }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-email"
                                    type="email"
                                    label="Email"
                                />
                            </FormControl>{" "}
                            <br />
                            <FormControl sx={{ m: 1, width: "50ch" }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">
                                    Password
                                </InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={show ? "text" : "password"}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {show ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>{" "}
                            <br />
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                style={{
                                    width: '31ch',
                                    color:'white',
                                    margin: "5px 0px",
                                    padding: "5px 10px",
                                    fontSize: "25px",
                                    backgroundColor: "#565ACF",
                                    fontWeight: "400",
                                    cursor: "pointer",
                                    textTransform: "none",
                                }}
                            >
                                Login
                            </Button>
                        </form>

                        <h3 style={{ color: "#565ACF" }}>Or</h3>
                        
                        <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                style={{
                                    width: '31ch',
                                    color:'white',
                                    margin: "5px 0px",
                                    padding: "5px 10px",
                                    fontSize: "25px",
                                    backgroundColor: "#E44134",
                                    fontWeight: "400",
                                    cursor: "pointer",
                                    textTransform: "none",
                                }}
                            >
                                Login With Google
                            </Button>
                        <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                style={{
                                    width: '31ch',
                                    color:'white',
                                    margin: "5px 0px",
                                    padding: "5px 10px",
                                    fontSize: "25px",
                                    backgroundColor: "#010101",
                                    fontWeight: "400",
                                    cursor: "pointer",
                                    textTransform: "none",
                                }}
                            >
                                Login With Github
                            </Button>
                        <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                style={{
                                    width: '31ch',
                                    color:'white',
                                    margin: "5px 0px",
                                    padding: "5px 10px",
                                    fontSize: "25px",
                                    backgroundColor: "#1C9CEA",
                                    fontWeight: "400",
                                    cursor: "pointer",
                                    textTransform: "none",
                                }}
                            >
                                Login With Twitter
                            </Button>
                        <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                style={{
                                    width: '31ch',
                                    color:'white',
                                    margin: "5px 0px",
                                    padding: "5px 10px",
                                    fontSize: "25px",
                                    backgroundColor: "#1773EA",
                                    fontWeight: "400",
                                    cursor: "pointer",
                                    textTransform: "none",
                                }}
                            >
                                Login With Facebook
                            </Button>

                        <Container>
                        <hr style={{ border: "1px solid #EAE7FF" }} />
                        </Container>
                            <h3 style={{color:'#44446E'}}>Don't have any account?</h3>
                        <NavLink to='/sign-up'>
                        <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                style={{
                                    width: '31ch',
                                    color:'white',
                                    margin: "5px 0px",
                                    padding: "5px 10px",
                                    fontSize: "25px",
                                    backgroundColor: "#F17732",
                                    fontWeight: "400",
                                    cursor: "pointer",
                                    textTransform: "none",
                                }}
                            >
                                Register
                            </Button>
                        </NavLink>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default SignIn;
