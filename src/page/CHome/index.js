import React from 'react';
import { Box, Button, Typography } from '@mui/material';

import imgBackgroundImageDefault from '../../../src/resources/CHome/Home_BG.jpg'; // Adjust the path as needed

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
        flexWrap: 'wrap',
        padding: '20px', // Add padding to make the items visible
        // backgroundColor: 'lightblue', // Background color for visibility
        marginBottom: '2.6rem',
        marginTop: '0.4em',
        justifyContent: 'center'
    },
    countdownText: {
        fontFamily: 'Libre Baskerville',
        letterSpacing: '0.1em',
        fontSize: '0.8em',
        marginBottom: '0.1em'
    },
    countdownBox: {
        marginLeft: '0.5em',
        marginRight: '0.5em'
    }
};

function CHome() {
    return (
        <Box sx={styles.container}>
            <Box sx={styles.containerContext}>
                <Typography
                    sx={{
                        fontFamily: 'Libre Baskerville',
                        letterSpacing: '0.1em',
                        fontSize: '1em',
                        marginBottom: '0.3em'
                    }}
                >
                    The Wedding of
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
                        letterSpacing: '0.1em',
                        fontSize: '1em',
                        marginBottom: '0.3em'
                    }}
                >
                    28 . 12 . 2014
                </Typography>
            </Box>

            <Box sx={styles.containerContext}>
                <Box sx={{ ...styles.containerContext, flexDirection: 'row', justifyContent: 'center', marginBottom: '0.6em' }}>
                    <Box sx={styles.countdownBox}>
                        <Typography sx={styles.countdownText}>57</Typography>
                        <Typography sx={styles.countdownText}>Days</Typography>
                    </Box>
                    <Typography sx={styles.countdownText}>|</Typography>
                    <Box sx={styles.countdownBox}>
                        <Typography sx={styles.countdownText}>15</Typography>
                        <Typography sx={styles.countdownText}>Hours</Typography>
                    </Box>

                    <Typography sx={styles.countdownText}>|</Typography>

                    <Box sx={styles.countdownBox}>
                        <Typography sx={styles.countdownText}>40</Typography>
                        <Typography sx={styles.countdownText}>Minutes</Typography>
                    </Box>

                    <Typography sx={styles.countdownText}>|</Typography>

                    <Box sx={styles.countdownBox}>
                        <Typography sx={styles.countdownText}>13</Typography>
                        <Typography sx={styles.countdownText}>Seconds</Typography>
                    </Box>
                </Box>
                <Typography
                    sx={{
                        fontFamily: 'Libre Baskerville',
                        letterSpacing: '0.1em',
                        fontSize: '1em'
                    }}
                >
                    until Mr. & Mrs.
                </Typography>
            </Box>
        </Box>
    );
}

export default CHome;
