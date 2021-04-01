import React from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import Posts from '../Posts/Posts';
import Auth from '../Auth/Auth';

const Home = () => {

  return (
    <Grow in>
      <Container>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={7}>
            <Posts />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Auth />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;