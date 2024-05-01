import Container from "@mui/material/Container";
import React from "react";

const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container maxWidth="lg" sx={{ padding: "1rem 0" }}>
      {children}
    </Container>
  );
};

export default PageContainer;
