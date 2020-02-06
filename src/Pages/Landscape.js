import React, {useState} from 'react';
import {Grid, Typography, Card, CardActionArea, CardContent} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LandscapeImage from '../Components/LandscapeImage';
import DialogImage from '../Components/DialogImage';
import {landscapePage} from '../Redux/actions';
import {useDispatch} from 'react-redux';

const useStyles = makeStyles(theme => ({
  pixabay: {
    flexGrow: 1,    
  },
  landcard: {
    'text-align': 'center',
    'background-color':'black',
    'color': 'white' 
  },
}));

const Landscape = props => {  
  const classes = useStyles();
  const dispatch = useDispatch(); 
  const [dialogImage, setDialogImage] = useState({
    open: false,
    currentImg: "",
    currentTitle: ''
  });
  const handleOpen = (img, title) => {    
    setDialogImage({ open: true, currentImg: img,  currentTitle: title});
    dispatch(landscapePage({ open: true, currentImg: img,  currentTitle: title}));
  };
  const handleClose = () => {
    setDialogImage({ open: false, currentImg: "", currentTitle: "" });
    dispatch(landscapePage({ open: false, currentImg: "", currentTitle: ""}));
  };

  return (
    <div className={classes.pixabay}>
      <Grid item xs={12}>
      <Card className={classes.landcard}>
      <CardActionArea>        
        <CardContent>
        <Typography variant="h2" gutterBottom>
            Landscape Album
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            a sample page for use react to call rest api from pixabay.com  
          </Typography>
          <Typography variant="body2"  component="p">
            use react, router, redux, axios, hook and material-ui for create nice photos album.
          </Typography>
        </CardContent>
      </CardActionArea>      
    </Card>        
      </Grid>
      <LandscapeImage handleOpen={handleOpen} />
      <DialogImage
        dgOpen={dialogImage.open}
        handleClose={handleClose}
        currentImg={dialogImage.currentImg}
        currentTitle={dialogImage.currentTitle}
      />
    </div>
  );
};

export default Landscape;