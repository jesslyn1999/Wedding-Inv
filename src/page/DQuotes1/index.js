import React from 'react';
import { Box, Button, Typography } from '@mui/material';

import imgBackgroundImageDefault from '../../../src/resources/DQuotes1/Quotes1_BG.jpg'; // Adjust the path as needed
import imgContainer from '../../../src/resources/DQuotes1/Quotes1_Foto.png'; // Adjust the path as needed
import imgBird from '../../../src/resources/DQuotes1/Quotes1_Golden Birds.png'; // Adjust the path as needed
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

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
        alignItems: 'center',
        position: 'relative',
    },
    containerWindow: {
        marginTop: '-6rem',
        borderRadius: '100% 100% 0 0',
        width: '70%',
        maxWidth: '300px',
        // backgroundImage: `url(${imgContainer})`, // Replace with your image URL
        // backgroundSize: 'cover',
        // backgroundPosition: 'center'
    },
    containerBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '-0.3rem',
        width: '60%',
        height: '25vh',
        boxShadow: '0.6rem 0.5rem 0.6rem #666, 0 0 #888, 0px 0px 0 0 #cc6600',
        bgcolor: '#fbedd2',
        p: '2rem 3rem',
        textAlign: 'center',
        borderRadius: '5% 5% 0 0',
    },
    iconDot: { fontSize: '0.7rem', margin: '0 0.3rem' },
    containerBird: {
        position: 'absolute',
        bottom: '0rem'
    }
};

function BPopUp() {
    return (
        <Box sx={styles.container}>
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
                    We found each other
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
                    “For the first time, I see what the rest of my life looks like.”
                </Typography>
                <Typography
                    sx={{
                        fontFamily: 'Libre Baskerville',
                        fontSize: '0.7rem',
                    }}
                >
                    Schmidt, “New Girl”
                </Typography>
            </Box>

            <Box sx={styles.containerBird}>
                <img
                    srcSet={`${imgBird} 1x, ${imgBird} 2x`} // Providing 1x and 2x for high-resolution displays
                    src={imgBird}
                    alt={'bird'}
                    loading="lazy"
                    style={{
                        height: 'auto', // Set height
                        width: '30%',
                        maxWidth: '360px',
                        alignSelf: 'center',
                        objectFit: 'cover', // Crop the image to fit
                        minWidth: '50px',
                        marginBottom: '1rem'
                    }}
                />
            </Box>
        </Box>
    );
}

export default BPopUp;
