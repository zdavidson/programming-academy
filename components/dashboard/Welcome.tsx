"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { Typography } from "@mui/material";
import React from "react";

const Welcome = () => {
  const user = useUser();
  return <Typography>Hi, {user.user?.name}!</Typography>;
};

export default Welcome;
