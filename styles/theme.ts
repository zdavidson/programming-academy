"use client";
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    h1: {
      fontSize: "4rem",
      fontWeight: 800,
      marginBottom: "1rem",
    },
    h2: {
      fontSize: "3rem",
      fontWeight: 800,
      marginBottom: "1rem",
    },
    body2: {
      fontSize: "1.25rem",
    },
  },
});

export default theme;
