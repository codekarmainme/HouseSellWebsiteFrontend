// Housecardloading.jsx
import React from 'react';
import { Box, Skeleton } from '@mui/material';
import colors from '../common/colors'; // Assuming colors are available

function Housecardloading() {
  return (
    <Box
      sx={{
        width: { xs: '98vw', sm: 320, md: 345 },
        maxWidth: 1,
        background: colors.white,
        m: { xs: 1, sm: 2 },
        borderRadius: 3,
        boxShadow: 3,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        minHeight: 380, // Match minHeight of Housecard
      }}
    >
      {/* Image Skeleton */}
      <Skeleton variant="rectangular" width="100%" height={{ xs: 140, sm: 160, md: 180 }} />

      <Box sx={{ p: { xs: 1.5, sm: 2 }, flex: 1 }}>
        {/* Type Skeleton */}
        <Skeleton variant="text" width="60%" height={20} sx={{ mb: 1 }} />
        {/* Bedrooms/Bathrooms Skeleton */}
        <Skeleton variant="text" width="70%" height={20} sx={{ mb: 1 }} />
        {/* Price Skeleton */}
        <Skeleton variant="text" width="40%" height={24} sx={{ mb: 1 }} />
        {/* Description Skeleton */}
        <Skeleton variant="text" width="90%" height={18} sx={{ mb: 0.5 }} />
        <Skeleton variant="text" width="80%" height={18} sx={{ mb: 1 }} />
        {/* Address Skeleton */}
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          <Skeleton variant="circular" width={18} height={18} sx={{ mr: 0.5 }} />
          <Skeleton variant="text" width="50%" height={18} />
        </Box>
        {/* Post Date Skeleton */}
        <Skeleton variant="text" width="30%" height={16} sx={{ mt: 1 }} />
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
        {/* Likes Skeleton */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Skeleton variant="circular" width={20} height={20} />
          <Skeleton variant="text" width={20} height={18} />
        </Box>
        {/* Comments Skeleton */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Skeleton variant="circular" width={20} height={20} />
          <Skeleton variant="text" width={20} height={18} />
        </Box>
        {/* Save Skeleton */}
        <Skeleton variant="circular" width={20} height={20} />
      </Box>
    </Box>
  );
}

export default Housecardloading;