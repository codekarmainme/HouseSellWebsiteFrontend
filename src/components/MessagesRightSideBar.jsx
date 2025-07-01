import React from "react";
import { Box, Avatar, Typography, Divider, Chip, createTheme, ThemeProvider } from "@mui/material";
import colors from "../common/colors";

const poppinsTheme = createTheme({
    typography: {
        fontFamily: "Poppins, Arial, sans-serif",
    },
});

const InfoRow = ({ label, value }) => (
    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Typography sx={{ color: colors.muted, fontWeight: 500, minWidth: 120, fontSize: 15 }}>
            {label}
        </Typography>
        <Typography sx={{ color: colors.dark, fontWeight: 500, fontSize: 15 }}>
            {value}
        </Typography>
    </Box>
);

const MessagesRightSideBar = ({ user }) => (
    <ThemeProvider theme={poppinsTheme}>
        <Box
            sx={{
                width: 340,
                p: 4,
                background: colors.white,
                height: "100vh",
                boxShadow: 3,
                fontFamily: "Poppins, Arial, sans-serif",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "5px"
            }}
        >
            {!user ? (
                <Box sx={{ width: "100%", mt: 10, textAlign: "center" }}>
                    <Typography sx={{ color: colors.muted, fontSize: 18 }}>
                        Select a conversation to see user info.
                    </Typography>
                </Box>
            ) : (
                <>
                    <Avatar
                        src={user.avatar}
                        sx={{
                            width: 100,
                            height: 100,
                            mb: 2,
                            border: `4px solid ${colors.primary}`,
                            boxShadow: 2,
                        }}
                    />
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 700,
                            color: colors.primary,
                            mb: 0.5,
                            letterSpacing: 1,
                            textAlign: "center",
                        }}
                    >
                        {user.name}
                    </Typography>
                    <Chip
                        label={user.address || "No address"}
                        sx={{
                            background: colors.accent,
                            color: colors.primary,
                            fontWeight: 500,
                            fontSize: 14,
                            mb: 2,
                            mt: 1,
                        }}
                    />
                    <Divider sx={{ width: "100%", my: 2, background: colors.background }} />
                    <Box>
                        <InfoRow label="Last online:" value={user.lastOnline || "Unknown"} />
                        <InfoRow label="Time zone:" value={user.timezone || "GMT+3"} />
                        <InfoRow label="Avg. response:" value={user.responseTime || "1 hour"} />
                    </Box>
                    {/* Add more info as needed */}
                    <Divider sx={{ width: "100%", my: 2, background: colors.background }} />
                    <Box sx={{ mt: "auto", width: "100%", textAlign: "center" }}>
                        <Typography sx={{ color: colors.grey, fontSize: 13 }}>
                            Secure chat powered by HouseSell
                        </Typography>
                    </Box>
                </>
            )}
        </Box>
    </ThemeProvider>
);

export default MessagesRightSideBar;