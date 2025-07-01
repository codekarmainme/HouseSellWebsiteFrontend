import FavoriteIcon from "@mui/icons-material/Favorite";
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
// Reusable stat box component
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
        ml: 3,
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
  const [modalOpen, setModalOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  const [form, setForm] = useState({
    type: "",
    bedrooms: "",
    description: "",
    terms: "",
    price: "",
    city: "",
    remark: "",
    images: [],
  });
  const [uploading, setUploading] = useState(false);

  const handleFormChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? Array.from(files) : value,
    }));
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    // handle submit logic here
    setModalOpen(false);
    setSuccessOpen(true);
  };
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
      label: "Likes",
      bgColor: colors.secondary,
      textColor: colors.dark,
      icon: <FavoriteIcon sx={{ color: colors.dark, fontSize: 32 }} />,
    },
    {
      value: 67,
      label: "Likes",
      bgColor: colors.dark,
      textColor: colors.light,
      icon: <FavoriteIcon sx={{ color: colors.light, fontSize: 32 }} />,
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box
        height='100vh'
        width='100%'
        sx={{
          display: 'flex',
          mt: "80px",
        }}      >
        <Box>
          <Typography
            color={colors.primary}
            sx={{
              p: 2
            }}

          >
            Posts summary
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1.5,
              background: colors.background,
              borderRadius: 2,
              boxShadow: 2,
              px: 3,
              py: 2,

              ml: 3,
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
          <Box sx={{ mt: 5, display: "flex", gap: 4, justifyContent: "center" }}>
            {/* Line Chart Example */}
            <Box sx={{ background: colors.white, p: 3, borderRadius: 2, boxShadow: 2 }}>
              <Typography sx={{ fontFamily: "Poppins, Arial, sans-serif", mb: 2 }}>
                Likes Over Time
              </Typography>
              <LineChart
                xAxis={[{ scaleType: 'point', data: days }]}
                series={[
                  { data: likesData, label: 'Likes', color: colors.primary, showMark: false, area: true },
                  { data: commentsData, label: 'Comments', color: colors.secondary, showMark: false, area: true },
                  { data: savedData, label: 'Saved', color: colors.dark, showMark: false, area: true }
                ]}
                width={350}
                height={250}

              />
            </Box>
            {/* Bar Chart Example */}
            <Box sx={{ background: colors.white, p: 3, borderRadius: 2, boxShadow: 2 }}>
              <Typography sx={{ fontFamily: "Poppins, Arial, sans-serif", mb: 2 }}>
                Post Engagement
              </Typography>
              <BarChart
                xAxis={[{ scaleType: 'band', data: days }]}
                series={[{ data: commentsData, label: 'impressions', color: colors.secondary }]}
                width={350}
                height={250}
              />
            </Box>
          </Box>
        </Box>

        <Divider orientation="vertical" sx={{ color: colors.primary, width: '2px', pl: 1 }} />
        <Box
          sx={{
            width: '50%'
          }}>
          <Box
            sx={{
              width: '90%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              p: 2
            }}
          >
            <Typography

              sx={{


                color: colors.primary,

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
              height:'70vh',
              display: 'flex',
              flexDirection:'column',
              alignItems: 'center',
              justifyContent: 'center',
              p: 2
            }}
          >
            
            <Button
              variant="contained"
              startIcon={<AddIcon/>}
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
        onSubmit={handleModalSubmit}
        form={form}
        onFormChange={handleFormChange}
        uploading={uploading}
      />
      <SuccessModal open={successOpen} onClose={() => setSuccessOpen(false)} />
    </ThemeProvider>
  );
}

export default MyPosts;