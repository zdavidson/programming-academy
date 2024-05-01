import React from "react";
import BaseButton from "./BaseButton";

const EnrollButton = ({ light }: { light?: boolean }) => {
  return (
    <BaseButton href="/enroll" light={light}>
      Enroll Now
    </BaseButton>
  );
};

export default EnrollButton;
