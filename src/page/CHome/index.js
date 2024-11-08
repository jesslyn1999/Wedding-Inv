import React from 'react';
import { Box, Typography } from '@mui/material';

// URL of the background image
const backgroundImageUrl = 'https://via.placeholder.com/800x400'; // Replace this URL with your specific image

// Generate random text
const randomText = () => {
  const texts = [
    "Welcome to our site!",
    "Discover new opportunities!",
    "Random motivational quote!",
    "Stay positive, work hard, make it happen.",
    "Your success journey begins here!"
  ];
  const randomIndex = Math.floor(Math.random() * texts.length);
  return texts[randomIndex];
};

function CHome() {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
        heyyyy
      <Typography
        variant="h4"
        sx={{
          color: '#fff',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          padding: '16px 32px',
          borderRadius: '8px',
        }}
      >
        {randomText()}
      </Typography>
    </Box>
  );
}

export default CHome;
