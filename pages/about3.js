import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Link from "../src/Link";
// import Demo from "./index";
export default function About3() {
  return (
    <Container maxWidth="sm">
      {/* <Demo /> */}
      <Box my={4}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          naked
          href="/"
        >
          dcsfd f sd fsd fd f s fsd ds df About3
        </Button>
      </Box>
    </Container>
  );
}
