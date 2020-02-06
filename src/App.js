import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Home, Rooms, About, Landscape, SingleRoom, Shop, Error} from './Pages';
import {Header, Footer} from './Layouts';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import './App.css';

function App() {
  return (
    <div>
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='xl'>
      <Header />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/giftshop' component={Shop} />
      <Route exact path='/rooms' component={Rooms} />
      <Route exact path='/about' component={About} />
      <Route exact path='/landscape' component={Landscape} />
      <Route exact path='/rooms/:roomName' component={SingleRoom} />
      <Route component={Error} />
    </Switch>
    <Footer />        
      </Container>
    </React.Fragment>        
    </div>
  );
}

export default App;
