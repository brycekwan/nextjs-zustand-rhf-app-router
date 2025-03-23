import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TopMenu from "@/components/TopMenu";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TopMenu />
        <Typography variant="h4" component="h1">
          Sample App
        </Typography>
        <Typography variant="body1">
          This is a sample NextJS app that uses Zustand for state management and
          Formik for form handling.
        </Typography>
      </Box>
    </Container>
  );
}
