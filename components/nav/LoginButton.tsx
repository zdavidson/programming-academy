"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import Box from "@mui/material/Box";
import React from "react";

const LoginButton = () => {
  const { user } = useUser();
  return (
    <Box sx={{ marginRight: "1vw" }}>
      {user ? (
        <a href="/api/auth/logout">Logout</a>
      ) : (
        <a href="/api/auth/login">Login</a>
      )}
    </Box>
  );
};

export default LoginButton;
