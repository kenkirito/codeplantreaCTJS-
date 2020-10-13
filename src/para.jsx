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
    
    padding: theme.spacing(3), 
    fontSize:'20px',
    fontWeight:'bold',
    
    textAlign: 'center',
    border: '4px solid ',
    borderColor: 'Black',
    fontFamily: "Charcoal",
    fontStyle: 'thicker',
    
    marginTop: '4%',
    marginBottom: '30%',
    boxShadow: ' 0 16px 70px -12.125px rgba(0,0,0,0.3)',
    borderRadius: '15px',
   
  },
  insideBox: {
    top: '20px',
    textAlign: 'center',
    borderRadius: '15px',
    width: '80px',
    marginLeft: '40vh',
    background:'#f9a825',
    border: '2px solid #FFD700',
    color: 'white'
  },
   text4:
    {
        padding:'8px 10px 6px 20px',
        fontFamily:'arial',
        fontSize:'20px',
        fontWeight:'bold',
        margin:'15px'
    },
 text3:
    {
        fontSize:'15px',
        backgroundColor:'#f5a11d',
        color:'white',
        paddingTop: '10px',
        marginLeft:'11.06vh',
        margin:'0px',
        borderBottomRightRadius:'12px',
        borderTopRightRadius:'12px'
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
          <Paper className={classes.paper}>Foundation Algorithum $Advance </Paper></span></div>
        </Grid>
        <Grid item xs>
        <div className="App">
        <span onMouseOver={MouseOver} onMouseOut={MouseOut}>
          <Paper className={classes.paper}>Data and Development</Paper></span></div>
        </Grid>
        <Grid item xs>
        <div className="App">
        <span onMouseOver={MouseOver} onMouseOut={MouseOut}>
        <paper className={classes.paper} style={{display:'flex', padding:'0px',margin:'17px 30px 15px 3px' }} >
            <paper variant='label' className={classes.text4}>Career Track</paper>
              <paper className={classes.text3}>Limited 50% <br /> Cashback </paper>
                </paper></span>
               </div>
        </Grid>
      </Grid>
      </div>
    </Container>
  );
}




