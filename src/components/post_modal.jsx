import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Modal,
  Box,
  Typography,
  IconButton,
  TextField,
  Button,
  MenuItem,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import colors from "../common/colors";

const cities = [
  "Addis Ababa", "Adama", "Bahir Dar", "Hawassa", "Dire Dawa", "Mekelle", "Gondar", "Jimma", "Jijiga", "Shashamane"
];

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '95vw', sm: 400, md: 480 }, // Responsive width
  maxWidth: 480,
  bgcolor: colors.white,
  borderRadius: 3,
  boxShadow: 24,
  p: { xs: 2, sm: 4 }, // Responsive padding
  maxHeight: { xs: '90vh', sm: '90vh' }, // Add this
  overflowY: 'auto', // Add this

};

const poppinsTheme = createTheme({
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
  },
});
const PostModal = ({
  open,
  onClose,
  onSubmit,
  form,
  onFormChange,
  uploading, 
}) => {

  return (
    <ThemeProvider theme={poppinsTheme}>
      <Modal open={open} onClose={onClose}>
        <Box sx={style}>
          <IconButton
            onClick={onClose}
            sx={{
              width: 40,
              height: 40,
              position: "absolute",
              top: 12,
              right: 12,
              color: colors.primary,
            }}
          >
            <CloseIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{
              mb: 3,
              color: colors.primary,
              textAlign: "center",
            }}
          >
            Add House For Sale
          </Typography>
          <Box
            component="form"
            onSubmit={onSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <TextField
              label="House Type"
              name="type"
              value={form.type}
              onChange={onFormChange}
              fullWidth
              required
              InputLabelProps={{ style: { fontFamily: "Poppins, Arial, sans-serif" } }}
              InputProps={{ style: { fontFamily: "Poppins, Arial, sans-serif" } }}
            />
            <TextField
              label="Bedrooms"
              name="bedrooms"
              type="number"
              value={form.bedrooms}
              onChange={onFormChange}
              fullWidth
              required
              InputLabelProps={{ style: { fontFamily: "Poppins, Arial, sans-serif" } }}
              InputProps={{ style: { fontFamily: "Poppins, Arial, sans-serif" } }}
            />
            {/* Add Bathrooms field if needed */}
            <TextField
              label="Bathrooms"
              name="bathrooms"
              type="number"
              value={form.bathrooms}
              onChange={onFormChange}
              fullWidth
              required // or not, based on your schema
              InputLabelProps={{ style: { fontFamily: "Poppins, Arial, sans-serif" } }}
              InputProps={{ style: { fontFamily: "Poppins, Arial, sans-serif" } }}
            />
            {/* Add Area (Sqft) field if needed */}
            <TextField
              label="Area (sqft)"
              name="area_sqft"
              type="number"
              value={form.area_sqft}
              onChange={onFormChange}
              fullWidth
              required // or not, based on your schema
              InputLabelProps={{ style: { fontFamily: "Poppins, Arial, sans-serif" } }}
              InputProps={{ style: { fontFamily: "Poppins, Arial, sans-serif" } }}
            />
            <TextField
              label="Description"
              name="description"
              value={form.description}
              onChange={onFormChange}
              fullWidth
              multiline
              minRows={2}
              required
              InputLabelProps={{ style: { fontFamily: "Poppins, Arial, sans-serif" } }}
              InputProps={{ style: { fontFamily: "Poppins, Arial, sans-serif" } }}
            />
            <TextField
              label="Terms and Conditions"
              name="terms" // Matches formData.terms
              value={form.terms}
              onChange={onFormChange}
              fullWidth
              multiline
              minRows={2}
              required
              InputLabelProps={{ style: { fontFamily: "Poppins, Arial, sans-serif" } }}
              InputProps={{ style: { fontFamily: "Poppins, Arial, sans-serif" } }}
            />
            <TextField
              label="Price"
              name="price"
              type="number"
              value={form.price}
              onChange={onFormChange}
              fullWidth
              required
              InputLabelProps={{ style: { fontFamily: "Poppins, Arial, sans-serif" } }}
              InputProps={{ style: { fontFamily: "Poppins, Arial, sans-serif" } }}
            />
            <TextField
              select
              label="City"
              name="address" // Matches formData.address (which sends to backend 'address' column)
              value={form.address}
              onChange={onFormChange}
              fullWidth
              required
              InputLabelProps={{ style: { fontFamily: "Poppins, Arial, sans-serif" } }}
              InputProps={{ style: { fontFamily: "Poppins, Arial, sans-serif" } }}
            >
              {cities.map((city) => (
                <MenuItem key={city} value={city} sx={{ fontFamily: "Poppins, Arial, sans-serif" }}>
                  {city}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Remark"
              name="remark"
              value={form.remark}
              onChange={onFormChange}
              fullWidth
              multiline
              minRows={2}
              InputLabelProps={{ style: { fontFamily: "Poppins, Arial, sans-serif" } }}
              InputProps={{ style: { fontFamily: "Poppins, Arial, sans-serif" } }}
            />
            <Button
              variant="contained"
              component="label"
              sx={{
                background: colors.secondary,
                color: colors.dark,
                textTransform: "none",
                borderRadius: 2,
                fontFamily: "Poppins, Arial, sans-serif",
                '&:hover': { background: colors.primary, color: colors.light },
              }}
            >
              {uploading ? "Uploading..." : "Upload Images"}
              <input
                type="file"
                name="images"
                accept="image/*"
                multiple
                hidden
                onChange={onFormChange}
                disabled={uploading}
              />
            </Button>
            <Button
              type="submit"
              variant="contained"
              sx={{
                background: colors.primary,
                color: colors.white,
                textTransform: "none",
                borderRadius: 2,
                mt: 1,
                fontFamily: "Poppins, Arial, sans-serif",
                '&:hover': { background: colors.secondary, color: colors.dark },
              }}
              disabled={uploading}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Modal>
    </ThemeProvider>
  );
};
export default PostModal;
