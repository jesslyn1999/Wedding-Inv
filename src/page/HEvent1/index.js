import React from 'react';
import { Box, Button, Typography } from '@mui/material';

import imgBackgroundImageDefault from '../../../src/resources/HEvent1/Event1_BG.jpg'; // Adjust the path as needed
import imgBackgroundTopImage from '../../../src/resources/HEvent1/Event1_Foto.png'; // Adjust the path as needed
import imgLogo from '../../../src/resources/HEvent1/Event1_Holy_Rings.png';
import imgTimeLocation from '../../../src/resources/HEvent1/Event1_Holy_Matrimony_Location.png';
import imgFlowerBottomRight from '../../../src/resources/HEvent1/Event1_Flowers_Bottom_Right.png';
import imgFlowerTopLeft from '../../../src/resources/HEvent1/Event1_Flowers_Upper_Left.png';

import PlaceIcon from '@mui/icons-material/Place';

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
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute', // Allows the items to overlap
        padding: '1rem', // Add padding to make the items visible
        // backgroundColor: 'lightblue', // Background color for visibility
        bottom: '0.4rem',
        marginBottom: '0rem',
        justifyContent: 'center'
    },
    containerFlower: {
        position: 'absolute',
        top: '0',
        left: '0'
    }
};

function HEvent1() {
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
                <Box sx={styles.containerFlower}>
                    <img
                        srcSet={`${imgFlowerTopLeft} 1x, ${imgFlowerTopLeft} 2x`} // Providing 1x and 2x for high-resolution displays
                        src={imgFlowerTopLeft}
                        alt={'background'}
                        loading="lazy"
                        style={{
                            height: 'auto',
                            width: '30%',
                            maxWidth: '240px',
                            alignSelf: 'center',
                            objectFit: 'cover'
                        }}
                    />
                </Box>
                <Box sx={{ ...styles.containerFlower, bottom: 0, right: 0 }}>
                    <img
                        srcSet={`${imgFlowerTopLeft} 1x, ${imgFlowerTopLeft} 2x`} // Providing 1x and 2x for high-resolution displays
                        src={imgFlowerTopLeft}
                        alt={'background'}
                        loading="lazy"
                        style={{
                            height: 'auto',
                            width: '30%',
                            maxWidth: '240px',
                            alignSelf: 'center',
                            objectFit: 'cover'
                        }}
                    />
                </Box>
                <img
                    srcSet={`${imgLogo} 1x, ${imgLogo} 2x`} // Providing 1x and 2x for high-resolution displays
                    src={imgLogo}
                    alt={'married logo'}
                    loading="lazy"
                    style={{
                        height: 'auto', // Set height
                        width: '25%',
                        alignSelf: 'center',
                        objectFit: 'cover', // Crop the image to fit
                        minWidth: '50px',
                        marginBottom: '0.6rem'
                    }}
                />
                <Typography
                    sx={{
                        fontFamily: 'Alex Brush',
                        fontSize: '2rem',
                        textTransform: 'capitalize',
                        marginBottom: '0.2rem'
                    }}
                >
                    Holy Matrimony
                </Typography>
                <img
                    srcSet={`${imgTimeLocation} 1x, ${imgTimeLocation} 2x`} // Providing 1x and 2x for high-resolution displays
                    src={imgTimeLocation}
                    alt={'married logo'}
                    loading="lazy"
                    style={{
                        height: 'auto', // Set height
                        width: '100%',
                        alignSelf: 'center',
                        objectFit: 'cover', // Crop the image to fit
                        minWidth: '50px',
                        marginBottom: '1rem'
                    }}
                />
                <Box>
                    <Button
                        variant="contained"
                        sx={{
                            fontFamily: 'Libre Baskerville',
                            letterSpacing: '.2rem',
                            fontSize: '0.8rem',
                            textTransform: 'uppercase',
                            marginBottom: '0.5rem',
                            padding: '0.5rem 2rem',
                            borderRadius: '1rem'
                        }}
                    >
                        <PlaceIcon />
                        Open Maps
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default HEvent1;
