import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles(theme => ({
  appBar: {
    width: "100%",
    position: "static",
    top: "100%",
    bottom: "100%",
    marginBottom: 0,
    marginTop:100
  },
  footerText: {
    textAlign: 'center'
  }
}));

export default function BottomAppBar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar style={{ background: '#000' }} className={classes.appBar}>
        <Toolbar style={{ justifyContent: 'center' }}>
          <Typography className="footerText">
            Desenvolvido por SomaLabs
            </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}