import React from "react";
import {
  Box,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import colors from "../common/colors";

const poppinsTheme = createTheme({
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
  },
});

const MessageSidebar = ({ users, selectedUserId, onSelectUser }) => (
  <ThemeProvider theme={poppinsTheme}>
    <Box
      sx={{
        width: 320,
        height: "100vh",
        background: colors.white,
        boxShadow: 3,
        borderRight: `1px solid ${colors.background}`,
        position: "relative",
        borderRadius:"25px"
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
          borderBottom: `1px solid ${colors.background}`,
          background: colors.primary,
          color: colors.white,
          borderRadius:"5px"
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Messages
        </Typography>
      </Box>
      <List sx={{ p: 0 }}>
        {users.map((msg, idx) => (
          <React.Fragment key={msg.id}>
            <ListItem
              alignItems="flex-start"
              selected={msg.id === selectedUserId}
              sx={{
                background: msg.id === selectedUserId
                  ? colors.accent
                  : msg.unread
                  ? colors.info
                  : colors.white,
                cursor: "pointer",
                "&:hover": {
                  background: colors.accent,
                },
                transition: "background 0.2s",
                px: 2,
                py: 1.5,
              }}
              onClick={() => onSelectUser(msg.id)}
            >
              <ListItemAvatar>
                <Avatar src={msg.avatar} alt={msg.name} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Typography
                      sx={{
                        fontWeight: msg.unread ? 700 : 500,
                        color: colors.dark,
                        fontSize: 16,
                      }}
                    >
                      {msg.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 12,
                        color: colors.muted,
                        fontWeight: 400,
                        ml: 2,
                      }}
                    >
                      {msg.lastTime}
                    </Typography>
                  </Box>
                }
                secondary={
                  <Typography
                    sx={{
                      color: colors.muted,
                      fontSize: 13,
                      fontWeight: msg.unread ? 600 : 400,
                      mt: 0.5,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxWidth: 180,
                    }}
                  >
                    {msg.lastMessage}
                  </Typography>
                }
              />
            </ListItem>
            {idx < users.length - 1 && <Divider variant="inset" component="li" />}
          </React.Fragment>
        ))}
      </List>
    </Box>
  </ThemeProvider>
);

export default MessageSidebar;