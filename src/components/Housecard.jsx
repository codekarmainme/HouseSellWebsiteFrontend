import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Button,
  Tooltip,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import colors from '../common/colors';

function Housecard({
  image,
  type,
  price,
  description,
  bedrooms,
  condition,
  isloading,
  address,
  upvoted = false,
  downvoted = false,
  saved = false,
  onUpvote,
  onDownvote,
  onComment,
  onSave,
  onClick = () => { }
}) {
  return (
    <Box

      sx={{
        maxWidth: 345,
        background: colors.background,
        m: 2,
        borderRadius: 3,
        boxShadow: 3,
        fontFamily: 'Poppins, Arial, sans-serif',
        position: 'relative',
        background: colors.white,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        minHeight: 420,
        cursor: 'pointer'
      }}
      onClick={onClick}
    >
     
      {isloading ? (
        <Box sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ fontFamily: 'Poppins, Arial, sans-serif' }}>Loading...</Typography>
        </Box>
      ) : (
        <>
          <Box
            component="img"
            src={image}
            alt="House"
            sx={{
              width: '100%',
              height: 180,
              objectFit: 'cover',
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
            }}
          />
          <Box sx={{ p: 2, flex: 1 }}>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              gutterBottom
              sx={{ fontFamily: 'Poppins, Arial, sans-serif' }}
            >
              Type: {type}
            </Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              gutterBottom
              sx={{ fontFamily: 'Poppins, Arial, sans-serif' }}
            >
              {bedrooms} bedrooms
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: colors.primary, fontFamily: 'Poppins, Arial, sans-serif' }}
            >
              Price: {price}
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ fontFamily: 'Poppins, Arial, sans-serif' }}
            >
              {description}
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
              <LocationOnIcon sx={{ color: colors.secondary, mr: 0.5 }} fontSize="small" />
              <Typography
                variant="body2"
                sx={{ fontFamily: 'Poppins, Arial, sans-serif' }}
              >
                Address: {address}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              gap: 4,
              px: 2,
              pb: 2,
              pt: 1,

            }}
          >

            <Tooltip title="Like">
              <FavoriteBorderIcon sx={{ color: colors.primary }} />

            </Tooltip>

            <Tooltip title="Comment">

              <ChatBubbleOutlineIcon sx={{ color: colors.primary }} />

            </Tooltip>
            <Tooltip title={saved ? "Saved" : "Save"}>

              {saved ? <BookmarkIcon sx={{ color: colors.primary }} /> : <BookmarkBorderIcon sx={{ color: colors.primary }} />}

            </Tooltip>


          </Box>
        </>
      )}
    </Box>
  );
}

export default Housecard;