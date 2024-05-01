import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import React from "react";
import { SxProps, Theme } from "@mui/material/styles";
import BaseButton from "./BaseButton";

const BaseLinkButton = ({
  href,
  children,
  light,
  sx,
}: {
  href: string;
  children: React.ReactNode;
  light?: boolean;
  sx?: SxProps<Theme>;
}) => {
  return (
    <Link href={href}>
      <BaseButton href={href} light={light} sx={sx}>
        {children}
      </BaseButton>
    </Link>
  );
};

export default BaseLinkButton;
