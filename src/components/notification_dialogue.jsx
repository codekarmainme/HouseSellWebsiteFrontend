import React, { useEffect, useRef } from "react";
import { Paper, Typography, IconButton, List, ListItem, ListItemText, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import colors from "../common/colors";

const notifications = [
    { id: 1, text: "Welcome to our website!" },
    { id: 2, text: "I am mike. If you want any assistant. I am here for you" },

];

const NotificationPopover = ({ open, onClose }) => {
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
                maxWidth: 360,
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
                        Notifications
                    </Typography>
                    <IconButton onClick={onClose} sx={{ color: colors.white, width: 40, height: 40 }}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <List sx={{ p: 0 }}>
                    {notifications.length === 0 ? (
                        <Box sx={{ p: 3, textAlign: "center" }}>
                            <Typography sx={{ color: colors.muted }}>No new notifications.</Typography>
                        </Box>
                    ) : (
                        notifications.map((notif) => (
                            <ListItem key={notif.id} divider>
                                <ListItemText
                                    primary={notif.text}
                                    primaryTypographyProps={{
                                        sx: { fontFamily: "Poppins, Arial, sans-serif", color: colors.dark,fontSize:'11px',cursor:'pointer' },
                                    }}
                                />
                            </ListItem>
                        ))
                    )}
                </List>
            </Paper>
        </Box>
    );
};

export default NotificationPopover;