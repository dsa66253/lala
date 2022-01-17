import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import places from '../static/places';
import useWindowPosition from '../hook/useWindowPosition';
import Grid from '@mui/material/Grid';
import {Row, Col} from "antd"
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
    
  },
}));
export default function () {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div className={classes.root} id="place-to-visit">
                <Row justify="space-around">
      <Col span={4}><ImageCard place={places[0]} checked={checked}/></Col>
      <Col span={4}><ImageCard place={places[1]} checked={checked} /></Col>
      <Col span={4}><ImageCard place={places[2]} checked={checked} /></Col>
    </Row>
      {/* <ImageCard place={places[0]} checked={checked} />
      <ImageCard place={places[1]} checked={checked} /> */}
      {/* <ImageCard place={places[2]} checked={checked} /> */}
      
    </div>
  );
}
