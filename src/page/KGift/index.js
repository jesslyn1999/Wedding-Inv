import React, { useState } from 'react';
import { Box, Button, Grid2 as Grid, Typography } from '@mui/material';

import imgBackgroundImageDefault from '../../../src/resources/KGift/Gift_BG.jpg'; // Adjust the path as needed
import imgLogo from '../../../src/resources/KGift/Gift_Icon.png'; // Adjust the path as needed
import imgDivider from '../../../src/resources/KGift/Gift_Wishes_Divider.png';

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
        position: 'relative',
        padding: '0rem 3rem'
    },
    containerContent: {
        marginBottom: '2.6rem'
    },
    wishBox: {
        borderRadius: '0.3rem',
        borderStyle: 'solid',
        borderColor: '#b57a2e',
        marginBottom: '1rem',
        textAlign: 'left',
        padding: '0.5rem 1rem'
    },
    wishText: {
        fontFamily: 'Libre Baskerville',
        fontSize: '0.7rem'
    }
};

function KGift() {
    const wishList = [
        {
            text: '1. Wishing you a very happy life',
            from: 'Jessica'
        },
        {
            text: '2. Glad to celebrate your happy day with you. Happiliy ever after',
            from: 'Jessica'
        },
        {
            text: '3. Wishing you a very happy life',
            from: 'JN'
        },
        {
            text: '4. Wishing you a very happy life',
            from: 'Jessica'
        },
        {
            text: '5. Glad to celebrate your happy day with you. Happiliy ever after',
            from: 'Jessica'
        },
        {
            text: '6. Wishing you a very happy life',
            from: 'JN'
        },
        {
            text: '7. Wishing you a very happy life',
            from: 'Jessica'
        },
        {
            text: '8. Glad to celebrate your happy day with you. Happiliy ever after',
            from: 'Jessica'
        },
        {
            text: '9. Wishing you a very happy life 9. Wishing you a very happy life 9. Wishing you a very happy life',
            from: 'JN'
        },
        {
            text: '10. Wishing you a very happy life 10. Wishing you a very happy life 10. Wishing you a very happy life 10. Wishing you a very happy life 10. Wishing you a very happy life 10. Wishing you a very happy life 10. Wishing you a very happy life 10. Wishing you a very happy life 10. Wishing you a very happy life 10. Wishing you a very happy life 10. Wishing you a very happy life 10. Wishing you a very happy life',
            from: 'Jessica'
        },
        {
            text: '11. Glad to celebrate your happy day with you. Happiliy ever after. 11. Glad to celebrate your happy day with you. Happiliy ever after. 11. Glad to celebrate your happy day with you. Happiliy ever after. 11. Glad to celebrate your happy day with you. Happiliy ever after 11. Glad to celebrate your happy day with you. Happiliy ever after. 11. Glad to celebrate your happy day with you. Happiliy ever after. 11. Glad to celebrate your happy day with you. Happiliy ever after. 11. Glad to celebrate your happy day with you. Happiliy ever after 11. Glad to celebrate your happy day with you. Happiliy ever after. 11. Glad to celebrate your happy day with you. Happiliy ever after. 11. Glad to celebrate your happy day with you. Happiliy ever after. 11. Glad to celebrate your happy day with you. Happiliy ever after',
            from: 'Jessica'
        }
    ];

    return (
        <Box sx={styles.container}>
            <Box sx={{ ...styles.containerContent, marginTop: '2rem' }}>
                <img
                    srcSet={`${imgLogo} 1x, ${imgLogo} 2x`} // Providing 1x and 2x for high-resolution displays
                    src={imgLogo}
                    alt={'married logo'}
                    loading="lazy"
                    style={{
                        height: 'auto', // Set height
                        width: '20%',
                        alignSelf: 'center',
                        objectFit: 'cover', // Crop the image to fit
                        minWidth: '50px',
                        marginBottom: '1rem'
                    }}
                />
                <Typography
                    sx={{
                        fontFamily: 'Alex Brush',
                        fontSize: '2.2rem',
                        textTransform: 'capitalize',
                        marginBottom: '1rem'
                    }}
                >
                    Wedding Gift
                </Typography>

                <Typography
                    sx={{
                        fontFamily: 'Libre Baskerville',
                        fontSize: '0.8rem',
                        fontWeight: 'bold'
                    }}
                >
                    Your presence & prayers are the greatest gift of all. But, if you were thinking of giving a gift to
                    help us on our way, it will be more than words can say to celebrate our special day
                </Typography>
            </Box>

            <Box sx={styles.containerContent}>
                <Grid container spacing={2}>
                    <Grid size={6}>
                        <Button
                            variant="contained"
                            sx={{
                                fontFamily: 'Libre Baskerville',
                                fontSize: '0.8rem',
                                textTransform: 'capitalize',
                                marginBottom: '0.5rem',
                                padding: '0.5rem 2rem',
                                borderRadius: '1rem'
                            }}
                        >
                            Bank Transfer
                        </Button>
                    </Grid>
                    <Grid size={6}>
                        <Button
                            variant="contained"
                            sx={{
                                fontFamily: 'Libre Baskerville',
                                fontSize: '0.8rem',
                                textTransform: 'capitalize',
                                marginBottom: '0.5rem',
                                padding: '0.5rem 2rem',
                                borderRadius: '1rem'
                            }}
                        >
                            Confirm Transfer
                        </Button>
                    </Grid>
                </Grid>
            </Box>

            {/* Wishes */}
            <Box sx={{ flex: 1, overflow: 'hidden', marginBottom: '2rem' }}>
                <img
                    srcSet={`${imgDivider} 1x, ${imgDivider} 2x`} // Providing 1x and 2x for high-resolution displays
                    src={imgDivider}
                    alt={'married logo'}
                    loading="lazy"
                    style={{
                        height: 'auto', // Set height
                        width: '100%',
                        alignSelf: 'center',
                        objectFit: 'cover', // Crop the image to fit
                        minWidth: '50px',
                        marginBottom: '0.6rem'
                    }}
                />

                <Box
                    sx={{
                        height: '100%',
                        overflowY: 'scroll'
                    }}
                >
                    {wishList.map((wishItem) => (
                        <Box sx={styles.wishBox}>
                            <Typography gutterBottom sx={{ ...styles.wishText, marginBottom: '1rem' }}>
                                {wishItem.text}
                            </Typography>
                            <Typography gutterBottom sx={styles.wishText}>
                                - {wishItem.from}
                            </Typography>
                        </Box>
                    ))}
                    <Box
                        sx={{
                            marginBottom: '10rem'
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
}

export default KGift;
