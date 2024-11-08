import React from 'react';
import { Box, Grid2 as Grid, Typography } from '@mui/material';

import imgBackgroundImageDefault from '../../../src/resources/FGroomBride/GroomBride_BG.jpg';
import imgBride from '../../../src/resources/FGroomBride/GroomBride_Bride.png';
import imgGroom from '../../../src/resources/FGroomBride/GroomBride_Groom.png';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

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
    containerHeader: {
        // position: 'absolute', // Allows overlapping
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        paddingBottom: '0.2rem', // Add padding to make the items visible
        marginBottom: '0.2rem', // Add padding to make the items visible
        // backgroundColor: 'lightblue', // Background color for visibility
        paddingTop: '1rem',
        width: '100vw',
        color: 'white',
        justifyContent: 'center',
        backgroundColor: '#6a5841'
    },
    containerContext: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        marginBottom: '3rem'
    },
    containerGrid: {
        width: '100%',
        maxWidth: '410px',
        padding: '1rem',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center'
    },
    containerPhoto: {
        alignSelf: 'center',
        objectFit: 'cover'
    },
    name: {
        fontFamily: 'Great Vibes',
        fontSize: '1.6rem',
        marginBottom: '0.1rem',
        textAlign: 'left',
        textTransform: 'capitalize',
        padding: '0 1.3rem'
    },
    lastName: {
        fontFamily: 'Great Vibes',
        fontSize: '1.6em',
        marginBottom: '1rem',
        textAlign: 'right',
        textTransform: 'capitalize',
        padding: '0 1.3rem'
    },
    sondaughter: {
        fontFamily: 'Libre Baskerville',
        fontSize: '0.7rem',
        fontWeight: 'bold',
        marginBottom: '1rem'
    },
    dad: {
        fontFamily: 'Libre Baskerville',
        fontSize: '0.8rem',
        marginBottom: '0.1rem'
    },
    mom: {
        fontFamily: 'Libre Baskerville',
        fontSize: '0.8rem',
        marginBottom: '0.8rem'
    }
};

function BPopUp() {
    return (
        <Box sx={styles.container}>
            <Box sx={styles.containerHeader}>
                <Typography
                    sx={{
                        fontFamily: 'Libre Baskerville',
                        letterSpacing: '0.1em',
                        fontSize: '1em',
                        textTransform: 'capitalize',
                        marginBottom: '0.2em'
                    }}
                >
                    The Beloved
                </Typography>
                <Typography
                    sx={{
                        fontFamily: 'Great Vibes',
                        letterSpacing: '0.1em',
                        fontSize: '2.6em',
                        textTransform: 'capitalize',
                        marginBottom: '0.2em'
                    }}
                >
                    Groom & Bride
                </Typography>
            </Box>

            <Box sx={styles.containerContext}>
                <Grid container spacing={3} sx={styles.containerGrid}>
                    <Grid size={6} sx={styles.containerPhoto}>
                        <img
                            srcSet={`${imgGroom} 1x, ${imgGroom} 2x`} // Providing 1x and 2x for high-resolution displays
                            src={imgGroom}
                            alt={'couple'}
                            loading="lazy"
                            style={{
                                height: 'auto',
                                width: '100%',
                                alignSelf: 'center',
                                objectFit: 'cover'
                            }}
                        />
                    </Grid>
                    <Grid size={6}>
                        <Typography sx={styles.name}>Jimmy</Typography>
                        <Typography sx={styles.lastName}>Nongmaithem</Typography>

                        <Typography sx={styles.sondaughter}>son of</Typography>

                        <Typography sx={styles.dad}>Mr. Nongmaithem Jayantakumar Singh &</Typography>

                        <Typography sx={styles.mom}>Mrs. Nongmaithem Shanti Devi</Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={3} sx={styles.containerGrid}>
                    <Grid size={6}>
                        <Typography sx={styles.name}>Jessica</Typography>
                        <Typography sx={styles.lastName}>Nathania</Typography>

                        <Typography sx={styles.sondaughter}>daughter of</Typography>

                        <Typography sx={styles.dad}>Mr. Teh Gim Hoei &</Typography>

                        <Typography sx={styles.mom}>Mrs. NI NI</Typography>
                    </Grid>
                    <Grid size={6} sx={styles.containerPhoto}>
                        <img
                            srcSet={`${imgBride} 1x, ${imgBride} 2x`} // Providing 1x and 2x for high-resolution displays
                            src={imgBride}
                            alt={'couple'}
                            loading="lazy"
                            style={{
                                height: 'auto',
                                width: '100%',
                                alignSelf: 'center',
                                objectFit: 'cover'
                            }}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default BPopUp;
