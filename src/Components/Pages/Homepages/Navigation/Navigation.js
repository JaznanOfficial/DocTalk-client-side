import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../../../images/logo.png";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <AppBar
            position="sticky"
            sx={{ backgroundColor: "#F7F7FF", boxShadow: "0" }}
            className="navigation"
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            sx={{ color: "#000", marginRight: "0" }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                                marginLeft: "0",
                            }}
                        >
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Box
                                    sx={{ display: "flex", flexDirection: "column" }}
                                    className="responsive-menu-bar"
                                >
                                    <NavLink to="home">Home</NavLink>
                                    <NavLink to="services">Services</NavLink>
                                    <NavLink to="about">About Us</NavLink>
                                    <NavLink to="contact">Contact us</NavLink>
                                    <NavLink to="join">Join as a doctor</NavLink>
                                </Box>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Box>
                        <img src={logo} alt="img not found" width={"200px"} heigt={"100px"} />
                    </Box>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                            justifyContent: "flex-end",
                        }}
                        className="nav-links"
                    >
                        <NavLink to="home">Home</NavLink>
                        <NavLink to="services">Services</NavLink>
                        <NavLink to="about">About Us</NavLink>
                        <NavLink to="contact">Contact us</NavLink>
                        <NavLink to="join">Join as a doctor</NavLink>
                    </Box>

                    <Box sx={{ flexGrow: { xs: 1, md: 0 } }}>
                        <Tooltip title="Open Profile">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: "45px" }}
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Box
                                    sx={{ display: "flex", flexDirection: "column" }}
                                    className="responsive-menu-bar"
                                >
                                    <NavLink to="profile">Profile</NavLink>
                                    <NavLink to="patient-booking">My Booking</NavLink>

                                    <NavLink to="logout">Log Out</NavLink>
                                </Box>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navigation;
