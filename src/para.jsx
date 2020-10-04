import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    border: '4px solid ',
    borderColor: 'Black',
    fontFamily: "Charcoal",
    fontStyle: 'thicker',
    fontWeight: '900',
    marginTop: '30%',
    marginBottom: '30%',
    boxShadow: ' 0 16px 70px -12.125px rgba(0,0,0,0.3)',
    borderRadius: '15px'
  },
}));

export default function AutoGrid() {
  const classes = useStyles();
  function MouseOver(event) {
    event.target.style.background = '#1a237e';
    event.target.style.color = 'white';
    event.target.style.borderColor = 'White';
  }
  function MouseOut(event){
    event.target.style.background="";
    event.target.style.color = 'Black';
    event.target.style.borderColor = 'Black';
  }
  return (
    <Container fixed>
    <div className={classes.root} >
      <Grid container spacing={3}>
        <Grid item xs>
        <div className="App">
        <span onMouseOver={MouseOver} onMouseOut={MouseOut}>
          <Paper className={classes.paper}>Foundation Algorithum $Advance</Paper></span></div>
        </Grid>
        <Grid item xs>
        <div className="App">
        <span onMouseOver={MouseOver} onMouseOut={MouseOut}>
          <Paper className={classes.paper}>Data and Development</Paper></span></div>
        </Grid>
        <Grid item xs>
        <div className="App">
        <span onMouseOver={MouseOver} onMouseOut={MouseOut}>
          <Paper className={classes.paper}>Career Track</Paper></span></div>
        </Grid>
      </Grid>
    </div>
    </Container>
  );
}