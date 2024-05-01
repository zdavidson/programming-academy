import { COLORS } from "@/styles/colors";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h2">About Us</Typography>
      <Image
        src="/software-engineering-headshot.png"
        alt="portrait"
        height={300}
        width={225}
        style={{
          margin: "2vw",
          borderRadius: "50%",
          border: `1px solid ${COLORS.blue}`,
        }}
      />
      <Typography variant="h4">Zoë Davidson</Typography>
      <Typography variant="h5">Instructor</Typography>
      <Typography variant="body2">zoe@davidsonprogramming.com</Typography>
      <Typography sx={{ textAlign: "center" }}>
        My name is Zoë Davidson, I&apos;m a software engineer and former
        professor. When I learned to code, my life completely changed -- for the
        better. I was able to gain a sense of financial freedom I&apos;d never
        known before. I hope to be able to give you the tools to attain the same
        results, if not better. Here&apos;s my LinkedIn if you&apos;d like to
        see a bit more about me.<br></br>
        <br></br> If you have any questions, please don&apos;t hesitate to reach
        out or send me an email.
      </Typography>
    </Box>
  );
};

export default AboutUs;
