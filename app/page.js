"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import tittle from "../app/static/tittle.json";
import Animation from "../app/static/Animation.json";
import React from "react";
import { Grid } from "@mui/material";
import Container from "@mui/material/Container/Container";
import Divider1 from "./components/Divider1.jsx";
import Slider1 from "./components/Slider1";
import Divider2 from "./components/Divider2";
import HomeCard from "./components/HomeCard";

const page = () => {
  return (
    <Container >
      <Grid container>
        <Grid item lg={6} md={12}>
          <Player
            autoplay
            loop
            src={tittle}
            style={{ height: "500px", width: "600px" }}
            speed={0.5}
          ></Player>
        </Grid>
        <Grid item xs={{display:'none'}} lg={6}>
          <video
            autoplay
            loop
            src="https://cdnl.iconscout.com/lottie/premium/thumb/welcome-home-hand-draw-word-5457378-4581464.mp4"
            style={{ height: "500px", width: "600px" }}
            speed={0.5}
            controls
          ></video>
        </Grid>
      </Grid>

      <Divider1 />
      <Slider1/>
      <Divider2/>
      <HomeCard/>
    </Container>
  );
};

export default page;
