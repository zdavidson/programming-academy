import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import Reason from "./Reason";

const Why = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        height: "50vh",
      }}
    >
      <Typography variant="h2">Why Code?</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        <Reason>
          <Typography sx={{ fontWeight: "800" }}>High Income</Typography>
          <Typography>
            Software engineers have the potential to earn high salaries. The
            average front end developer in the United States earns about
            $150,000 annually
          </Typography>
        </Reason>
        <Reason>
          <Typography sx={{ fontWeight: "800" }}>Remote Work</Typography>
          <Typography>
            Software engineers can work 100% remotely, giving them the freedom
            to work from wherever they prefer.
          </Typography>
        </Reason>{" "}
        <Reason>
          <Typography sx={{ fontWeight: "800" }}>Travel</Typography>
          <Typography>
            Because software engineers are able to work from anywhere, they can
            travel the world without needing to take time off.
          </Typography>
        </Reason>
        <Reason>
          <Typography sx={{ fontWeight: "800" }}>High Income</Typography>
          <Typography>
            Software engineers have the potential to earn high salaries. The
            average front end developer in the United States earns about
            $150,000 annually
          </Typography>
        </Reason>
        <Reason>
          <Typography sx={{ fontWeight: "800" }}>Remote Work</Typography>
          <Typography>
            Software engineers can work 100% remotely, giving them the freedom
            to work from wherever they prefer.
          </Typography>
        </Reason>{" "}
        <Reason>
          <Typography sx={{ fontWeight: "800" }}>Travel</Typography>
          <Typography>
            Because software engineers are able to work from anywhere, they can
            travel the world without needing to take time off.
          </Typography>
        </Reason>
      </Box>
    </Box>
  );
};

export default Why;
