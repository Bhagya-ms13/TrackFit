import React from 'react';
import { Box, Stack, Typography,Button } from '@mui/material';
import HeroBannerImage from '../assets/images/woman.png'
const HeroBanner = () => {
  return (
    <Box sx={{mt: { lg:'212px', xs: '70px'},
              ml: { sm: '200px'}
              }} position="relative" p="20px" >
       <Typography color="#5D3FD3" fontWeight="600" fontSize="26px">
           TRACKFIT
        </Typography> 
        <Typography fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '40px'}}} mb="23px" mt="30px">
            Join the <br/> Fitness Revolution
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" mb={4}>
            Check out more effective exercises
        </Typography>
        <Button variant="contained" href="#exercises" sx={{backgroundColor: "#5D3FD3",padding: '10px'}}>Explore Exercises</Button>
        <Typography fontWeight={600} color="#5D3FD3" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
           Exercise
        </Typography>
        
        <img src={HeroBannerImage} alt="banner" className="hero-banner-img" style={{ width: '700px', height: '750px '}}  />
    </Box>
  )
}

export default HeroBanner

