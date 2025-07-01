import React, { useState } from 'react';
import { Box, colors, InputAdornment, TextField } from '@mui/material';
import Housecard from './Housecard';
import Housecardloading from './Housecardloading';
import houses from '../assets/fake-data/Housesdata.jsx';
import HouseDetailModal from './house_detail_modal';
import Searchicon from '@mui/icons-material/Search';

function Houses() {
  const [isloading, setIsloading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [search, setSearch] = useState('');

  const handleCardClick = (house) => {
    setSelectedHouse(house);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedHouse(null);
  };

  // Filter houses based on search input (type, address, description)
  const filteredHouses = houses.filter(
    (house) =>
      house.type.toLowerCase().includes(search.toLowerCase()) ||
      house.address.toLowerCase().includes(search.toLowerCase()) ||
      house.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Box sx={{ flex: 1, mt: '64px', p: 3 }}>
        <TextField
          style={{ width: '50%',position:'sticky' }}
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
          {isloading
            ? Array.from({ length: 4 }).map((_, idx) => (
              <Box key={idx}>
                <Housecardloading />
              </Box>
            ))
            : filteredHouses.map((house, idx) => (
              <Box key={idx}>
                <Housecard
                  {...house}
                  isloading={isloading}
                  onClick={() => handleCardClick(house)}
                />
              </Box>
            ))}
        </Box>
      </Box>
      <HouseDetailModal
        open={modalOpen}
        onClose={handleModalClose}
        {...(selectedHouse || {})}
      />
    </>
  );
}

export default Houses;