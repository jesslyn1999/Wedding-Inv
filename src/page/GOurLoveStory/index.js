import React from 'react';
import { Box, Button, Slide, Typography } from '@mui/material';

import imgBackgroundImageDefault from '../../../src/resources/GOurLoveStory/OurLoveStory_BG.jpg'; // Adjust the path as needed

import imgLoveStoryHeader from '../../../src/resources/GOurLoveStory/OurLoveStory_Love.png'; // Adjust the path as needed

import imgCarouselArrow1 from '../../../src/resources/GOurLoveStory/OurLoveStory_Arrow1.png'; // Adjust the path as needed
import imgCarouselArrow2 from '../../../src/resources/GOurLoveStory/OurLoveStory_Arrow2.png'; // Adjust the path as needed
import imgCarouselItem1 from '../../../src/resources/GOurLoveStory/OurLoveStory_Foto1.png'; // Adjust the path as needed

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '100vh',
        backgroundImage: `url(${imgBackgroundImageDefault})`, // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden', // Prevent items from overflowing outside the container
        alignItems: 'center',
        position: 'relative'
    },
    containerHeader: {
        width: '70%',
        maxWidth: '300px'
    },
    containerCarousel: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'start',
    },
    carouselMainItem: {
        flex: 1
    },
    carouselItemButton: {
        margin: '1rem'
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
        borderRadius: '5% 5% 0 0'
    },
    iconDot: { fontSize: '0.7rem', margin: '0 0.3rem' },
};

function GOurLoveStory() {
    const carouselItems = [
        <Box sx={styles.carouselMainItem}>
            <img
                srcSet={`${imgCarouselItem1} 1x, ${imgCarouselItem1} 2x`} // Providing 1x and 2x for high-resolution displays
                src={imgCarouselItem1}
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
    ];
    return (
        <Box sx={styles.container}>
            <Box sx={styles.containerHeader}>
                <img
                    srcSet={`${imgLoveStoryHeader} 1x, ${imgLoveStoryHeader} 2x`} // Providing 1x and 2x for high-resolution displays
                    src={imgLoveStoryHeader}
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

            <Box sx={styles.containerCarousel}>
                <Button sx={styles.carouselItemButton}>
                    <img
                        srcSet={`${imgCarouselArrow1} 1x, ${imgCarouselArrow1} 2x`} // Providing 1x and 2x for high-resolution displays
                        src={imgCarouselArrow1}
                        alt={'couple'}
                        loading="lazy"
                        style={{
                            height: 'auto', // Set height
                            width: '100%',
                            alignSelf: 'center',
                            objectFit: 'cover'
                        }}
                    />
                </Button>
                <Slide direction="left" in={true} mountOnEnter unmountOnExit>
                    {carouselItems[0]}
                </Slide>
                <Button sx={styles.carouselItemButton}>
                    <img
                        srcSet={`${imgCarouselArrow2} 1x, ${imgCarouselArrow2} 2x`} // Providing 1x and 2x for high-resolution displays
                        src={imgCarouselArrow2}
                        alt={'couple'}
                        loading="lazy"
                        style={{
                            height: 'auto', // Set height
                            width: '100%',
                            alignSelf: 'center',
                            objectFit: 'cover'
                        }}
                    />
                </Button>
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
                        fontSize: '0.7rem'
                    }}
                >
                    Schmidt, “New Girl”
                </Typography>
            </Box>
        </Box>
    );
}

export default GOurLoveStory;
