import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import NavElement from "./NavElement";
import EnrollButton from "../shared/EnrollButton";
import Logo from "./Logo";

const Nav = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Logo />
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <NavElement href="/contact-us">Contact Us</NavElement>
        <NavElement href="/login">Login</NavElement>
        <EnrollButton />
      </Box>
    </Box>
  );
};

export default Nav;
