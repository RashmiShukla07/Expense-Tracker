import React, {useContext} from 'react'
import {Card, CardHeader, CardContent, Typography, Grid, Divider} from '@material-ui/core';
import  {ExpenseTrackerContext} from '../../context/context';

import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';

const Main = () => {
    const classes = useStyles(); 
    const { balance } = useContext(ExpenseTrackerContext);

    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
            <CardContent>
                <Typography align="center" varaint="h5">Total Balance $ { balance }</Typography>
                <Typography varaint="subttitle1" style={{lineHeight: '1.5em', marginTop: '20px'}}>
                    {/* Infocard */}
                    Try saying: Add income for $100 in Catergory Salary for Monday ...
                </Typography>
                <Divider />
                <Form />
            </CardContent>
            <CardContent className={classes.cartContent.CardContent}>
                <Grid container spacing ={2}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
  )
}

export default Main