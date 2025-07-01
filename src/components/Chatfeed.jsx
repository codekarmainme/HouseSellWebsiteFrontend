import React, { useState, useRef, useEffect } from "react";
import { Box, Typography, Paper, TextField, Button, createTheme, ThemeProvider } from "@mui/material";
import colors from "../common/colors";

const poppinsTheme = createTheme({
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
  },
});

function Chatfeed({ user, onSendMessage }) {
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    setInput("");
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [user]);

  if (!user) {
    return (
      <ThemeProvider theme={poppinsTheme}>
        <Box sx={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
          <Typography sx={{ color: colors.muted }}>Select a conversation to start chatting.</Typography>
        </Box>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={poppinsTheme}>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          background: colors.light,
        }}
      >
        <Box sx={{ flex: 1, overflowY: "auto", p: 3 }}>
          {user.messages.map((m, i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                flexDirection: m.from === "me" ? "row-reverse" : "row",
                alignItems: "flex-end",
                mb: 2,
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 1.5,
                  px: 2.5,
                  background: m.from === "me" ? colors.primary : colors.white,
                  color: m.from === "me" ? colors.white : colors.dark,
                  borderRadius: 2,
                  maxWidth: "70%",
                  fontFamily: "Poppins, Arial, sans-serif",
                }}
              >
                <Typography sx={{ fontSize: 15 }}>{m.text}</Typography>
                <Typography sx={{ fontSize: 11, color: colors.muted, mt: 0.5, textAlign: "right" }}>
                  {m.time}
                </Typography>
              </Paper>
            </Box>
          ))}
          <div ref={messagesEndRef} />
        </Box>
        <Box sx={{ p: 2, borderTop: `1px solid ${colors.background}`, background: colors.white, display: "flex", gap: 2 }}>
          <TextField
            fullWidth
            placeholder="Type a message..."
            value={input}
            onChange={e => setInput(e.target.value)}
            sx={{ fontFamily: "Poppins, Arial, sans-serif" }}
            InputProps={{ style: { fontFamily: "Poppins, Arial, sans-serif" } }}
            onKeyDown={e => {
              if (e.key === "Enter" && input.trim()) {
                onSendMessage(input);
                setInput("");
              }
            }}
          />
          <Button
            variant="contained"
            sx={{
              fontFamily: "Poppins, Arial, sans-serif",
              background: colors.primary,
              color: colors.white,
              textTransform: "none",
              borderRadius: 2,
              '&:hover': { background: colors.secondary, color: colors.dark },
            }}
            onClick={() => {
              if (input.trim()) {
                onSendMessage(input);
                setInput("");
              }
            }}
            disabled={!input.trim()}
          >
            Send
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Chatfeed;