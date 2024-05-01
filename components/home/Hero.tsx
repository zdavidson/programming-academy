import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import EnrollButton from "../shared/EnrollButton";
import BaseLinkButton from "../shared/buttons/BaseLinkButton";
import Image from "next/image";
import { COLORS } from "@/styles/colors";

const Hero = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        height: "70vh",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography variant="h1">$150k per year</Typography>
        <Typography variant="body2" sx={{ marginBottom: "2rem" }}>
          That&apos;s how much the average front-end developer earns.<br></br>{" "}
          Don&apos;t waste another second. Start learning to code today.
        </Typography>
        <EnrollButton />
        <BaseLinkButton href="/" light sx={{ marginLeft: "1rem" }}>
          Learn More
        </BaseLinkButton>
      </Box>
      <Box>
        <Box
          sx={{
            height: "25vw",
            width: "25vw",
            backgroundColor: COLORS.blue,
            borderRadius: "100rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* <Image
            src="/test-image-4.png"
            height={500}
            width={1000}
            alt="portrait"
          /> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
