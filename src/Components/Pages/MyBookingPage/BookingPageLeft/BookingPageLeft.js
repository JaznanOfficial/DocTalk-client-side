import {
    Box,
    Button,
    Container,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    InputLabel,
    MenuItem,
    Modal,
    OutlinedInput,
    Radio,
    RadioGroup,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../../CustomHooks/useAuth";
import useFetch from "../../../CustomHooks/useFetch";
import "./BookingPageLeft.css";

const BookingPageLeft = () => {
    const { user } = useAuth();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 4,
    };

    // get user data

    const { data } = useFetch(`https://doctalk-server.herokuapp.com/api/users/${user.email}`);
    const { name, email, phone, address, blood, gender: userGender } = data;
    console.log(name, email, phone, address, blood, userGender);
    // user data edit modal
    const [gender, setGender] = useState("");

    const handleGender = (e) => {
        setGender(e.target.value);
    };

    const nameRef = useRef();
    const maleRef = useRef();
    const femaleRef = useRef();
    const otherRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const addressRef = useRef();
    const bloodRef = useRef();

    const handleUserDataEdit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;
        const address = addressRef.current.value;
        const blood = bloodRef.current.value;

        const userNewData = { name, email, phone, address, blood, gender };
        console.log(userNewData);

        fetch(`https://doctalk-server.herokuapp.com/api/users?email=${email}`, {
            method: "PUT",
            // mode: "no-cors",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(userNewData),
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                if (data.acknowledged) {
                    new Swal({
                        title: "Good job!",
                        text: "Your profile updated successfully done! Please stay with us",
                        icon: "success",
                    });
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: `any problem occured. please try again.`,
                    });
                }
            });
    };

    return (
        <Grid item xs={4} sm={8} md={4}>
            <Box
                class="patient-profile-card"
                style={{ textAlign: "center", margin: 0, padding: "0" }}
            >
                <Box class="profile-banner" style={{ textAlign: "center" }}>
                    <img
                        src="https://shreethemes.in/doctris/layouts/assets/images/bg/bg-profile.jpg"
                        class="img-fluid"
                        alt=""
                        width={"100%"}
                        height={"100px"}
                    />
                </Box>

                <Box
                    class="text-center avatar-profile margin-nagative mt-n5 position-relative pb-4 border-bottom"
                    style={{ position: "relative", top: "-50px" }}
                >
                    <img
                        src={user.photoURL}
                        class="rounded-circle shadow-md avatar avatar-md-md"
                        alt=""
                        width={"100px"}
                        height={"100px"}
                        style={{ margin: "0 auto", borderRadius: "50%" }}
                    />
                    <h3 style={{ color: "#E12454" }}>{user.displayName}</h3>
                    <hr style={{ border: "1px solid #EAE7FF" }} />
                </Box>

                <div style={{ position: "relative", top: "-50px" }}>
                    <div style={{ margin: "20px", textAlign: "left" }}>
                        <div style={{ display: "flex" }}>
                            <h5 style={{ color: "#215AEE" }}>
                                <i class="fa-solid fa-user"></i>
                            </h5>
                            <h5 style={{ marginLeft: "10px" }}>Gender</h5>
                            <h5 style={{ marginLeft: "10px", color: "gray" }}>{data?.gender}</h5>
                        </div>

                        <div style={{ display: "flex" }}>
                            <h5 style={{ color: "#215AEE" }}>
                                <i class="fa-solid fa-envelope"></i>
                            </h5>
                            <h5 style={{ marginLeft: "10px" }}>Email</h5>
                            <h5 style={{ marginLeft: "10px", color: "gray" }}>{user.email}</h5>
                        </div>

                        <div style={{ display: "flex" }}>
                            <h5 style={{ color: "#215AEE" }}>
                                <i class="fa-solid fa-book-open"></i>
                            </h5>
                            <h5 style={{ marginLeft: "10px" }}>Phone No.</h5>
                            <h5 style={{ marginLeft: "10px", color: "gray" }}>{data?.phone}</h5>
                        </div>

                        <div style={{ display: "flex" }}>
                            <h5 style={{ color: "#215AEE" }}>
                                <i class="fa-solid fa-italic"></i>
                            </h5>
                            <h5 style={{ marginLeft: "10px" }}>Address</h5>
                            <h5 style={{ marginLeft: "10px", color: "gray" }}>{data?.address}</h5>
                        </div>

                        <div style={{ display: "flex" }}>
                            <h5 style={{ color: "#215AEE" }}>
                                <i class="fa-solid fa-hand-holding-medical"></i>
                            </h5>
                            <h5 style={{ marginLeft: "10px" }}>Blood Group</h5>
                            <h5 style={{ marginLeft: "10px", color: "gray" }}>{data?.blood}</h5>
                        </div>
                    </div>
                    <div>
                        <Button
                            size="small"
                            color="error"
                            style={{
                                cursor: "pointer",
                                color: "#F1386A",
                                borderColor: "#F1386A",
                            }}
                            onClick={handleOpen}
                        >
                            Edit Profile
                        </Button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style} className="modal-card">
                                <div className="right">
                                    <form action="" onSubmit={handleUserDataEdit}>
                                        <FormControl
                                            className="input-field"
                                            sx={{ m: 1, width: "50ch" }}
                                            variant="outlined"
                                        >
                                            <InputLabel htmlFor="outlined-adornment-name">
                                                Name
                                            </InputLabel>
                                            <OutlinedInput
                                                id="outlined-adornment-name"
                                                type="text"
                                                label="name"
                                                inputRef={nameRef}
                                                value={user.displayName}
                                                disabled
                                            />
                                        </FormControl>{" "}
                                        <br />
                                        <FormControl>
                                            <FormLabel
                                                id="demo-row-radio-buttons-group-label"
                                                style={{ marginLeft: "10px" }}
                                            >
                                                Gender
                                            </FormLabel>
                                            <RadioGroup
                                                row
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                name="row-radio-buttons-group"
                                                style={{ marginLeft: "10px" }}
                                                onChange={handleGender}
                                                defaultValue={data?.gender}
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
                                                inputRef={emailRef}
                                                value={user.email}
                                                disabled
                                            />
                                        </FormControl>{" "}
                                        <br />
                                        <FormControl
                                            className="input-field"
                                            sx={{ m: 1, width: "50ch" }}
                                            variant="outlined"
                                        >
                                            <InputLabel htmlFor="outlined-adornment-name">
                                                Phone Number
                                            </InputLabel>
                                            <OutlinedInput
                                                id="outlined-adornment-name"
                                                type="number"
                                                label="Phone Number"
                                                inputRef={phoneRef}
                                                defaultValue={data?.phone}
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
                                                inputRef={addressRef}
                                                defaultValue={data?.address}
                                            />
                                        </FormControl>{" "}
                                        <br />
                                        <FormControl
                                            style={{
                                                width: "96%",
                                                textAlign: "left",
                                                marginLeft: "10px",
                                            }}
                                        >
                                            <InputLabel id="demo-simple-select-label">
                                                Blood Group
                                            </InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                //   value={age}
                                                label="Blood Group"
                                                inputRef={bloodRef}
                                                defaultValue={data?.blood}
                                            >
                                                <MenuItem value={"A+"}>A+</MenuItem>
                                                <MenuItem value={"A-"}>A-</MenuItem>
                                                <MenuItem value={"B+"}>B+</MenuItem>
                                                <MenuItem value={"B-"}>B-</MenuItem>
                                                <MenuItem value={"O+"}>O+</MenuItem>
                                                <MenuItem value={"O-"}>O-</MenuItem>
                                                <MenuItem value={"AB+"}>AB+</MenuItem>
                                                <MenuItem value={"AB-"}>AB-</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <br />
                                        <Button
                                            className="sign-up-btn"
                                            type="submit"
                                            size="small"
                                            color="error"
                                            style={{
                                                cursor: "pointer",
                                                color: "#F1386A",
                                                borderColor: "#F1386A",
                                                marginTop: "30px",
                                            }}
                                        >
                                            Save Change
                                        </Button>
                                    </form>
                                </div>
                            </Box>
                        </Modal>
                    </div>
                </div>
            </Box>
        </Grid>
    );
};

export default BookingPageLeft;
