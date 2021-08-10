import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { RiHandCoinLine } from 'react-icons/ri';

const Sales = () => {


    return (
        <div>
            <Paper className='dashboard-paper'>
                <div className='dashboard-card-iconDiv sales-iconDiv' >
                    <RiHandCoinLine className='dashboard-logo' />
                </div>
                <div className='dashboard-text'>

                    <Typography variant="subtitle1" className='dashboard-card-title'>
                        Sales
                </Typography>
                    <Typography variant="h5" className='sales-money dashboard-card-money'>
                        $4021
                </Typography>
                </div>
            </Paper>
        </div>
    );
};

export default Sales;