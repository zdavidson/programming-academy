import { COLORS } from "@/styles/colors";
import Box from "@mui/material/Box";
import React from "react";

const Reason = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        width: "15vw",
        padding: "1.5rem 2.5rem",
        borderRadius: "5rem",
        backgroundColor: COLORS.blue,
        color: "#FFF",
        margin: "0.5rem",
      }}
    >
      {children}
    </Box>
  );
};

export default Reason;
