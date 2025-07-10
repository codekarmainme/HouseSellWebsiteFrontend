import React from "react";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Tooltip,
  Button,
  Divider,
  CircularProgress,
} from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/Star";
import colors from "../common/colors";
import ContactSeller from "./ContactSeller";
import { useState } from "react";

const HouseDetailModal = ({
  open,
  onClose,
  images,
  type,
  price,
  description,
  bedrooms,
  termandcondition,
  isloading,
  address,
  upvoted = false,
  downvoted = false,
  saved = false,
  onUpvote,
  onDownvote,
  onComment,
  onSave,
  
}) => {
   const [contactModalOpen, setContactModalOpen] = useState(false);
    const handleOpenContactModal = () => {
    setContactModalOpen(true);
  };

  const handleCloseContactModal = () => {
    setContactModalOpen(false);
  };
  return (
    <>
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: { xs: "100%", sm: 420 },
          boxSizing: "border-box",
          background: colors.background,
          fontFamily: "Poppins, Arial, sans-serif",
        },
      }}
    >
      <Box sx={{ p: 2, height: "100%", display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
          <IconButton onClick={onClose} disableRipple={true} sx={{width:20,height:20}}>
            <span style={{ fontSize: 24, fontWeight: 700 }}>&times;</span>
          </IconButton>
        </Box>
        {isloading ? (
          <Box sx={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <CircularProgress color="primary" />
          </Box>
        ) : (
          <>
            <Box
              component="img"
              src={images}
              alt="House"
              sx={{
                width: "100%",
                height: 200,
                objectFit: "cover",
                borderRadius: 2,
                mb: 2,
              }}
            />
            
            <Typography variant="h6" sx={{ fontFamily: "Poppins, Arial, sans-serif", mb: 1 }}>
              {type}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: colors.primary, fontFamily: "Poppins, Arial, sans-serif", mb: 1 }}
            >
              Price: {price}
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontFamily: "Poppins, Arial, sans-serif", mb: 1 }}
            >
              {description}
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontFamily: "Poppins, Arial, sans-serif", mb: 1 }}
            >
              Condition: {termandcondition}
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontFamily: "Poppins, Arial, sans-serif", mb: 1 }}
            >
              Bedrooms: {bedrooms}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <LocationOnIcon sx={{ color: colors.secondary, mr: 1 }} fontSize="small" />
              <Typography
                variant="body2"
                sx={{ fontFamily: "Poppins, Arial, sans-serif" }}
              >
                {address}
              </Typography>
            </Box>
            <Divider sx={{ mb: 2 }} />
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Tooltip title="Upvote">
                <IconButton onClick={onUpvote} color={upvoted ? "primary" : "default"} disableRipple={true} sx={{width:20,height:20}}>
                  <FavoriteBorderIcon />
                </IconButton>
              </Tooltip>
            
              <Tooltip title="Comment">
                <IconButton onClick={onComment} disableRipple={true} sx={{width:20,height:20}}>
                  <ChatBubbleOutlineIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title={saved ? "Saved" : "Save"}>
                <IconButton onClick={onSave} color={saved ? "primary" : "default"} sx={{width:20,height:20}}>
                  {saved ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                </IconButton>
              </Tooltip>
            </Box>
            <Button
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
              onClick={handleOpenContactModal}
            >
              Contact Seller
            </Button>
          </>
        )}
      </Box>
    </Drawer>
     <ContactSeller
        open={contactModalOpen}
        onClose={handleCloseContactModal}
    
      />
    </>
  );
};

export default HouseDetailModal;