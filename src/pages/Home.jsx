import React from "react";
import Houses from "../components/Houses";
import HomeSideBar from "../components/HomeSideBar";
import { Box } from "@mui/material";

function Home() {
  return (
    <Box sx={{ display: "flex", width: "100%", minHeight: "100vh" }}>
      {/* Sidebar: hidden on mobile, visible on md+ */}
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <HomeSideBar />
      </Box>
      {/* Houses: full width on mobile, flex on desktop */}
      <Box sx={{ flex: 1 }}>
        <Houses />
      </Box>
    </Box>
  );
}

export default Home;