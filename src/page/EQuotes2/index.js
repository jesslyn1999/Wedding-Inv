import React from 'react';
import { Box, Button, Typography } from '@mui/material';

import imgBackgroundImageDefault from '../../../src/resources/EQuotes2/Quotes2_BG.jpg'; // Adjust the path as needed
import imgContainer from '../../../src/resources/EQuotes2/Quotes2_Foto.png'; // Adjust the path as needed

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import zIndex from '@mui/material/styles/zIndex';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100vh',
        backgroundImage: `url(${imgBackgroundImageDefault})`, // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden', // Prevent items from overflowing outside the container
        alignItems: 'center'
    },
    containerBox: {
        marginTop: '1rem',
        zIndex: '1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '60%',
        height: '25vh',
        boxShadow: '0 0 #888, -0.6rem -0.5rem 0.8rem #666, 0px 0px 0 0 #cc6600',
        bgcolor: '#fbedd2',
        p: '2rem 3rem',
        textAlign: 'center',
        borderRadius: '0 0 5% 5%'
    },
    containerWindow: {
        marginTop: '-0.3rem',
        borderRadius: '0 0 100% 100%',
        width: '70%',
        maxWidth: '400px'
        // backgroundImage: `url(${imgContainer})`, // Replace with your image URL
        // backgroundSize: 'cover',
        // backgroundPosition: 'center'
    },
    iconDot: { fontSize: '0.7rem', margin: '0 0.3rem' }
};

function EQuotes2() {
    return (
        <Box sx={styles.container}>
            <Box sx={styles.containerBox}>
                <Typography
                    sx={{
                        fontFamily: 'Great Vibes',
                        letterSpacing: '0.1em',
                        fontSize: '1.3rem',
                        marginBottom: '0.6rem',
                        textTransform: 'capitalize'
                    }}
                >
                    And We Found Love
                </Typography>
                <Typography
                    sx={{
                        marginBottom: '1rem'
                    }}
                >
                    <FiberManualRecordIcon sx={styles.iconDot} />
                    <FiberManualRecordIcon sx={styles.iconDot} />
                    <FiberManualRecordIcon sx={styles.iconDot} />
                </Typography>
                <Typography
                    sx={{
                        fontFamily: 'Libre Baskerville',
                        fontSize: '0.8rem',
                        marginBottom: '1.8rem'
                    }}
                >
                    “Love starts as a feeling but to continue is a choice; and I find myself choosing you more and more
                    every day.”
                </Typography>
                <Typography
                    sx={{
                        fontFamily: 'Libre Baskerville',
                        fontSize: '0.7rem'
                    }}
                >
                    Justin Wetch, “Bending the Universe”
                </Typography>
            </Box>

            <Box sx={styles.containerWindow}>
                <img
                    srcSet={`${imgContainer} 1x, ${imgContainer} 2x`} // Providing 1x and 2x for high-resolution displays
                    src={imgContainer}
                    alt={'couple'}
                    loading="lazy"
                    style={{
                        height: 'auto', // Set height
                        width: '100%',
                        alignSelf: 'center',
                        objectFit: 'cover'
                    }}
                />
            </Box>
        </Box>
    );
}

export default EQuotes2;
