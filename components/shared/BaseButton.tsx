import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import React from "react";
import { SxProps, Theme } from "@mui/material/styles";

const BaseButton = ({
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
      <Button
        size="large"
        variant="outlined"
        sx={{
          backgroundColor: light ? "#fff" : "#000",
          border: light ? "1px solid black" : "1px solid white",
          borderRadius: "2rem",
          textTransform: "none",

          ".MuiTypography-root": {
            color: light ? "#000" : "#fff",
            fontWeight: 800,
          },

          "&:hover": {
            backgroundColor: light ? "#000" : "#fff",
            border: light ? "1px solid white" : "1px solid black",

            ".MuiTypography-root": {
              color: light ? "#fff" : "#000",
            },
          },
          ...sx,
        }}
      >
        <Typography>{children}</Typography>
      </Button>
    </Link>
  );
};

export default BaseButton;
