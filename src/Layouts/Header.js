import React from 'react';
import {Link} from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import './header.css';

const useStyles = makeStyles(theme => ({
  customnavbar: {
    'border-color': 'rgb(255,255,255)'    
  },
}));

const Header = (props)=>{
  const classes = useStyles();
  return (    
      <Navbar bg="primary" expand="lg" >        
          <Navbar.Brand>
            <Link to="/">Siam React Sample</Link>
          </Navbar.Brand>
          <Navbar.Toggle bg="dark" className={classes.customnavbar} />        
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>            
            <Nav.Item>
              <Nav.Link href="landscape/">Landscape</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/about/">About</Nav.Link>
            </Nav.Item>
          </Nav>          
        </Navbar.Collapse>
      </Navbar>    
  );
};

export default Header;