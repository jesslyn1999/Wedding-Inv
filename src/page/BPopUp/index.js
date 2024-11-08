import React from 'react';
import { Box, Button, Typography } from '@mui/material';

import imgBackgroundImageDefault from '../../../src/resources/APopUp/PopUp_BG.jpg'; // Adjust the path as needed
import imgBackgroundTopImage from '../../../src/resources/APopUp/PopUp_Foto.png'; // Adjust the path as needed
import imgLogo from '../../../src/resources/APopUp/PopUp_Logo.png';

const styles = {
    container: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundImage: `url(${imgBackgroundImageDefault})`, // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    topContainer: {
        height: '50vh',
        maxWidth: '100%',
        display: 'flex',
        backgroundImage: `url(${imgBackgroundTopImage})`, 
        backgroundPosition: 'center 20%', // Set the top offset, e.g., 20% from the top
        backgroundSize: 'cover'
    },
    text: {
        color: '#fff',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        padding: '16px 32px',
        borderRadius: '8px'
    }
};

// Generate random text
const randomText = () => {
    const texts = [
        'Welcome to our site!',
        'Discover new opportunities!',
        'Random motivational quote!',
        'Stay positive, work hard, make it happen.',
        'Your success journey begins here!'
    ];
    const randomIndex = Math.floor(Math.random() * texts.length);
    return texts[randomIndex];
};

function BPopUp() {
    return (
        <Box sx={styles.container}>
            <Box sx={styles.topContainer}>hey</Box>
            heyyyyh
            {/* <img
                srcSet={`${imgLogo} 1x, ${imgLogo} 2x`} // Providing 1x and 2x for high-resolution displays
                src={imgLogo}
                alt={'married logo'}
                loading="lazy"
                style={{       // Set width
                    height: '5%',       // Set height
                    objectFit: 'cover',    // Crop the image to fit
                    borderRadius: '8px',   // Optional: round corners
                }} 
            {/* <Typography variant="h4" sx={styles.text}>
                You Are Invited to
            </Typography>
            <Typography variant="h4" sx={styles.text}>
                Jimmy & Jessica
            </Typography>
            <Typography variant="h4" sx={styles.text}>
                Wedding
            </Typography>

            <Typography variant="h4" sx={styles.text}>
                Dear Mr./Mrs./Ms.
            </Typography>
            <Typography variant="h4" sx={styles.text}>
                [Guest Name]
            </Typography>

            <Button variant="h4" sx={styles.text}>
                [Guest Name]
            </Button> */}
        </Box>
    );
}

export default BPopUp;
