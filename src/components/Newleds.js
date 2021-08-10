import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { AiOutlineUserAdd } from 'react-icons/ai';


const NewLeds = () => {

    return (
        <div>
            <Paper className="dashboard-paper">
                <div className='dashboard-card-iconDiv newleads-iconDiv'>
                    <AiOutlineUserAdd className='dashboard-logo' />
                </div>
                <div className='dashboard-text'>

                    <Typography variant="subtitle1" className="dashboard-card-title" >
                        New Leds
                    </Typography>
                    <Typography variant="h5" className="newleads-money dashboard-card-money">
                        250
                    </Typography>
                </div>
            </Paper>
        </div>
    );
};

export default NewLeds;