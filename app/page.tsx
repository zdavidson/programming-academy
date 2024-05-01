import AboutUs from "@/components/home/AboutUs";
import Hero from "@/components/home/Hero";
import CourseDetails from "@/components/home/CourseDetails";
import Why from "@/components/home/Why";
import Box from "@mui/material/Box";
import React from "react";
import Pricing from "@/components/home/Pricing";
import Curriculum from "@/components/home/Curriculum";
import PageContainer from "@/components/shared/PageContainer";
import Nav from "@/components/nav/Nav";

const Home = () => {
  return (
    <PageContainer>
      <Nav />
      <Hero />
      <Why />
      <CourseDetails />
      <Pricing />
      <Curriculum />
      <AboutUs />
    </PageContainer>
  );
};

export default Home;
