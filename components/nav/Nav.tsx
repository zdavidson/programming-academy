"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import NavElement from "./NavElement";
import EnrollButton from "../shared/EnrollButton";
import Logo from "./Logo";

const Nav = () => {
  const { user, error, isLoading } = useUser();
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
        {user ? (
          <a href="/api/auth/logout">Logout</a>
        ) : (
          <a href="/api/auth/login">Login</a>
        )}

        <EnrollButton />
      </Box>
    </Box>
  );
};

export default Nav;
