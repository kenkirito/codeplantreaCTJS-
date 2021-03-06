import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import call from './img/blober.png';
import java from './img/java.png'; 
import python from './img/python.png'; 
import chip from './img/chip.png';
import computer from './img/computer.png';
import moniter from './img/monitor.png';
import c from './img/c.png';
import cplus from './img/c++.png';
import hacker from './img/hacker.png';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    border: '6px solid White',
    backgroundColor: '#F0F8FF',
    marginLeft: theme.spacing(5),
    marginBottom: theme.spacing(8),
    verticalAlign: 'middle',
    marginRight: '20%',
    textIndent: '20px',
    fontFamily: "sans-serif",
    color: "#040f4f",
    boxShadow: ' 0 16px 70px -12.125px rgba(0,0,0,0.3)',
    borderTopLeftRadius: '20px',
    borderBottomLeftRadius: '20px',
  },
   p:{
    Color: "#040f4f",
    /*textAlign:"right",
    paddingRight: '3rem',
    paddingLeft: '3rem'*/
  },
  textAlign: {
    textAlign:"center", 
    color: "#040f4f",
    paddingBottom: '40px'
  },
  line : {
    textDecoration: "underline",
    textDecorationColor: "#ffab00",
  },
  media: {
    /*height: '80px',*/
   /* marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',*/
    backgroundColor: 'white',
    padding: '10px', /* Some padding */
    width: '80px' /* Set a small width */
  },
  image: {
    backgroundImage: 'url('+call+')',
    display: 'block',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  spacing: {
    marginRight: theme.spacing(5),
    marginLeft: '20%',
    padding: theme.spacing(1),
    border: '6px solid White',
    backgroundColor: '#F0F8FF',
    marginBottom: theme.spacing(5),
    verticalAlign: 'middle',
    textIndent: '80px',
    fontFamily: "sans-serif",
    color: "#040f4f",
    borderTopRightRadius: '20px',
    borderBottomRightRadius: '20px',
    boxShadow: ' 0 16px 70px -12.125px rgba(0,0,0,0.3)',
  },                                                                       
}));



  const defaultProps = {
    bgcolor: 'background.paper',
    m: -6,
    style: { width: '100px', height: '100px' },
    borderColor: 'text.primary',
    border: '3px solid Black',
    borderRadius: '2px',
    boxShadow: ' 0 16px 70px -12.125px rgba(0,0,0,0.3)',
    display: 'flex',
   
  };



  const FunctionName = () =>
  {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <h1 className={classes.textAlign}> OUR MARV<span className={classes.line}>ALLOUS</span> Approch</h1>
        <div class="center" className={classes.image}>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Paper  className={classes.spacing} ><h3>Faculty</h3>
          <p className={classes.p}>java is a general purpose language which is now used </p>
          <Box display="flex"  border={1} {...defaultProps} className={classes.img}  >
          <img className={classes.media}
          display="flex"
          src={java} alt="Math Problems"/ >
            </Box>
            </Paper>
          </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}><h3>Curriculum</h3>
          <p className={classes.p}>java is a general purpose language 
          </p>
          <Box display='flex' 
          justifyContent= "flex-end">
            <Box {...defaultProps}>
          <img className={classes.media} 
          src={python} alt="Math Problems"/ >
            </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Paper  className={classes.spacing} ><h3>Teaching Assistance</h3>
          <p className={classes.p}>java is a general purpose language which is now used in 
          </p>
          <Box display="flex" justifyContent="flex-end" border={1} {...defaultProps} >
          <img className={classes.media}
          justifyContent="Left"
          display="flex"
          src={chip} alt="Math Problems"/ >
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}><h3>Slack Groups</h3>
          <p className={classes.p}>java is a general purpose language which is now used in 
          </p>
          <Box display='flex' 
          justifyContent= "flex-end">
            <Box {...defaultProps}>
          <img className={classes.media} 
          src={computer} alt="Math Problems"/ >
            </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Paper  className={classes.spacing} ><h3>preimum account</h3>
          <p className={classes.p}>java is a general purpose language which is now used in 
          </p>
          <Box display="flex"  border={1} {...defaultProps} >
          <img className={classes.media}
          display="flex"
          src={moniter} alt="Math Problems"/ >
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}><h3>No Emi</h3>
          <p className={classes.p}>java is a general purpose language which is now used in 
          </p>
          <Box display='flex' 
          justifyContent= "flex-end">
            <Box {...defaultProps}>
          <img className={classes.media} 
          src={c} alt="Math Problems"/ >
            </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Paper  className={classes.spacing} ><h3>Certificate</h3>
          <p className={classes.p}>java is a general purpose language which is now used in 
          </p>
          <Box display="flex" 
          {...defaultProps} >
            <img className={classes.media}
          src={cplus} alt="Math Problems"/ >
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}><h3>7 Day refund</h3>
          <p className={classes.p}>java is a general purpose language which is now used in 
          </p>
          <Box display='flex' 
          justifyContent= "flex-end">
            <Box {...defaultProps}>
          <img className={classes.media} 
          src={hacker} alt="Math Problems"/ >
            </Box>
            </Box>
            </Paper>
            </Grid>
        </Grid>
    </div>
    </div>
  );
}

export default FunctionName;


