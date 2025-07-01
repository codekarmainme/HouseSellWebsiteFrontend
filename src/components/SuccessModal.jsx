import React from "react";
import { Modal, Box, Typography, IconButton, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import colors from "../common/colors";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 380,
  bgcolor: colors.white,
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

const SuccessModal = ({ open, onClose, message = "Your house has been posted successfully! Admin will review and approve!" }) => (
  <Modal open={open} onClose={onClose}>
    <Box sx={style}>
      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          top: 12,
          right: 12,
          color: colors.primary,
          width:40,
          height:40,
        }}
      >
        <CloseIcon />
      </IconButton>
      <CheckCircleOutlineIcon sx={{ color: colors.success, fontSize: 60, mb: 2 }} />
      <Typography
        variant="h6"
        sx={{
          fontFamily: "Poppins, Arial, sans-serif",
          color: colors.primary,
          mb: 2,
        }}
      >
        Success!
      </Typography>
      <Typography
        sx={{
          fontFamily: "Poppins, Arial, sans-serif",
          color: colors.dark,
          mb: 3,
        }}
      >
        {message}
      </Typography>
      <Button
        variant="contained"
        onClick={onClose}
        sx={{
          fontFamily: "Poppins, Arial, sans-serif",
          background: colors.primary,
          color: colors.white,
          borderRadius: 2,
          textTransform: "none",
          '&:hover': { background: colors.secondary, color: colors.dark },
        }}
      >
        Close
      </Button>
    </Box>
  </Modal>
);

export default SuccessModal;