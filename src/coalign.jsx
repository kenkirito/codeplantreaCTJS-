import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import blob from './img/blob.png';
import downoload from './img/download.jpg'; 

const useStyles = makeStyles((theme) => ({
  card: {
    border: '3px solid White',
  },

  Typography: {
    height: 1050, 
    width: '100%', 
    position: 'relative',
    border: '4px solid #FFFFFF',
  },
  h1 : {
    textAlign:"center", 
    color: "#00008B" , 
    paddingTop: '120px',
  },
  h4 : {
    textAlign:"center", 
    color: "#00008B" ,
  },
  p : {
    color: '#778899',
    textAlign: 'center'
  },
  span : {
    textDecoration: "underline",  
    textDecorationColor: "#ffab00",
  },
  box1 : {
    height: '40vh', 
    width: '70vh',
    boxShadow: ' 0 16px 70px -12.125px rgba(0,0,0,0.3)',
    borderRadius: '12px',
    bgcolor:"#F8F8FF",
    color:"black",
    position:"absolute",
    left:"50%",
    zIndex:"tooltip",
  },
  box2 : {
    height: '40vh', 
    width: '70vh',
    boxShadow: ' 0 16px 70px -12.125px rgba(0,0,0,0.3)',
    border: '4px solid White',
    borderRadius: '12px',
    bgcolor: "#F8F8FF",
    color: "black",
    position: "absolute",
    left: "13%",
    zIndex: "modal",
  },
  large: {
    marginLeft: "24vh",
    width: theme.spacing(16),
    height: theme.spacing(16),
    border: '4px solid #00008B',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
  },
  img: {
    backgroundImage: 'url('+blob+')',
    paddingTop: '30vh',
    paddingLeft: '90vh',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '50%',
    height: "73vh",
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();
  return (
    <Typography className={classes.Typography}>
            <h1 className={classes.h1}> WHAT <span className={classes.span}>OUR STUDE</span>NTS SAY</h1>
            <div  className={classes.img}>
    <Box className={classes.box1}
    p={2}
    top={600}
    bgcolor= "#F8F8FF">
        <Avatar src={downoload} alt="this is car image" className={classes.large} />
        <h3 className={classes.h4}>JENNY JOHNSON- AMAZON</h3>
         <p className={classes.p}>
         Text editors are programs developers write their code<br/>  in.Though you might not have a text editor downloaded<br/> in.Though you might not have a text editor downloaded<br/>
         </p>
        </Box>
          <Box className={classes.box2}
          top={300}
          p={2}
          bgcolor= "#F8F8FF">
           
      <Avatar
        alt="Remy Sharp"
        className={classes.large}
        src={downoload}
      />
        <h3 className={classes.h4}>JENNY JOHNSON- AMAZON</h3>
        <p className={classes.p}>
         Text editors are programs developers write their code<br/>  in.Though you might not have a text editor downloaded<br/> in.Though you might not have a text editor downloaded<br/>
         </p>
      </Box>
      </div>
    </Typography>

  );
}




