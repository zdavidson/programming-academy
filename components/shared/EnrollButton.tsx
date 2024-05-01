import React from "react";
import BaseButton from "./buttons/BaseButton";

const EnrollButton = ({ light }: { light?: boolean }) => {
  return (
    <a className="button__sign-up" href="/api/auth/signup">
      <BaseButton>Enroll Now</BaseButton>
    </a>
  );
};

export default EnrollButton;
