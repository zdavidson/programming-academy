import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import EnrollButton from "../shared/EnrollButton";
import SplitBox from "../shared/SplitBox";
import Image from "next/image";

const CourseDetails = () => {
  return (
    <SplitBox>
      <Box sx={{ width: "50%", textAlign: "center" }}>
        <Typography variant="h2">The Course</Typography>
        <Typography>
          Our instructors and mentors will guide you through our program
          designed to land you a job as a front-end developer.<br></br> The
          Bootcamp includes:<br></br> In-depth lessons and tutorials<br></br>{" "}
          Projects for your portfolio<br></br>
          Interview Training<br></br> Community
        </Typography>
        <EnrollButton />
      </Box>
      <Box sx={{ width: "50%" }}>
        <Image
          src="/pexels-2.jpg"
          height={600}
          width={450}
          alt="software-engineer"
        />
      </Box>
    </SplitBox>
  );
};

export default CourseDetails;
