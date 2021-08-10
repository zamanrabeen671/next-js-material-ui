import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import NewLeds from "../src/components/NewLeds";
import Sales from "../src/components/Sales";
import Orders from "../src/components/Orders";
import Expense from "../src/components/Expense";


export default function Dashboard() {
  return (
    <Container>
      <Grid container spacing={3} style={{ padding: "0 56px" }}>
        <Grid item xs={12} sm={6} lg={3}>
          <NewLeds />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Sales />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Orders />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Expense />
        </Grid>
      </Grid>
    </Container>
  );
}
