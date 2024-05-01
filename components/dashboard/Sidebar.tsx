import SPACING from "@/styles/spacing";
import Box from "@mui/material/Box";
import React from "react";

const Sidebar = () => {
  const sidebarItems = [
    "Dashboard",
    "Course",
    "Community",
    "Messages",
    "Ask a Question",
    "Resources",
    "_______",
    "Help",
    "Settings",
  ];

  return (
    <Box
      sx={{ width: SPACING.sidebarWidth, padding: SPACING.containerPadding }}
    >
      Sidebar
    </Box>
  );
};

export default Sidebar;
