import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Link from "../src/Link";
import Newleads from "../src/components/Newleds";

// import Demo from "./index";
export default function Dashboard() {
  return (
    <Container maxWidth="md">
      {/* <Demo /> */}
      <Box>
        <Newleads />
      </Box>
    </Container>
  );
}