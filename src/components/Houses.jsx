// Houses.jsx
import React, { useState, useEffect } from 'react';
import { Box, colors, InputAdornment, TextField, Typography } from '@mui/material';
import Housecard from './Housecard';
import Housecardloading from './Housecardloading';

import HouseDetailModal from './house_detail_modal';
import Searchicon from '@mui/icons-material/Search';

import { useDispatch, useSelector } from 'react-redux';
import { fetchHouses } from '../state/houses/HouseSlice';
import axios from 'axios';
import { toast } from 'react-toastify';
function Houses() {
  const dispatch = useDispatch();
  const { houses, status, error } = useSelector((state) => state.houses);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [search, setSearch] = useState('');

  const isloading = status === 'loading';
  const user = useSelector((state) => state.auth.user); 
  const userId = user?.id;
  useEffect(() => {
    
    if (status === 'idle') {
      dispatch(fetchHouses());
    }
  }, [status, dispatch]);


  const handleCardClick = (house) => {
    setSelectedHouse(house);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedHouse(null);
  };

  const filteredHouses = houses.filter(
    (house) =>
      house.type.toLowerCase().includes(search.toLowerCase()) ||
      house.address.toLowerCase().includes(search.toLowerCase()) ||
      house.description.toLowerCase().includes(search.toLowerCase())
  );
  const likeHouse = async (houseId) => {
    if (!userId) {
      toast.error('Please log in to like a house.');
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:5000/api/houses/${houseId}/like/${userId}`
      );
      toast.success(response.data.message || 'Like status updated!');
      dispatch(fetchHouses());
    } catch (error) {
      console.error('Error updating like status:', error);
      
      toast.error(error.response?.data?.message || 'Failed to update like status.');
    }
  };
  return (
    <>
      <Box sx={{ flex: 1, mt: '64px', p: 3 }}>
        <TextField
          style={{ width: '50vh', position: 'sticky' }}
          variant="outlined"
          placeholder="Search by type, address, or description"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            mb: 3,
            fontFamily: 'Poppins, Arial, sans-serif',
            background: '#fff',
            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#8884FF',
            },

            '& .MuiInputLabel-root.Mui-focused': {
              color: '#8884FF',
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Searchicon />
              </InputAdornment>
            ),
            style: { fontFamily: 'Poppins, Arial, sans-serif' },
          }}
          InputLabelProps={{
            style: { fontFamily: 'Poppins, Arial, sans-serif' },
          }}
        />
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 3,
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}
        >
          {isloading ? (
            Array.from({ length: 4 }).map((_, idx) => (
              <Box key={idx}>
                <Housecardloading />
              </Box>
            ))
          ) : status === 'failed' ? (
            <Typography color="error">Error loading houses: {error}</Typography>
          ) : filteredHouses.length === 0 && status === 'succeeded' ? (
            <Typography>No houses found matching your search criteria.</Typography>
          ) : (
            filteredHouses.map((house, idx) => (
              <Box key={house.id || idx}>
                <Housecard
                  key={house.id}

                  image={house.images[0]}
                  type={house.type}
                  price={house.price}
                  description={house.description}
                  bedrooms={house.bedrooms}
                  bathrooms={house.bathrooms || 0}
                  address={house.address}
                  postDate={house.postdate}
                  likesCount={house.numberoflikes || 0}
                  commentsCount={house.numberofcomments || 0}

                  saved={house.numberofsaved > 0}
                  onClick={() => {

                    handleCardClick(house)
                  }}
                  onLiked={() => likeHouse(house.id)}
                />
              </Box>
            ))
          )}
        </Box>
      </Box>
      <HouseDetailModal
        open={modalOpen}
        onClose={handleModalClose}
        {...(selectedHouse || {})}
        onUpvote={likeHouse}
      />
    </>
  );
}

export default Houses;