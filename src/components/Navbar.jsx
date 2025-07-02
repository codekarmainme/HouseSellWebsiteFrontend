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
import NotificationPopover from "./notification_dialogue";
import ProfilePopOver from "./ProfilePopOver";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeBar, setActivebar] = useState("Find houses");
  const [mode, setMode] = useState("light");
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

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

  const navItems = [
    { label: "Find houses", path: "/" },
    { label: "Become a seller", path: "/post" },
    { label: "My posts", path: "/myposts" },
    { label: "Messages", path: "/chat" },
    { label: "Real estate", path: "/realestate" },
    { label: "Announcements", path: "/announcement" },
  ];

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
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Left side - Logo and main nav items */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Link to='/' style={{textDecoration:'none'}}>
              <Typography
                variant="h6"
                component={Link}
                to="/"
                sx={{
                  fontFamily: "Poppins, Arial, sans-serif",
                  fontWeight: 600,
                  letterSpacing: 1,
                  mr: { xs: 2, md: 4 },
                  color: colors.light,
                  textDecoration: "none",
                }}
              >
                HouseSell
              </Typography></Link>


            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              {navItems.slice(0, 4).map((item) => (
                <Button
                  key={item.label}
                  component={Link}
                  to={item.path}
                  onClick={() => setActivebar(item.label)}
                  sx={{
                    fontFamily: "Poppins, Arial, sans-serif",
                    textTransform: "none",
                    color: activeBar === item.label ? colors.secondary : colors.light,
                    "&:hover": {
                      color: colors.secondary,
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          </Box>

          {/* Right side - Additional nav items and icons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {/* Desktop - Additional items */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              {navItems.slice(4).map((item) => (
                <Button
                  key={item.label}
                  component={Link}
                  to={item.path}
                  onClick={() => setActivebar(item.label)}
                  sx={{
                    fontFamily: "Poppins, Arial, sans-serif",
                    textTransform: "none",
                    color: activeBar === item.label ? colors.secondary : colors.light,
                    "&:hover": {
                      color: colors.secondary,
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* Icons */}
            <Box sx={{ display: "flex", alignItems: "center", ml: 1 }}>
              <IconButton
                color="inherit"
                onClick={() => setNotificationOpen(true)}
                sx={{
                  color: colors.light, height: '40px',
                  width: '40px'
                }}
              >
                <Badge badgeContent={6} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>

              <NotificationPopover
                open={notificationOpen}
                onClose={() => setNotificationOpen(false)}
              />

              <IconButton
                color="inherit"
                onClick={() => setProfileOpen(true)}
                sx={{
                  color: colors.light, height: '40px',
                  width: '40px'
                }}
              >
                <AccountCircle />
              </IconButton>

              <ProfilePopOver
                open={profileOpen}
                onClose={() => setProfileOpen(false)}
              />

              <IconButton
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                color="inherit"
                aria-label="toggle dark mode"
                sx={{
                  color: colors.light, height: '40px',
                  width: '40px'
                }}
              >
                {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
              </IconButton>

              {/* Mobile menu button */}
              <IconButton
                color="inherit"
                onClick={handleMenu}
                size="large"
                edge="end"
                sx={{
                  display: { xs: "flex", md: "none" },
                  color: colors.light,
                  ml: 1,
                  height: '40px',
                  width: '40px'
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Box>

          {/* Mobile Menu */}
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
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {navItems.map((item) => (
              <MenuItem
                key={item.label}
                onClick={() => {
                  setActivebar(item.label);
                  handleClose();
                }}
                sx={{ fontFamily: "Poppins, Arial, sans-serif" }}
              >
                <Link
                  to={item.path}
                  style={{ textDecoration: "none", color: "inherit", width: "100%" }}
                >
                  {item.label}
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Navbar;