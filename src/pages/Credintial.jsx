import { Box, Typography, TextField, Button, Paper, Avatar, IconButton, InputAdornment, useTheme, useMediaQuery } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import logo from "../assets/images/buy-house-removebg.png";
import colors from "../common/colors";
import { useSelector, useDispatch } from 'react-redux';
import {
  setIsSignup, setUsername, setEmail, setPassword, setMsg, setShowPassword, setUser
} from "../state/auth/AuthSlice";
import axios from 'axios';
function Credintial() {
  const dispatch = useDispatch();
  const { isSignup, username, email, password, msg, showPassword, user } = useSelector(state => state.auth);
  function setsignup() {
    dispatch(setIsSignup(!isSignup));
  }

  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(username, email, password);

    if (isSignup) {
      // ... (signup logic - no changes needed here for setUser)
      try {
        const res = await axios.post("http://localhost:5000/api/auth/signup", {
          username,
          email,
          password
        });
        if (res.status === 201) {
          dispatch(setMsg("Successfully registered!✅"));
          dispatch(setIsSignup(false));
          setTimeout(() => dispatch(setMsg(null)), 1500);
          // After successful signup, if you want to automatically log them in,
          // you would dispatch loginUser thunk here or directly set user.
          // For now, it just redirects to sign-in form.
        } else {
          dispatch(setMsg(res.data.message || "Signup failed"));
          setTimeout(() => dispatch(setMsg(null)), 2000);
        }
      } catch (err) {
        console.log(err);
        dispatch(setMsg(
          err.response?.data?.error ||
          err.response?.data?.message ||
          err.message ||
          "Server error"
        ));
        setTimeout(() => dispatch(setMsg(null)), 2000);
      }
    } else {
      // Sign in logic (call /login)
      try {
        const res = await axios.post("http://localhost:5000/api/auth/login", {
          email: username, // Assuming 'username' TextField is used for email/username input during login
          password
        });
        if (res.status === 200) {
          console.log("Login successful response:", res.data);
          // CORRECTED: Dispatch the action to update Redux state
          dispatch(setUser(res.data.user)); // This is the crucial fix!
          // If your backend also sends a token, store it here (e.g., localStorage.setItem('token', res.data.token);)

          // You might also want to set username and email if you use them separately in state:
          // dispatch(setUsername(res.data.user.username));
          // dispatch(setEmail(res.data.user.email));

          dispatch(setMsg("Login successful!"));
          setTimeout(() => dispatch(setMsg(null)), 1500);
        } else {
          dispatch(setMsg(res.data.message || "Login failed"));
          setTimeout(() => dispatch(setMsg(null)), 2000);
        }
      } catch (err) {
        dispatch(setMsg(
          err.response?.data?.error ||
          err.response?.data?.message ||
          err.message ||
          "Server error"
        ));
        setTimeout(() => dispatch(setMsg(null)), 2000);
      }
    }
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        bgcolor: colors.background,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Poppins, Arial, sans-serif",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: { xs: "98vw", sm: 420 },
          maxWidth: 420,
          p: { xs: 2, sm: 4 },
          borderRadius: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Avatar
          src={logo}
          alt="Logo"
          sx={{
            width: 80,
            height: 80,
            mb: 2,
            bgcolor: colors.white,
            border: `2px solid ${colors.primary}`,
          }}
        />
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: colors.primary,
            mb: 1,
            textAlign: "center",
            fontFamily: "Poppins, Arial, sans-serif",
          }}
        >
          {isSignup ? "Sign Up" : "Sign In"}
        </Typography>
        <Typography
          sx={{
            color: colors.dark,
            mb: 2,
            fontSize: 16,
            textAlign: "center",
            fontFamily: "Poppins, Arial, sans-serif",
          }}
        >
          {isSignup ? "Create your account" : "Login to your account"}
        </Typography>
        {msg && (
          <Box
            sx={{
              background: colors.success,
              color: colors.white,
              px: 2,
              py: 1,
              borderRadius: 0,
              mb: 2,
              width: "100%",
              textAlign: "center",
              fontWeight: 600,
              fontSize: 15,
            }}
          >
            {msg}
          </Box>
        )}
        <Box
          component="form"
          onSubmit={handlesubmit}
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mb: 2,
          }}
        >
          {isSignup && (
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={e => dispatch(setEmail(e.target.value))}
              fullWidth
              required
              variant="outlined"
              InputLabelProps={{ style: { fontFamily: "Poppins, Arial, sans-serif" } }}
              InputProps={{ style: { fontFamily: "Poppins, Arial, sans-serif" } }}
            />
          )}
          <TextField
            label={isSignup ? "Username" : "Username or Email"}
            value={username}
            onChange={e => dispatch(setUsername(e.target.value))}
            fullWidth
            required
            variant="outlined"
            InputLabelProps={{ style: { fontFamily: "Poppins, Arial, sans-serif" } }}
            InputProps={{ style: { fontFamily: "Poppins, Arial, sans-serif" } }}
          />
          <TextField
            label="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={e => dispatch(setPassword(e.target.value))}
            fullWidth
            required
            variant="outlined"
            InputLabelProps={{ style: { fontFamily: "Poppins, Arial, sans-serif" } }}
            InputProps={{
              style: { fontFamily: "Poppins, Arial, sans-serif" },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => dispatch(setShowPassword(!showPassword))}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              background: colors.primary,
              color: colors.white,
              fontWeight: 600,
              fontFamily: "Poppins, Arial, sans-serif",
              borderRadius: 2,
              textTransform: "none",
              fontSize: 16,
              py: 1.2,
              '&:hover': { background: colors.secondary, color: colors.dark },
            }}
            fullWidth
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
        </Box>
        <Typography sx={{ fontSize: 15, color: colors.dark, mb: 1 }}>
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <Button
            onClick={setsignup}
            sx={{
              color: colors.secondary,
              textTransform: "none",
              fontWeight: 700,
              fontSize: 15,
              p: 0,
              minWidth: 0,
            }}
          >
            {isSignup ? "Sign In" : "Sign Up"}
          </Button>
        </Typography>
        <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
          <IconButton sx={{ bgcolor: colors.background, borderRadius: 2 }}>
            <GoogleIcon sx={{ color: "#EA4335", fontSize: 32 }} />
          </IconButton>
          <IconButton sx={{ bgcolor: colors.background, borderRadius: 2 }}>
            <AppleIcon sx={{ color: "#000", fontSize: 32 }} />
          </IconButton>
        </Box>
      </Paper>
    </Box>
  );
}

export default Credintial;