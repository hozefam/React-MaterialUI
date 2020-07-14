import React from 'react';
import './App.css';
import Sidemenu from './components/Sidemenu';
import { makeStyles, CssBaseline } from '@material-ui/core';
import Header from './components/Header';

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%',
  },
});

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Sidemenu></Sidemenu>
      <div className={classes.appMain}>
        <Header></Header>
      </div>
      <CssBaseline></CssBaseline>
    </React.Fragment>
  );
}

export default App;
