import pp from '../assets/images/businsswoman-avatar.png'; import React, { useEffect, useRef } from "react";
import { Paper, Typography, IconButton, Box, Avatar, Button, Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import colors from "../common/colors";
import { Link } from 'react-router-dom';


const user = {
    name: "Mikiyas Solomon",
    email: "mikiyas@example.com",
    avatar: pp,
};

const ProfilePopOver = ({ open, onClose }) => {
    const ref = useRef();

    // Close when clicking outside
    useEffect(() => {
        function handleClick(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                onClose();
            }
        }
        if (open) {
            document.addEventListener("mousedown", handleClick);
        }
        return () => document.removeEventListener("mousedown", handleClick);
    }, [open, onClose]);

    if (!open) return null;

    return (
        <Box
            ref={ref}
            sx={{
                position: "fixed",
                top: 40,
                right: 16,
                zIndex: 2000,
                minWidth: 320,
                maxWidth: 340,
            }}
        >
            <Paper elevation={8} sx={{ borderRadius: 3, overflow: "hidden" }}>
                <Box
                    sx={{
                        background: colors.primary,
                        color: colors.white,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        px: 2,
                        py: 1.5,
                    }}
                >
                    <Typography sx={{ fontWeight: 600, fontFamily: "Poppins, Arial, sans-serif" }}>
                        Profile
                    </Typography>
                    <IconButton onClick={onClose} sx={{ color: colors.white }}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Box sx={{ p: 3, display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Avatar src={user.avatar} sx={{ width: 70, height: 70, mb: 1, border: `3px solid ${colors.secondary}` }} />
                    <Typography sx={{ fontWeight: 700, fontSize: 18, color: colors.primary, mb: 0.5 }}>
                        {user.name}
                    </Typography>
                    <Typography sx={{ color: colors.muted, fontSize: 15, mb: 2 }}>
                        {user.email}
                    </Typography>
                    <Divider sx={{ width: "100%", my: 2, background: colors.background }} />
                    <Link to='/myposts' style={{ textDecoration: 'none', width: '100%' }}>
                        <Button
                            variant="contained"
                            fullWidth
                            sx={{
                                background: colors.primary,
                                color: colors.white,
                                fontWeight: 600,
                                mb: 1.5,
                                textTransform: "none",
                                borderRadius: 2,
                                fontFamily: "Poppins, Arial, sans-serif",
                                '&:hover': { background: colors.secondary, color: colors.dark },
                            }}

                        >
                            Dashboard
                        </Button></Link>
                    <Link to='/credintial' style={{ textDecoration: 'none', width: '100%' }}>
                        <Button
                            variant="outlined"
                            fullWidth
                            sx={{
                                borderColor: colors.primary,
                                color: colors.primary,
                                fontWeight: 600,
                                textTransform: "none",
                                borderRadius: 2,
                                fontFamily: "Poppins, Arial, sans-serif",
                                '&:hover': { background: colors.accent, borderColor: colors.secondary },
                            }}
                            onClick={() => { /* handle logout here */ }}
                        >
                            Logout
                        </Button></Link>

                </Box>
            </Paper>
        </Box>
    );
};

export default ProfilePopOver;