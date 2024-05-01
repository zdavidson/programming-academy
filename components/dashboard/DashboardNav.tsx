import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import React from "react";
import Welcome from "./Welcome";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SPACING from "@/styles/spacing";

const DashboardNav = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: SPACING.containerPadding,
      }}
    >
      <Welcome />
      <Button>
        <NotificationsIcon />
      </Button>
    </Box>
  );
};

export default DashboardNav;
