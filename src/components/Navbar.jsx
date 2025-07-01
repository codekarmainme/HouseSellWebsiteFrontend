import React, { useState, useMemo } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Link } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import colors from "../common/colors";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeBar, setActivebar] = useState("Find houses");
  const [mode, setMode] = useState("light");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: colors.primary,
          },
          background: {
            default: mode === "light" ? colors.background : colors.dark,
            paper: mode === "light" ? colors.white : colors.dark,
          },
        },
        typography: {
          fontFamily: "Poppins, Arial, sans-serif",
        },
      }),
    [mode]
  );

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="fixed"
        color="default"
        elevation={2}
        sx={{
          backgroundColor: mode === "light" ? colors.primary : colors.dark,
          fontFamily: "Poppins, Arial, sans-serif",
        }}
      >
        <Toolbar>
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Poppins, Arial, sans-serif",
                fontWeight: 600,
                letterSpacing: 1,
                mr: 4,
                color: colors.light,
                cursor: 'pointer'
              }}
            >
              HouseSell
            </Typography>
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button
                 
                  onClick={() => setActivebar("Find houses")}
                  sx={{ fontFamily: "Poppins, Arial, sans-serif", textTransform: "none", whiteSpace: "nowrap" }}
                  style={{color: activeBar == 'Find houses' ? colors.secondary : colors.light }}
                >
                  Find houses
                </Button>
              </Link>
              <Link to="/post" style={{ textDecoration: "none" }}>
                <Button
                  
                  onClick={() => setActivebar("Become a seller")}
                  sx={{ fontFamily: "Poppins, Arial, sans-serif", textTransform: "none", whiteSpace: "nowrap" }}
                  style={{ color: activeBar == 'Become a seller' ? colors.secondary : colors.light }}
                >
                  Become a seller
                </Button>
              </Link>
              <Link to="/myposts" style={{ textDecoration: "none" }}>
                <Button
                  color={activeBar === "My posts" ? "primary" : "inherit"}
                  onClick={() => setActivebar("My posts")}
                  sx={{ fontFamily: "Poppins, Arial, sans-serif", textTransform: "none", whiteSpace: "nowrap" }}
                  style={{ color: activeBar == 'My posts' ? colors.secondary : colors.light }}
                >
                  My posts
                </Button>
              </Link>
              <Link to="/chat" style={{ textDecoration: "none" }}>
                <Button
                  
                  onClick={() => setActivebar("Messages")}
                  sx={{ fontFamily: "Poppins, Arial, sans-serif", textTransform: "none", whiteSpace: "nowrap" }}
                  style={{ color: activeBar == 'Messages' ? colors.secondary : colors.light }}
                >
                  Messages
                </Button>
              </Link>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Link to="/realestate" style={{ textDecoration: "none" }}>
              <Button
                
                onClick={() => setActivebar("Real estate")}
                sx={{ fontFamily: "Poppins, Arial, sans-serif", textTransform: "none", whiteSpace: "nowrap" }}
                style={{ color: activeBar == 'Real estate' ? colors.secondary : colors.light }}
              >
                Real estate
              </Button>
            </Link>
            <Link to="/announcement" style={{ textDecoration: "none" }}>
              <Button

                onClick={() => setActivebar("Announcements")}
                sx={{ fontFamily: "Poppins, Arial, sans-serif", textTransform: "none", whiteSpace: "nowrap" }}
                style={{ color: activeBar == 'Announcements' ? colors.secondary : colors.light }}
              >
                Announcements
              </Button>
            </Link>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton color="inherit">
              <Badge badgeContent={6} color="error">
                <NotificationsIcon style={{ color: colors.light }} />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <AccountCircle style={{ color: colors.light }} />
            </IconButton>
            <IconButton

              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              color="inherit"
              aria-label="toggle dark mode"
            >
              {mode === "light" ? <Brightness4Icon style={{ color: colors.light }} /> : <Brightness7Icon style={{ color: colors.light }} />}
            </IconButton>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                color="inherit"
                onClick={handleMenu}
                size="large"
                edge="end"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <MenuItem
                  onClick={() => {
                    setActivebar("Home");
                    handleClose();
                  }}
                  sx={{ fontFamily: "Poppins, Arial, sans-serif" }}
                >
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Home
                  </Link>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setActivebar("Post");
                    handleClose();
                  }}
                  sx={{ fontFamily: "Poppins, Arial, sans-serif" }}
                >
                  <Link
                    to="/post"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Post
                  </Link>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setActivebar("Profile");
                    handleClose();
                  }}
                  sx={{ fontFamily: "Poppins, Arial, sans-serif" }}
                >
                  <Link
                    to="/profile"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    My posts
                  </Link>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setActivebar("Chat");
                    handleClose();
                  }}
                  sx={{ fontFamily: "Poppins, Arial, sans-serif" }}
                >
                  <Link
                    to="/chat"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Messages
                  </Link>
                </MenuItem>
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Navbar;