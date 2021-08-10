import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {HiOutlineChartPie} from "react-icons/hi";

const Orders = () => {
  
  return (
    <div>
      <Paper className="dashboard-paper">
        <div className= "orders-iconDiv dashboard-card-iconDiv" >
          <HiOutlineChartPie className= "dashboard-logo" />
        </div>
        <div className="dashboard-text">
          <Typography variant="subtitle1" className="dashboard-card-title">Orders</Typography>
          <Typography variant="h5" className="orders-money dashboard-card-money">80</Typography>
        </div>
      </Paper>
    </div>
  );
};

export default Orders;
