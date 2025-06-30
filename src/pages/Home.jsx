import React from "react";
import Houses from "../components/Houses";
import HomeSideBar from "../components/HomeSideBar";

function Home() {

  return (
    <div style={{ display: "flex",}}>
      <HomeSideBar />

      <Houses />

    </div>
  );
}

export default Home;
