import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import BookMarkIcon from "@mui/icons-material/Bookmark";
import colors from '../common/colors';
import { Box, Typography } from "@mui/material";
import { LineChart, BarChart } from '@mui/x-charts';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import PostModal from "../components/post_modal";
import React, { useState } from "react";
import SuccessModal from "../components/SuccessModal";
import { useDispatch, useSelector } from 'react-redux';
import { postHouse } from '../state/houses/HouseSlice';
import { toast } from 'react-toastify';
import { useEffect } from "react";
import  axios  from "axios";
function StatBox({ icon, value, label, bgColor, textColor }) {

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        background: bgColor,
        borderRadius: 2,
        boxShadow: 2,
        px: 3,
        py: 2,
        width: 180,
        ml: { xs: 0, sm: 3 },
        mt: { xs: 2, sm: 0 },
      }}
    >
      {icon}
      <Box>
        <Typography
          sx={{
            fontFamily: "Poppins, Arial, sans-serif",
            fontWeight: 600,
            fontSize: 22,
            color: textColor,
          }}
        >
          {value}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins, Arial, sans-serif",
            fontSize: 14,
            color: textColor,
          }}
        >
          {label}
        </Typography>
      </Box>
    </Box>
  );
}

function MyPosts() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.houses);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    uid: user['id'],
    type: '',
    description: '',
    price: '',
    address: '',
    bedrooms: '',
    bathrooms: '',
    area_sqft: '',
    terms: '',
    remark: '',
    images: [],
    postdate: new Date().toISOString().split('T')[0],
  });
  const [uploadingImages, setUploadingImages] = useState(false);


  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    setUploadingImages(true); // Indicate that upload is in progress

    const formDataForUpload = new FormData();
    files.forEach(file => {
      formDataForUpload.append('images', file); // 'images' will be the field name on the backend
    });

    try {
      // Step 1: Upload images to a dedicated upload endpoint
      const uploadResponse = await axios.post('http://localhost:5000/api/upload/images', formDataForUpload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        
      });

      const uploadedUrls = uploadResponse.data.imageUrls;

      setFormData((prev) => ({
        ...prev,
        images: uploadedUrls, 
      }));
      toast.success('Images uploaded successfully!');
    } catch (error) {
      console.error('Image upload error:', error);
      toast.error('Failed to upload images.');
    } finally {
      setUploadingImages(false); // Reset upload status
    }
  };


  const handleFormChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'images') {

      handleImageUpload(e);
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    const dataToSend = {
      uid: user['id'],
      type: formData.type,
      description: formData.description,
      price: parseFloat(formData.price),
      address: formData.address,
      bedrooms: parseInt(formData.bedrooms),
      bathrooms:parseInt(formData.bathrooms),
      area_sqft:parseInt(formData.area_sqft),
      termandcondition: formData.terms,
      images: formData.images,
      postdate: formData.postdate,
    };


    dispatch(postHouse(dataToSend));
  };


  useEffect(() => {

    if (status === 'succeeded') {
      toast.success('House posted successfully!');
      setModalOpen(false);

      setFormData({
        uid: user['id'],
        type: '',
        description: '',
        price: '',
        address: '',
        bedrooms: '',
        bathrooms: '',
        area_sqft: '',
        terms: '',
        remark: '',
        images: [],
        postdate: new Date().toISOString().split('T')[0],
      });
    } else if (status === 'failed') {
      toast.error(`Error posting house: ${error}`);
    }
  }, [status, error]);
  const theme = createTheme({
    typography: {
      fontFamily: 'Poppins, Arial, sans-serif',
    },
  });
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const likesData = [0, 0, 0, 0, 0, 0, 0];
  const commentsData = [0, 0, 0, 0, 0, 0, 0];
  const savedData = [0, 0, 0, 0, 0, 0, 0];
  const stats = [
    {
      value: 0,
      label: "Likes",
      bgColor: colors.primary,
      textColor: colors.light,
      icon: <FavoriteIcon sx={{ color: colors.light, fontSize: 32 }} />,
    },
    {
      value: 0,
      label: "Comments",
      bgColor: colors.secondary,
      textColor: colors.dark,
      icon: <CommentIcon sx={{ color: colors.dark, fontSize: 32 }} />,
    },
    {
      value: 0,
      label: "Saved",
      bgColor: colors.dark,
      textColor: colors.light,
      icon: <BookMarkIcon sx={{ color: colors.light, fontSize: 32 }} />,
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: '100vh',
          width: '100%',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          mt: "80px",
        }}
      >
        {/* Left Section */}
        <Box sx={{ width: { xs: '100%', md: '50%' }, px: { xs: 1, md: 0 } }}>
          <Typography
            color={colors.primary}
            sx={{
              p: 2,
              fontSize: { xs: 20, md: 24 },
              textAlign: { xs: "center", md: "left" }
            }}
          >
            Posts summary
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "stretch", sm: "center" },
              justifyContent: { xs: "center", sm: "center" },
              gap: 1.5,
              background: colors.background,
              borderRadius: 2,
              boxShadow: 2,
              px: 3,
              py: 2,
              ml: { xs: 0, sm: 3 },
            }}
          >
            {stats.map((stat, idx) => (
              <StatBox
                key={idx}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                bgColor={stat.bgColor}
                textColor={stat.textColor}
              />
            ))}
          </Box>
          <Box
            sx={{
              mt: 5,
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Line Chart Example */}
            <Box sx={{
              background: colors.white,
              p: 3,
              borderRadius: 2,
              boxShadow: 2,
              mb: { xs: 3, md: 0 },
              width: { xs: "100%", md: 350 }
            }}>
              <Typography sx={{ fontFamily: "Poppins, Arial, sans-serif", mb: 2 }}>
                Post interaction
              </Typography>
              <LineChart
                xAxis={[{ scaleType: 'point', data: days }]}
                series={[
                  { data: likesData, label: 'Likes', color: colors.primary, showMark: false, area: true },
                  { data: commentsData, label: 'Comments', color: colors.secondary, showMark: false, area: true },
                  { data: savedData, label: 'Saved', color: colors.dark, showMark: false, area: true }
                ]}
                width={320}
                height={220}
              />
            </Box>
            {/* Bar Chart Example */}
            <Box sx={{
              background: colors.white,
              p: 3,
              borderRadius: 2,
              boxShadow: 2,
              width: { xs: "100%", md: 350 }
            }}>
              <Typography sx={{ fontFamily: "Poppins, Arial, sans-serif", mb: 2 }}>
                Post Engagement
              </Typography>
              <BarChart
                xAxis={[{ scaleType: 'band', data: days }]}
                series={[{ data: commentsData, label: 'impressions', color: colors.secondary }]}
                width={320}
                height={220}
              />
            </Box>
          </Box>
        </Box>

        {/* Divider for desktop only */}
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            display: { xs: "none", md: "block" },
            color: colors.primary,
            width: '2px',
            pl: 1
          }}
        />

        {/* Right Section */}
        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: { xs: 4, md: 0 }
          }}>
          <Box
            sx={{
              width: '90%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              p: 2,
              mb: 2
            }}
          >
            <Typography
              sx={{
                color: colors.primary,
                fontSize: { xs: 20, md: 24 }
              }}
            >
              Your Posts
            </Typography>
            <Button
              variant="contained"
              sx={{
                width: 140,
                fontFamily: 'Poppins, Arial, sans-serif',
                fontWeight: 500,
                fontSize: 16,
                textTransform: "none",
                whiteSpace: "nowrap",
                background: colors.secondary,
                color: colors.dark,
                boxShadow: 'none',
                borderRadius: 2,
                '&:hover': {
                  background: colors.primary,
                  color: colors.light,
                },
              }}
              onClick={() => setModalOpen(true)}
            >
              Create Post
            </Button>
          </Box>
          <Box
            sx={{
              width: '90%',
              height: { xs: 'auto', md: '70vh' },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              p: 2
            }}
          >
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              sx={{
                width: 140,
                fontFamily: 'Poppins, Arial, sans-serif',
                fontWeight: 500,
                fontSize: 16,
                textTransform: "none",
                whiteSpace: "nowrap",
                background: colors.secondary,
                color: colors.dark,
                boxShadow: 'none',
                borderRadius: 2,
                '&:hover': {
                  background: colors.primary,
                  color: colors.light,
                },
              }}
              onClick={() => setModalOpen(true)}
            >
              Create Post
            </Button>
          </Box>
        </Box>
      </Box>
      <PostModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleSubmit}
        form={formData}
        onFormChange={handleFormChange}
        uploading={uploadingImages || status === 'loading'}
      />
      {/* <SuccessModal open={successOpen} onClose={() => setSuccessOpen(false)} /> */}
    </ThemeProvider>
  );
}

export default MyPosts;