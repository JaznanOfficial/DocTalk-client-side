import { Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.css";

const NotFoundPage = () => {
    return (
        <Box className="not-found-div">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <h1 style={{ fontSize: "7rem", color: "#1F2278" }}>4</h1>
                <img
                    src="https://meditro.themetrades.com/react/static/media/error.4b5472f1.gif"
                    alt=""
                    width={"100px"}
                    style={{ borderRadius: "50%" }}
                />
                <h1 style={{ fontSize: "7rem", color: "#1F2278" }}>4</h1>
            </div>
            <h1 style={{ fontSize: "5rem", margin: "0", color: "#1F2278" }}>Page Not Found</h1>
            <Link to="/">
                <Button
                    variant="outlined"
                    color="error"
                    style={{ color: "#F1386A", borderColor: "#F1386A", marginTop:'1rem' }}
                >
                    Go Home
                </Button>
            </Link>
        </Box>
    );
};

export default NotFoundPage;
