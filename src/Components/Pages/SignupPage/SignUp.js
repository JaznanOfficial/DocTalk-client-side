import {
    Avatar,
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
import "./SignUp.css";
import Swal from "sweetalert2";
import useFirebase from "../../CustomHooks/useFirebase";
import { PhotoCamera } from "@mui/icons-material";
import useAuth from "../../CustomHooks/useAuth";

const SignUp = () => {
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

    const navigate = useNavigate();
    const location = useLocation();
    const navigateUrl = location?.state?.from || "/home";

    // imgbb img upload process ------------------------->

    const [uploadImage, setUploadImage] = useState(null);
    const imgHandler = (e) => {
        const image = e.target.files[0];
        // console.log(image);
        const formData = new FormData();
        // console.log(formData);
        formData.set("key", "9e2a769f48bf697f30e55878a0fcd0aa");
        formData.append("image", image);
        fetch("https://api.imgbb.com/1/upload", {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setUploadImage(data.data.display_url);
                // console.log(uploadImage);
            })
            .catch((err) => console.log(err));
    };
    // console.log(uploadImage);

    // registration process------------------------------>
    const { setError, error, signUpWithEmailAndPasseord, setUser, user, updateName } = useAuth();

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const registrationHandler = (e) => {
        e.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        if (password.length < 6) {
            new Swal({
                title: "Oops!",
                text: "Password Must Be At Least 6 Characters",
                icon: "error",
            });
        } else {
            // console.log({ name, email, password });
            nameRef.current.value = "";
            emailRef.current.value = "";
            passwordRef.current.value = "";
            signUpWithEmailAndPasseord(email, password)
                .then((userCredential) => {
                    updateName(name, uploadImage);
                    setUser(userCredential.user);
                    // console.log(user);
                    new Swal({
                        title: "Hurray!",
                        text: "Your're successfully registered :)",
                        icon: "success",
                    });
                    navigate(navigateUrl);
                })
                .catch((err) => {
                    // setError(err.message);
                    // console.log(err.message);
                    new Swal({
                        title: "Oops!",
                        text: err.message,
                        icon: "error",
                    });
                });
        }
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
                        <form onSubmit={registrationHandler}>
                            <Avatar
                                alt="Remy Sharp"
                                src={uploadImage}
                                sx={{ width: 56, height: 56 }}
                                style={{ margin: "0 auto", marginBottom: "10px" }}
                            />
                            {!uploadImage && (
                                <FormControl
                                    className="input-field"
                                    sx={{ m: 1, width: "50ch" }}
                                    variant="outlined"
                                >
                                    <Button variant="outlined" color="error" component="label">
                                        <PhotoCamera /> Upload your profile picture
                                        <input
                                            hidden
                                            accept="image/*"
                                            multiple
                                            type="file"
                                            onChange={imgHandler}
                                            required
                                        />
                                    </Button>
                                </FormControl>
                            )}
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
                                Register
                            </Button>
                        </form>

                        <Container>
                            <hr style={{ border: "1px solid #EAE7FF" }} />
                        </Container>
                        <h3 style={{ color: "#44446E" }}>Already have any account? </h3>
                        <NavLink to="/sign-in">
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
        </div>
    );
};

export default SignUp;
