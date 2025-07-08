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
import { postHouse } from '../state/houses/HouseSlice'; // Import the async thunk
import { toast } from 'react-toastify';
import { useEffect } from "react";

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
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.houses); // Get status and error from Redux state

  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    uid: 'some_user_id', // Replace with actual user ID (e.g., from auth context or Redux)
    type: '',
    description: '',
    price: '',
    address: '', // This will hold the selected city
    bedrooms: '',
    bathrooms: '', // This field is in your backend but not in your frontend form
    area_sqft: '', // This field is in your backend but not in your frontend form
    terms: '', // Frontend field for terms and conditions
    remark: '',
    images: [], // To hold image URLs after upload (or File objects initially)
    postdate: new Date().toISOString().split('T')[0], // YYYY-MM-DD
  });
  const [uploadingImages, setUploadingImages] = useState(false); // State for image upload status

  // --- Image Upload Handler (Simulated/Placeholder) ---
  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    setUploadingImages(true);
    // In a real application, you would send these files to an image upload service
    // e.g., Cloudinary, AWS S3, or your own backend for file storage.
    // This is a placeholder for demonstration:
    try {
      const uploadedUrls = files.map(file => `https://example.com/images/${file.name}`); // Replace with actual upload logic
      // For actual upload, you'd use FormData and an Axios call to a file upload endpoint
      // const uploadFormData = new FormData();
      // files.forEach(file => uploadFormData.append('images', file));
      // const uploadResponse = await axios.post('/api/upload-images', uploadFormData);
      // const uploadedUrls = uploadResponse.data.urls; // Assuming your upload endpoint returns URLs

      setFormData((prev) => ({
        ...prev,
        images: uploadedUrls, // Store the URLs
      }));
      toast.success('Images selected/uploaded successfully!');
    } catch (error) {
      console.error('Image upload error:', error);
      toast.error('Failed to upload images.');
    } finally {
      setUploadingImages(false);
    }
  };

  const handleFormChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'images') {
      // If it's the file input, call the image upload handler
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

    // Mapping frontend names to backend expected names
    const dataToSend = {
      uid: formData.uid,
      type: formData.type,
      description: formData.description,
      price: parseFloat(formData.price), // Ensure price is a number
      address: formData.address, // `address` in backend corresponds to `city` in frontend
      bedrooms: parseInt(formData.bedrooms), // Ensure bedrooms is an integer
      // bathrooms: formData.bathrooms, // Add if you include in form
      // area_sqft: formData.area_sqft, // Add if you include in form
      termandcondition: formData.terms, // `termandcondition` in backend corresponds to `terms` in frontend
      images: formData.images,
      postdate: formData.postdate,
    };

    // Dispatch the Redux thunk
    dispatch(postHouse(dataToSend));
  };

  // Listen for changes in the Redux `status` for feedback
  useEffect(() => {
    if (status === 'succeeded') {
      toast.success('House posted successfully!');
      setModalOpen(false); // Close modal on success
      // Optionally reset form here:
      setFormData({
        uid: 'some_user_id',
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
  const likesData = [10, 20, 15, 30, 25, 40, 35];
  const commentsData = [5, 8, 6, 12, 10, 15, 13];
  const savedData = [2, 4, 3, 6, 5, 7, 6];
  const stats = [
    {
      value: 123,
      label: "Likes",
      bgColor: colors.primary,
      textColor: colors.light,
      icon: <FavoriteIcon sx={{ color: colors.light, fontSize: 32 }} />,
    },
    {
      value: 45,
      label: "Comments",
      bgColor: colors.secondary,
      textColor: colors.dark,
      icon: <CommentIcon sx={{ color: colors.dark, fontSize: 32 }} />,
    },
    {
      value: 67,
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