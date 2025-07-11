// Housecard.jsx
import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Tooltip,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteIcon from '@mui/icons-material/Favorite'; // For filled heart
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'; // For filled comment
import colors from '../common/colors';

function Housecard({
  image,
  type,
  price,
  description,
  bedrooms,
  bathrooms,
  condition,
  isloading,
  address,
  postDate,
  likesCount,
  commentsCount,
  upvoted = false,

  saved = false,
  onLiked,

  onComment,
  onSave,
  onClick = () => { }
}) {
  const formatDate = (dateString) => {
    if (!dateString) return '';
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch (e) {
      return dateString;
    }
  };

  return (
    <Box
      sx={{
        width: { xs: '90vw', sm: 320, md: 345 },
        maxWidth: 1,
        background: colors.background,
        m: { xs: 1, sm: 2 },
        borderRadius: 3,
        boxShadow: 3,
        fontFamily: 'Poppins, Arial, sans-serif',
        position: 'relative',
        background: colors.white,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        minHeight: 380,
        cursor: 'pointer',
        transition: 'transform 0.18s, box-shadow 0.18s',
        "&:hover": { transform: "translateY(-4px) scale(1.01)", boxShadow: 6 },
      }}
      onClick={onClick}
    >
      {isloading ? (

        <Box sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ fontFamily: 'Poppins, Arial, sans-serif', fontSize: { xs: 16, sm: 18 } }}>Loading...</Typography>
        </Box>
      ) : (
        <>
          <Box
            component="img"

            src={image}
            alt="House"
            sx={{
              width: '100%',
              height: { xs: 140, sm: 160, md: 180 },
              objectFit: 'cover',
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
            }} />
          <Box sx={{ p: { xs: 1.5, sm: 2 }, flex: 1 }}>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              gutterBottom
              sx={{ fontFamily: 'Poppins, Arial, sans-serif', fontSize: { xs: 13, sm: 14 } }}
            >
              Type: {type}
            </Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              gutterBottom
              sx={{ fontFamily: 'Poppins, Arial, sans-serif', fontSize: { xs: 13, sm: 14 } }}
            >
              {bedrooms} bedrooms, {bathrooms} bathrooms {/* Displaying bathrooms */}
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: colors.primary, fontFamily: 'Poppins, Arial, sans-serif', fontSize: { xs: 16, sm: 18 } }}
            >
              Price: {price}
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ fontFamily: 'Poppins, Arial, sans-serif', fontSize: { xs: 13, sm: 14 } }}
            >
              {description}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
              <LocationOnIcon sx={{ color: colors.secondary, mr: 0.5, fontSize: 18 }} fontSize="small" />
              <Typography
                variant="body2"
                sx={{ fontFamily: 'Poppins, Arial, sans-serif', fontSize: { xs: 13, sm: 14 } }}
              >
                Address: {address}
              </Typography>
            </Box>
            <Typography
              variant="caption"
              color="text.disabled"
              sx={{ fontFamily: 'Poppins, Arial, sans-serif', mt: 1, display: 'block' }}
            >
              Posted: {formatDate(postDate)} {/* Displaying post date */}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              gap: 2,
              px: { xs: 1, sm: 2 },
              pb: 2,
              pt: 1,
            }}
          >
            {/* Likes count */}
            <Tooltip title="Likes">
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <IconButton
                  size="small"
                  onClick={e => { e.stopPropagation(); onLiked && onLiked(); }}
                  sx={{ color: colors.primary, height: 20, width: 20 }}
                >
                  {upvoted ? <FavoriteIcon fontSize="small" /> : <FavoriteBorderIcon fontSize="small" />}
                </IconButton>
                <Typography variant="body2" sx={{ fontFamily: 'Poppins, Arial, sans-serif', fontSize: 13 }}>
                  {likesCount || 0}
                </Typography>
              </Box>
            </Tooltip>
            {/* Comments count */}
            <Tooltip title="Comments">
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <IconButton
                  size="small"
                  onClick={e => { e.stopPropagation(); onComment && onComment(); }}
                  sx={{ color: colors.primary, height: 20, width: 20 }}
                >
                  {commentsCount > 0 ? <ChatBubbleIcon fontSize="small" /> : <ChatBubbleOutlineIcon fontSize="small" />} {/* Filled icon if comments exist */}
                </IconButton>
                <Typography variant="body2" sx={{ fontFamily: 'Poppins, Arial, sans-serif', fontSize: 13 }}>
                  {commentsCount || 0}
                </Typography>
              </Box>
            </Tooltip>
            {/* Saved state */}
            <Tooltip title={saved ? "Saved" : "Save"}>
              <IconButton
                size="small"
                onClick={e => { e.stopPropagation(); onSave && onSave(); }}
                sx={{ color: colors.primary, height: 20, width: 20 }}
              >
                {saved ? <BookmarkIcon fontSize="small" /> : <BookmarkBorderIcon fontSize="small" />}
              </IconButton>
            </Tooltip>
          </Box>
        </>
      )}
    </Box>
  );
}

export default Housecard;