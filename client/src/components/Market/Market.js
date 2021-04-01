import React,{useState,useEffect} from 'react';
import {Container,Typography} from '@material-ui/core';




const Market = () => {
  

   

    return (
        
        <> 
       <Container >
        <Typography variant="h3">Today's Sentiments</Typography>
        <Typography variant="h6">As of {new Date().toLocaleString('default', { month: 'long',day: '2-digit',year: 'numeric' }) + ''}</Typography>
        
      
      </Container>

   
      
      <Container>
          <Typography variant="h5">Sources</Typography>
           
           <div>
           <Typography variant="h5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui felis at nibh scelerisque non.</Typography>
           <Typography variant="h6">Hindustan Times</Typography>
           </div>
          
           <div>
           <Typography variant="h5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui felis at nibh scelerisque non.</Typography>
           <Typography variant="h6">Hindustan Times</Typography>
           </div>

           <div>
           <Typography variant="h5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui felis at nibh scelerisque non.</Typography>
           <Typography variant="h6">Hindustan Times</Typography>
           </div>
      </Container>
        </>
        
    )
}

export default Market
