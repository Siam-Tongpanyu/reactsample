import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import {Button, AppBar, Toolbar, Dialog, IconButton, Slide, Typography} from '@material-ui/core';
import {useSelector} from 'react-redux';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative'
  },
  iconButton: {
    flex: 1,
    'text-align': 'center'
  }
}));
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});
const DialogImage = props => {  
  const classes = useStyles();
  const reduxDialogImage = useSelector(state => state.dialogImage);
  console.log('redux', reduxDialogImage);    
  return (
    <Dialog
      fullScreen
      open={props.dgOpen}
      onClose={() => props.handleClose()}
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton            
            edge="end"
            color="inherit"
            onClick={() => props.handleClose()}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.iconButton}>
              {props.currentTitle}
            </Typography>
          <Button autoFocus color="inherit" onClick={() => props.handleClose()}>
            Close
          </Button>
        </Toolbar>
      </AppBar>
      <img src={props.currentImg} alt="" style={{ width: "100%" }} />
    </Dialog>
  );
};

export default DialogImage;