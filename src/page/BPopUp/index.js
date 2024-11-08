import React from 'react';
import { Box, Button, Typography } from '@mui/material';

import imgBackgroundImageDefault from '../../../src/resources/BPopUp/PopUp_BG.jpg'; // Adjust the path as needed
import imgBackgroundTopImage from '../../../src/resources/BPopUp/PopUp_Foto.png'; // Adjust the path as needed
import imgLogo from '../../../src/resources/BPopUp/PopUp_Logo.png';

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
        height: 'auto'
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

function BPopUp() {
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
            </Box>
            <Box sx={styles.containerContext}>
                <img
                    srcSet={`${imgLogo} 1x, ${imgLogo} 2x`} // Providing 1x and 2x for high-resolution displays
                    src={imgLogo}
                    alt={'married logo'}
                    loading="lazy"
                    style={{
                        height: 'auto', // Set height
                        width: '10%',
                        alignSelf: 'center',
                        objectFit: 'cover', // Crop the image to fit
                        minWidth: '50px',
                        marginBottom: '1em'
                    }}
                />
                <Typography
                    sx={{
                        fontFamily: 'Libre Baskerville',
                        letterSpacing: '.5em',
                        fontSize: '0.6em',
                        textTransform: 'uppercase',
                        marginBottom: '2.4em'
                    }}
                >
                    You Are Invited to
                </Typography>
                <Typography
                    sx={{
                        fontFamily: 'Great Vibes',
                        letterSpacing: '0.1em',
                        fontSize: '2.6em',
                        textTransform: 'capitalize',
                        marginBottom: '0.3em'
                    }}
                >
                    Jimmy & Jessica
                </Typography>
                <Typography
                    sx={{
                        fontFamily: 'Libre Baskerville',
                        letterSpacing: '.5em',
                        fontSize: '0.9em',
                        textTransform: 'uppercase',
                        marginBottom: '3.2em'
                    }}
                >
                    Wedding
                </Typography>
                <Typography
                    sx={{
                        fontSize: '1em',
                        textTransform: 'capitalize',
                        marginBottom: '1em'
                    }}
                >
                    Dear Mr./Mrs./Ms.
                </Typography>
                <Typography
                    sx={{
                        fontSize: '1em',
                        textTransform: 'capitalize',
                        marginBottom: '2.7em'
                    }}
                >
                    [Guest Name]
                </Typography>
                <Box>
                    <Button
                        variant="contained"
                        sx={{
                            fontFamily: 'Libre Baskerville',
                            letterSpacing: '.2em',
                            fontSize: '0.8em',
                            textTransform: 'uppercase',
                            marginBottom: '1.2em',
                            padding: '0.5em 2em',
                            borderRadius: '1em',
                        }}
                    >
                        Open Invitation
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default BPopUp;
