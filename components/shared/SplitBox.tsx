import Box from "@mui/material/Box";
import React from "react";

const SplitBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        height: "70vh",
        margin: "4rem 0",
        alignItems: "center",
      }}
    >
      {children}
    </Box>
  );
};

export default SplitBox;
