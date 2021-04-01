import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Auth from './components/Auth/Auth';

const App = () => (
  <BrowserRouter>
    <Container maxWidth="lg">
      
        <Route path="/" exact component={Home} />
        <Route path="/main" exact component={Main} />
     
    </Container>
  </BrowserRouter>
);

export default App;