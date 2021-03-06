import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';
import ReactPlayer from "react-player"
const useStyles = makeStyles({
  root: {
    maxWidth: "90vw",
    background: 'rgba(0,0,0,0.5)',
    margin: '20px',
  },
  media: {

  },
  title: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#fff',
  },
  desc: {
    fontFamily: 'Nunito',
    fontSize: '1.1rem',
    color: '#ddd',
  },
});

export default function ImageCard({ place, checked }) {
  const classes = useStyles();

  return (
    <Collapse in={checked} {...(checked ? { timeout: 500 } : {})}>
      <Card className={classes.root}>
        {/* <CardMedia
          className={classes.media}
          image={place.imageUrl}
          title="Contemplative Reptile"
        /> */}
        {/* //!keep ratio of width and height */}
        <ReactPlayer width="100%" height="100%" className={classes.media}  controls url={place.videoUrl} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className={classes.title}
          >
            {place.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.desc}
          >
            {place.description}
          </Typography>
        </CardContent>
      </Card>
    </Collapse>
  );
}
