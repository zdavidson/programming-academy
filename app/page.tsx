import AboutUs from "@/components/home/AboutUs";
import Hero from "@/components/home/Hero";
import CourseDetails from "@/components/home/CourseDetails";
import Why from "@/components/home/Why";
import Box from "@mui/material/Box";
import React from "react";
import Pricing from "@/components/home/Pricing";
import Curriculum from "@/components/home/Curriculum";

const Home = () => {
  return (
    <Box>
      <Hero />
      <Why />
      <CourseDetails />
      <Pricing />
      <Curriculum />
      <AboutUs />
    </Box>
  );
};

export default Home;
