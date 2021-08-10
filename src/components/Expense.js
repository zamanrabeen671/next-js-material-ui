import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { GiMoneyStack } from 'react-icons/gi';

const Expense = () => {

    return (
        <div>
            <Paper className="dashboard-paper">
                <div className="dashboard-card-iconDiv expense-iconDiv">
                    <GiMoneyStack className="dashboard-logo" />
                </div>
                <div className="dashboard-text">

                    <Typography variant="subtitle1" className="dashboard-card-title"  >
                        Expense
                    </Typography>
                    <Typography variant="h5" className="dashboard-card-money expense-money">
                        $4021
                    </Typography>
                </div>
            </Paper>
        </div>
    );
};

export default Expense;