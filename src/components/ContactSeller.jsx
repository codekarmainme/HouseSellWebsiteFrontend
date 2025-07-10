import React, { useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  TextField,
  Button,
  Divider,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"; // For the close button
import colors from "../common/colors"; // Make sure the path to your colors.jsx is correct

function ContactSeller({ open, onClose, sellerEmail, sellerPhone }) {
  // State to manage form data
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    offer: "",
    message: "",
    preferredContact: "email", // Default preferred contact method
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Seller Form Data:", formData);
    // You would typically send this data to your backend here
    // Example: axios.post('/api/contact-seller', formData);

    // After successful submission, you might want to:
    // 1. Show a success message (e.g., using react-toastify)
    // 2. Close the modal: onClose();
    // 3. Clear the form: setFormData({ ...initialState });
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: { xs: "100%", sm: 450 }, // Responsive width
          boxSizing: "border-box",
          background: colors.background, // Use your defined background color
          fontFamily: "Poppins, Arial, sans-serif",
        },
      }}
    >
      <Box sx={{ p: 3, height: "100%", display: "flex", flexDirection: "column" }}>
        {/* Close Button */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Header */}
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontFamily: "Poppins, Arial, sans-serif",
            fontWeight: 600,
            color: colors.primary,
            mb: 2,
            textAlign: "center",
          }}
        >
          Contact Seller
        </Typography>

        <Typography
          variant="body2"
          sx={{
            fontFamily: "Poppins, Arial, sans-serif",
            color: colors.dark,
            mb: 2,
            textAlign: "center",
          }}
        >
          Fill out the form below to send a message to the seller.
        </Typography>

        <Divider sx={{ mb: 3 }} />

        {/* Form Fields */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2, flexGrow: 1 }}
        >
          <TextField
            label="Your Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            fullWidth
            required
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: colors.primary },
              '& .MuiInputLabel-root.Mui-focused': { color: colors.primary },
              '& .MuiInputBase-input': { fontFamily: 'Poppins, Arial, sans-serif' },
              '& .MuiInputLabel-root': { fontFamily: 'Poppins, Arial, sans-serif' },
            }}
          />
          <TextField
            label="Your Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            fullWidth
            required
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: colors.primary },
              '& .MuiInputLabel-root.Mui-focused': { color: colors.primary },
              '& .MuiInputBase-input': { fontFamily: 'Poppins, Arial, sans-serif' },
              '& .MuiInputLabel-root': { fontFamily: 'Poppins, Arial, sans-serif' },
            }}
          />
          <TextField
            label="Your Phone Number"
            name="phoneNumber"
            type="tel"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            fullWidth
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: colors.primary },
              '& .MuiInputLabel-root.Mui-focused': { color: colors.primary },
              '& .MuiInputBase-input': { fontFamily: 'Poppins, Arial, sans-serif' },
              '& .MuiInputLabel-root': { fontFamily: 'Poppins, Arial, sans-serif' },
            }}
          />
          <TextField
            label="Your Offer (Optional, e.g., '120,000 ETB')"
            name="offer"
            value={formData.offer}
            onChange={handleInputChange}
            fullWidth
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: colors.primary },
              '& .MuiInputLabel-root.Mui-focused': { color: colors.primary },
              '& .MuiInputBase-input': { fontFamily: 'Poppins, Arial, sans-serif' },
              '& .MuiInputLabel-root': { fontFamily: 'Poppins, Arial, sans-serif' },
            }}
          />
          <TextField
            label="Your Message/Remarks"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            fullWidth
            required
            multiline
            rows={4}
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: colors.primary },
              '& .MuiInputLabel-root.Mui-focused': { color: colors.primary },
              '& .MuiInputBase-input': { fontFamily: 'Poppins, Arial, sans-serif' },
              '& .MuiInputLabel-root': { fontFamily: 'Poppins, Arial, sans-serif' },
            }}
          />

          <FormControl component="fieldset" sx={{ mt: 1 }}>
            <FormLabel
              component="legend"
              sx={{
                fontFamily: "Poppins, Arial, sans-serif",
                color: colors.dark,
                "&.Mui-focused": { color: colors.primary },
              }}
            >
              Preferred Contact Method for Seller
            </FormLabel>
            <RadioGroup
              row
              name="preferredContact"
              value={formData.preferredContact}
              onChange={handleInputChange}
            >
              <FormControlLabel
                value="email"
                control={<Radio size="small" sx={{ color: colors.primary }} />}
                label={
                  <Typography sx={{ fontFamily: "Poppins, Arial, sans-serif", fontSize: 14 }}>
                    Email
                  </Typography>
                }
              />
              <FormControlLabel
                value="phone"
                control={<Radio size="small" sx={{ color: colors.primary }} />}
                label={
                  <Typography sx={{ fontFamily: "Poppins, Arial, sans-serif", fontSize: 14 }}>
                    Phone
                  </Typography>
                }
              />
            </RadioGroup>
          </FormControl>

          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 3,
              fontFamily: "Poppins, Arial, sans-serif",
              background: colors.primary,
              color: colors.white,
              textTransform: "none",
              boxShadow: "none",
              "&:hover": { background: colors.secondary },
            }}
            fullWidth
          >
            Send Message
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}

export default ContactSeller;