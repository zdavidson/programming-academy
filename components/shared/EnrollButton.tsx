"use client";
import React from "react";
import BaseButton from "./buttons/BaseButton";
import { useUser } from "@auth0/nextjs-auth0/client";

const EnrollButton = ({ light }: { light?: boolean }) => {
  const { user } = useUser();
  return user ? (
    <a href="/dashboard">
      <BaseButton>Go to Dashboard</BaseButton>
    </a>
  ) : (
    <a className="button__sign-up" href="/api/auth/signup">
      <BaseButton>Enroll Now</BaseButton>
    </a>
  );
};

export default EnrollButton;
