import DashboardNav from "@/components/dashboard/DashboardNav";
import NextLesson from "@/components/dashboard/NextLesson";
import Progress from "@/components/dashboard/Progress";
import Sidebar from "@/components/dashboard/Sidebar";
import SPACING from "@/styles/spacing";
import Box from "@mui/material/Box";
import React from "react";

const Dashboard = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box
        sx={{
          width: SPACING.mainDashboardWidth,
        }}
      >
        <DashboardNav />
        <Box sx={{ padding: SPACING.containerPadding }}>
          <NextLesson />
          <Progress />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
