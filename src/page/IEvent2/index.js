import React from 'react';
import { Box, Button, Divider, Typography } from '@mui/material';

import imgBackgroundImageDefault from '../../../src/resources/IEvent2/Event2_BG.jpg';
import imgLogo from '../../../src/resources/IEvent2/Event2_Logo.png';
import imgTeaCeremony from '../../../src/resources/IEvent2/Event2_Shuang Xi.png';
import imgReception from '../../../src/resources/IEvent2/Event2_Champagne.png';

import PlaceIcon from '@mui/icons-material/Place';

import IEvent2Calendar from './calendar';

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
        alignItems: 'center',
        position: 'relative'
    },
    containerLogo: {
        marginBottom: '1rem'
    },
    containerBox: {
        marginBottom: '1rem'
    },
    containerSchedule: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    containerScheduleItem: {
        flex: 1
    }
};

function IEvent2() {
    return (
        <Box sx={styles.container}>
            <Box sx={styles.containerLogo}>
                <img
                    srcSet={`${imgLogo} 1x, ${imgLogo} 2x`}
                    src={imgLogo}
                    alt={'couple'}
                    loading="lazy"
                    style={{
                        height: 'auto', // Set height
                        width: '100%',
                        maxWidth: '100px',
                        alignSelf: 'center',
                        objectFit: 'cover'
                    }}
                />
            </Box>

            <Box sx={styles.containerBox}>
                <IEvent2Calendar />
            </Box>

            <Box sx={styles.containerSchedule}>
                <Box sx={styles.containerScheduleItem}>
                    <img
                        srcSet={`${imgTeaCeremony} 1x, ${imgTeaCeremony} 2x`}
                        src={imgTeaCeremony}
                        alt={'couple'}
                        loading="lazy"
                        style={{
                            height: 'auto', // Set height
                            width: '100%',
                            maxWidth: '160px',
                            alignSelf: 'center',
                            objectFit: 'cover'
                        }}
                    />

                    <Typography
                        sx={{
                            fontFamily: 'Libre Baskerville',
                            fontSize: '1rem',
                            marginBottom: '2rem',
                            textTransform: 'capitalize'
                        }}
                    >
                        Tea Ceremony
                    </Typography>

                    <Typography
                        sx={{
                            fontFamily: 'Libre Baskerville',
                            fontSize: '1rem',
                            marginBottom: '2rem',
                            textTransform: 'capitalize'
                        }}
                    >
                        11:00 AM
                    </Typography>
                </Box>
                <Divider component="li" orientation="vertical" variant="middle" flexItem />
                <Box sx={styles.containerScheduleItem}>
                    <img
                        srcSet={`${imgReception} 1x, ${imgReception} 2x`}
                        src={imgReception}
                        alt={'couple'}
                        loading="lazy"
                        style={{
                            height: 'auto', // Set height
                            width: '100%',
                            maxWidth: '160px',
                            alignSelf: 'center',
                            objectFit: 'cover'
                        }}
                    />

                    <Typography
                        sx={{
                            fontFamily: 'Libre Baskerville',
                            fontSize: '1rem',
                            marginBottom: '2rem',
                            textTransform: 'capitalize'
                        }}
                    >
                        Reception
                    </Typography>

                    <Typography
                        sx={{
                            fontFamily: 'Libre Baskerville',
                            fontSize: '1rem',
                            marginBottom: '2rem',
                            textTransform: 'capitalize'
                        }}
                    >
                        07:00 PM
                    </Typography>
                </Box>
            </Box>

            <Box>
                <Typography
                    sx={{
                        fontFamily: 'Libre Baskerville',
                        fontSize: '1rem',
                        marginBottom: '2rem',
                        textTransform: 'capitalize'
                    }}
                >
                    Grand Mercure Medan Angkasa
                </Typography>
                <Typography
                    sx={{
                        fontFamily: 'Libre Baskerville',
                        fontSize: '1rem',
                        marginBottom: '2rem',
                        textTransform: 'capitalize'
                    }}
                >
                    Jl. Sutomo No.1, Perintis, Medan
                </Typography>
            </Box>

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
    );
}

export default IEvent2;
