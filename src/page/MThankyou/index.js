import React from 'react';
import { Box, Button, Typography } from '@mui/material';

import imgBackgroundImageDefault from '../../../src/resources/MThankyou/ThankYou_BG.jpg'; // Adjust the path as needed
import imgBackgroundTopImage from '../../../src/resources/MThankyou/ThankYou_Foto.png'; // Adjust the path as needed

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100vh',
        backgroundImage: `url(${imgBackgroundImageDefault})`, // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden', // Prevent items from overflowing outside the container
        position: 'relative',
        alignItems: 'center'
    },
    topBackground: {
        width: '100%',
        height: 'auto',
        position: 'relative'
    },
    containerContextFirst: {
        position: 'absolute',
        bottom: '10%',
        width: 'calc(100% - 2rem)',
        color: '#fff',
        padding: '1rem 1rem',
        textAlign: 'center'
    },
    containerContextSecond: {
        flex: 1,
        padding: '1rem 1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    containerContext: {
        // position: 'absolute', // Allows overlapping
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute', // Allows the items to overlap
        padding: '20px', // Add padding to make the items visible
        // backgroundColor: 'lightblue', // Background color for visibility
        bottom: '0.4em',
        marginBottom: '2em',
        justifyContent: 'center'
    }
};

function MThankyou() {
    return (
        <Box sx={styles.container}>
            <Box sx={styles.topBackground}>
                <img
                    srcSet={`${imgBackgroundTopImage} 1x, ${imgBackgroundTopImage} 2x`} // Providing 1x and 2x for high-resolution displays
                    src={imgBackgroundTopImage}
                    alt={'background'}
                    loading="lazy"
                    style={{
                        width: '100%',
                        objectFit: 'cover' // Crop the image to fit
                    }}
                />

                <Box sx={styles.containerContextFirst}>
                    <Typography
                        sx={{
                            fontFamily: 'Libre Baskerville',
                            fontSize: '0.9rem',
                            textTransform: 'none',
                            marginBottom: '0.8rem'
                        }}
                    >
                        Two souls become one, two hearts beat as one
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: 'Great Vibes',
                            letterSpacing: '0.1rem',
                            fontSize: '2.6rem',
                            textTransform: 'capitalize',
                            marginBottom: '0.8rem'
                        }}
                    >
                        Jimmy & Jessica
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: 'Libre Baskerville',
                            fontSize: '0.9rem',
                            textTransform: 'capitalize',
                            marginBottom: '0.8rem'
                        }}
                    >
                        Thank You
                    </Typography>
                </Box>
            </Box>

            <Box sx={styles.containerContextSecond}>
                <Typography
                    sx={{
                        fontSize: '1.2rem',
                        textTransform: 'capitalize',
                        marginBottom: '0.3rem'
                    }}
                >
                    Made with ... by
                </Typography>
                <Typography
                    sx={{
                        fontFamily: 'Libre Baskerville',
                        fontSize: '0.8rem',
                        textTransform: 'capitalize',
                        marginBottom: '1.2rem',
                        fontStyle: 'italic'
                    }}
                >
                    Jesslyn Nathania, Jessica Nathania, Jimmy Nongmaithem
                </Typography>

                <Typography
                    sx={{
                        fontFamily: 'Libre Baskerville',
                        fontSize: '0.8rem',
                        textTransform: 'capitalize',
                        marginBottom: '0.1rem',
                        fontWeight: 'bold'
                    }}
                >
                    Backsound by:
                </Typography>
                <Typography
                    sx={{
                        fontFamily: 'Libre Baskerville',
                        fontSize: '0.8rem',
                        textTransform: 'capitalize',
                        marginBottom: '2rem',
                        fontStyle: 'italic'
                    }}
                >
                    Jim Brickman - Valentine (Official) ft. Martina McBride
                </Typography>
            </Box>
        </Box>
    );
}

export default MThankyou;
