import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import EnrollButton from "../shared/EnrollButton";
import SplitBox from "../shared/SplitBox";
import Image from "next/image";

const Pricing = () => {
  return (
    <SplitBox>
      <Box sx={{ width: "50%" }}>
        <Image
          src="/pexels-3.jpg"
          height={600}
          width={450}
          alt="software-engineer"
        />
      </Box>
      <Box sx={{ width: "50%", textAlign: "center" }}>
        <Typography variant="h2">The Price</Typography>
        <Typography>
          Our program costs only a fraction of what the average US coding
          bootcamp costs. The tuition for most of these programs range from
          $10,000 - $20,000. Not us.<br></br> Our tuition is, and will always
          be, less than 1% of the average annual salary we anticipate that
          you&apos;ll have, once you graduate. Why? We’re not here to make an
          exorbitant profit, we’re here to make sure you succeed in your career.
          <br></br> The Bootcamp includes:
          <br></br>
          Frontend certificate<br></br> Portfolio with at least 5 major projects
          <br></br>
          Lifetime community access
        </Typography>
        <EnrollButton />
      </Box>
    </SplitBox>
  );
};

export default Pricing;
