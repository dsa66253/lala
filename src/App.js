import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import PlaceToVisit from './components/PlaceToVisit';
import ReactPlayer from "react-player";
import Footer from "./components/Footer.js"

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg1.png'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));
export default function App() {
  const classes = useStyles();
  return (

    <div className={classes.root}>
      {/* <ReactPlayer controls url={`${process.env.PUBLIC_URL}`+'/assets/video1.mp4'}/> */}
      <CssBaseline />
      <Header />
      <PlaceToVisit />
      <div className="page-container">

      <Footer/>
 
      </div>
    </div>
  );
}
