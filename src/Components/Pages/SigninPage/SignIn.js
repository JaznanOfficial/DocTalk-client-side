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
import React, { useRef, useState } from "react";
import "../SignupPage/SignUp.css";
import logo from "../../../images/logo.png";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import useFirebase from "../../CustomHooks/useFirebase";
import Swal from "sweetalert2";
import useAuth from "../../CustomHooks/useAuth";

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

    const emailRef = useRef();
    const passwordRef = useRef();

    // authentication-------------------------------------->
    const navigate = useNavigate();
    const location = useLocation();
    const navigateUrl = location?.state?.from || "/home";

    const {
        signInWithGoogle,
        signInWithGithub,
        signInWithTwitter,
        signInWithFacebook,
        setLoading,
        error,
        setError,
        setUser,
        signInWithEmail,
        user,
    } = useAuth();

    // email password authentication-------------------------------------->

    const signInhandler = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        if (password.length < 6) {
            new Swal({
                title: "Oops!",
                text: "Password Must Be At Least 6 Characters",
                icon: "error",
            });
        } else {
            signInWithEmail(email, password)
                .then((userCredintial) => {
                    setLoading(true);
                    setUser(userCredintial.user);
                    // console.log(user);
                    navigate(navigateUrl);
                })
                .catch((err) => {
                    setError(err.message);
                    new Swal({
                        title: "Oops!",
                        text: err.message,
                        icon: "error",
                    });
                });
            // setLoading(false);
        }
    };

    // google sign in method------------------------------->
    const googleSignIn = () => {
        signInWithGoogle()
            .then((userCredintial) => {
                setUser(userCredintial.user);
                navigate(navigateUrl);
            })

            .catch((err) => {
                setError(err.message);
                // console.log(error);
                new Swal({
                    title: "Oops!",
                    text: err.message,
                    icon: "error",
                });
            })
            .finally(() => {
                setLoading(false);
                
            });
        
    };

    // github sign in method------------------------------->

    const githubSignIn = () => {
        signInWithGithub()
            .then((userCredintial) => {
                setUser(userCredintial.user);
                // console.log(user);
                navigate(navigateUrl);
            })
            .catch((err) => {
                setError(err.message);
                new Swal({
                    title: "Oops!",
                    text: err.message,
                    icon: "error",
                });
            })
            .finally(() => {
                setLoading(false);
            });
    };

    // twitter sign in method------------------------------->

    const twitterSignIn = () => {
        signInWithTwitter()
            .then((userCredintial) => {
                setUser(userCredintial.user);
                // console.log(user);
                navigate(navigateUrl);
            })
            .catch((err) => {
                setError(err.message);
                new Swal({
                    title: "Oops!",
                    text: err.message,
                    icon: "error",
                });
            })
            .finally(() => {
                setLoading(false);
            });
    };

    // facebook sign in method------------------------------->

    const facebookSignIn = () => {
        signInWithFacebook()
            .then((userCredintial) => {
                setUser(userCredintial.user);
                // console.log(user);
                
            })
            .catch((err) => {
                setError(err.message);
                new Swal({
                    title: "Oops!",
                    text: err.message,
                    icon: "error",
                });
            })
            .finally(() => {
                setLoading(false);
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
                            src={logo}
                            alt="img not found"
                            width={"200px"}
                            heigt={"100px"}
                            style={{ margin: "80px 0px 50px 0px" }}
                        />
                    </Box>
                    <Box>
                        <form onSubmit={signInhandler}>
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
                            <FormControl
                                className="input-field"
                                sx={{ m: 1, width: "50ch" }}
                                variant="outlined"
                            >
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
                                    inputRef={passwordRef}
                                />
                            </FormControl>{" "}
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
                                Login
                            </Button>
                        </form>

                        <h3 style={{ color: "#565ACF" }}>Or</h3>

                        <Button
                            className="social-login-button"
                            type="submit"
                            variant="contained"
                            color="primary"
                            style={{
                                width: "2ch",
                                color: "white",
                                margin: "5px 5px",
                                padding: "5px 10px",
                                fontSize: "25px",
                                backgroundColor: "#E44134",
                                fontWeight: "400",
                                cursor: "pointer",
                                textTransform: "none",
                            }}
                            onClick={googleSignIn}
                        >
                            <i className="fa-brands fa-google"></i>
                        </Button>
                        <Button
                            className="social-login-button"
                            type="submit"
                            variant="contained"
                            color="primary"
                            style={{
                                width: "1ch",
                                color: "white",
                                margin: "5px 5px",
                                padding: "5px 10px",
                                fontSize: "25px",
                                backgroundColor: "#010101",
                                fontWeight: "400",
                                cursor: "pointer",
                                textTransform: "none",
                            }}
                            onClick={githubSignIn}
                        >
                            <i className="fa-brands fa-github"></i>
                        </Button>
                        <Button
                            className="social-login-button"
                            type="submit"
                            variant="contained"
                            color="primary"
                            style={{
                                width: "1ch",
                                color: "white",
                                margin: "5px 5px",
                                padding: "5px 10px",
                                fontSize: "25px",
                                backgroundColor: "#1C9CEA",
                                fontWeight: "400",
                                cursor: "pointer",
                                textTransform: "none",
                            }}
                            onClick={twitterSignIn}
                        >
                            <i className="fa-brands fa-twitter"></i>
                        </Button>
                        <Button
                            className="social-login-button"
                            type="submit"
                            variant="contained"
                            color="primary"
                            style={{
                                width: "1ch",
                                color: "white",
                                margin: "5px 5px",
                                padding: "5px 10px",
                                fontSize: "25px",
                                backgroundColor: "#1773EA",
                                fontWeight: "400",
                                cursor: "pointer",
                                textTransform: "none",
                            }}
                            onClick={facebookSignIn}
                        >
                            <i className="fa-brands fa-facebook-f"></i>
                        </Button>

                        <Container>
                            <hr style={{ border: "1px solid #EAE7FF" }} />
                        </Container>
                        <h3 style={{ color: "#44446E" }}>Don't have any account?</h3>
                        <NavLink to="/sign-up">
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
