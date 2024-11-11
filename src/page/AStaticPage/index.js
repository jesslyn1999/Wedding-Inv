import React from 'react';

import { Box } from '@mui/material';

import imgBackgroundImageDefault from '../../resources/HEvent1/Event1_Foto.png';
import imgBackgroundImageContainer from '../../resources/BPopUp/PopUp_BG.jpg';

import BPopUp from '../BPopUp';
import CHome from '../CHome';
import DQuotes1 from '../DQuotes1';
import EQuotes2 from '../EQuotes2';
import FGroomBride from '../FGroomBride';
import GOurLoveStory from '../GOurLoveStory';
import HEvent1 from '../HEvent1';
import IEvent2 from '../IEvent2';
import JRsvp from '../JRsvp';
import KGift from '../KGift';
import LGallery from '../LGallery';
import MThankyou from '../MThankyou';

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'relative',
        alignItems: 'center',
        padding: 0,
        margin: 0,
        height: '100vh',
        overflow: 'hidden'
    },
    containerStatic: {
        '@media (max-width: 780px)': {
            display: 'none'
        },
        height: '100vh',
        width: '100%',
        flex: 1,
        padding: 0,
        margin: 0,
        alignSelf: 'flex-start',
        backgroundImage: `url(${imgBackgroundImageContainer})`, // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
    },
    containerContent: {
        '@media (min-width: 780px)': {
            maxWidth: '380px'
        },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        maxWidth: '780px',
        backgroundImage: `url(${imgBackgroundImageContainer})`, // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        width: '100%',
        padding: 0,
        margin: 0,
        overflowY: 'scroll'
    },
    containerContentSub: {
        maxWidth: '500px',
        '@media (min-width: 780px)': {
            maxWidth: '380px'
        },
        height: '100%',
        width: '100%',
        padding: 0,
        margin: 0
    }
};

function AStaticPage() {
    return (
        <Box sx={styles.container}>
            <Box sx={styles.containerStatic}>
                <img
                    srcSet={`${imgBackgroundImageDefault} 1x, ${imgBackgroundImageDefault} 2x`} // Providing 1x and 2x for high-resolution displays
                    src={imgBackgroundImageDefault}
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

            <Box sx={styles.containerContent}>
                <Box sx={styles.containerContentSub}>
                    <BPopUp />
                    <CHome />
                    <DQuotes1 />
                    <EQuotes2 />
                    <FGroomBride />
                    <GOurLoveStory />
                    <HEvent1 />
                    <IEvent2 />
                    <JRsvp />
                    <KGift />
                    <LGallery />
                    <MThankyou />
                </Box>
            </Box>
        </Box>
    );
}

export default AStaticPage;
