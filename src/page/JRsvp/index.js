import React, { useEffect, useState } from 'react';
import {
    alpha,
    Box,
    Button,
    FormControl,
    FormLabel,
    Grid2 as Grid,
    InputBase,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    ToggleButton,
    ToggleButtonGroup,
    Typography
} from '@mui/material';

import imgBackgroundImageDefault from '../../../src/resources/JRsvp/RSVP_BG.jpg'; // Adjust the path as needed
import imgBackgroundContainer from '../../../src/resources/JRsvp/RSVP_Pagoda_Fit.png'; // Adjust the path as needed
import imgFlower from '../../../src/resources/JRsvp/RSVP_Flowers_mirror.png'; // Adjust the path as needed


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
        position: 'relative'
    },
    containerFlower: {
        position: 'absolute',
        bottom: '-1rem',
        right: '0.2rem',
    },
    containerForm: {
        width: '85%',
        maxWidth: '460px',
        padding: '2rem 2rem',
        textAlign: 'left',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
        // backgroundColor: 'white'
    },
    containerFormBackground: {
        // backgroundColor: 'pink',
        // backgroundImage: `url(${imgBackgroundContainer})`, // Replace with your image URL
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        height: 'calc(100%)',
        width: 'calc(100% + 12rem)',
        position: 'absolute',
        top: '-1rem',
        left: '-6rem'
    },
    eventType: {
        fontFamily: 'Alex Brush',
        fontSize: '1.5rem',
        textTransform: 'capitalize'
    },
    eventDate: {
        fontFamily: 'Libre Baskerville',
        fontSize: '0.8rem',
        textTransform: 'capitalize',
        marginBottom: '1rem'
    },
    formTitle: {
        textAlign: 'center',
        fontFamily: 'Libre Baskerville',
        fontSize: '2rem',
        marginBottom: 0
    },
    formTitleSub: {
        textAlign: 'center',
        fontFamily: 'Alex Brush',
        fontSize: '1rem',
        textTransform: 'capitalize',
        marginBottom: 0
    },
    fieldTitle: {
        fontFamily: 'Libre Baskerville',
        fontSize: '0.8rem'
    },
    optionText: {
        fontFamily: 'Libre Baskerville',
        fontSize: '0.8rem',
        marginBottom: '0.2rem',
        textTransform: 'none',
        opacity: 0.8
    },
    optionBar: {
        fontFamily: 'Libre Baskerville',
        fontSize: '0.8rem',
        justifyContent: 'flex-start',
        padding: '0.5rem 1rem',
        // backgroundColor: '#7e654e',
        boxShadow: '0 0 #888, 0.2rem 0.1rem 0.1rem #333, 0px 0px 0 0 #cc6600',
        backgroundColor: '#7e654e!important',
        opacity: 0.8,
        color: '#fff',
        '&:hover': {
            opacity: 1
        },
        '&.Mui-selected': {
            backgroundColor: '#442415!important',
            fontWeight: 'bold',
            opacity: 0.9,
            color: '#fff',
            '&:hover': {
                opacity: 1
            }
        },
        marginBottom: '0.6rem'
    },
    selectDisplay: {
        style: {
            padding: '0.2rem'
        }
    },
    formControl: {
        marginBottom: '0.8rem'
    },
    textField: {},
    textFieldInput: {
        backgroundColor: '#7e654e!important',
        borderRadius: '0.6rem',
        borderColor: '#442415',
        borderWidth: '0.1rem',
        borderStyle: 'solid!important',
        opacity: '0.5!important',
        '&:hover': {},
        '&.MuiFilledInput-root': {
        }
    },
    textFieldInputSub: {
        padding: '0.5rem 1rem'
        // backgroundColor: '#7e654e',
        // borderRadius: '0.1rem',
    },
    submitButton: {
        backgroundColor: '#442415',
        padding: '0.5rem 1.2rem',
        fontWeight: 'bold',
        alignSelf: 'center'
    }
};

function JRsvp() {
    const [formValue, setFormValue] = useState({
        fullName: {
            isValid: false,
            text: ''
        },
        holyMatrimony: {
            willCome: false,
            numGuest: 2
        },
        reception: {
            willCome: true,
            numGuest: 3
        },
        wishes: ''
    });

    const handleChangeFormValue = (newFormValue) => {
        setFormValue({
            ...formValue,
            ...newFormValue
        });
    };

    return (
        <Box sx={styles.container}>
            <Box sx={styles.containerFlower}>
                <img
                    srcSet={`${imgFlower} 1x, ${imgFlower} 2x`} // Providing 1x and 2x for high-resolution displays
                    src={imgFlower}
                    alt={'couple'}
                    loading="lazy"
                    style={{
                        height: 'auto',
                        width: '100%',
                        maxWidth: '240px',
                        alignSelf: 'center',
                        objectFit: 'cover'
                    }}
                />
            </Box>
            <Box sx={styles.containerForm} component="form" noValidate autoComplete="off">
                <Box sx={styles.containerFormBackground}>
                    <img
                        srcSet={`${imgBackgroundContainer} 1x, ${imgBackgroundContainer} 2x`} // Providing 1x and 2x for high-resolution displays
                        src={imgBackgroundContainer}
                        alt={'background'}
                        loading="lazy"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover' // Crop the image to fit
                        }}
                    />
                </Box>
                <Box sx={{ ...styles.formControl, marginBottom: '2rem' }}>
                    <Typography gutterBottom sx={styles.formTitle}>
                        RSVP
                    </Typography>
                    <Typography gutterBottom sx={styles.formTitleSub}>
                        Your presence is the greates gift of all
                    </Typography>
                </Box>
                <Box sx={styles.formControl}>
                    <Typography gutterBottom sx={styles.fieldTitle}>
                        Full Name
                    </Typography>
                    <TextField
                        error={true}
                        helperText={formValue.fullName.isValid ? '' : 'Please enter your name'}
                        required
                        fullWidth
                        variant="filled"
                        placeholder="Type your  hhehehefull name"
                        sx={styles.textField}
                        value={formValue.fullName.text}
                        onChange={(event) => {
                            console.log('HEYY', event.target.validity.valid);
                            handleChangeFormValue({
                                fullName: {
                                    isValid: event.target.validity.valid,
                                    text: event.target.value
                                }
                            });
                        }}
                        slotProps={{
                            input: {
                                margin: 'dense',
                                required: true,
                                sx: styles.textFieldInput,
                                slotProps: {
                                    input: {
                                        sx: styles.textFieldInputSub
                                    }
                                }
                            },
                            htmlInput: {
                                pattern: '[A-Za-z ]+'
                            }
                        }}
                        size="small"
                    />
                </Box>

                <Box sx={styles.formControl}>
                    <Typography gutterBottom sx={styles.fieldTitle}>
                        Confirmation of Attendance
                    </Typography>

                    <Grid container spacing={8}>
                        <Grid size={6}>
                            <Typography sx={styles.eventType}>Holy Matrimony</Typography>
                            <Typography sx={styles.eventDate}>21st Dec 2024</Typography>
                            <ToggleButtonGroup
                                fullWidth
                                orientation="vertical"
                                value={formValue.holyMatrimony.willCome}
                                exclusive
                                onChange={(event, newValue) =>
                                    handleChangeFormValue({
                                        holyMatrimony: {
                                            ...formValue.holyMatrimony,
                                            willCome: newValue
                                        }
                                    })
                                }
                            >
                                <ToggleButton
                                    fullWidth
                                    value={true}
                                    selected={formValue.holyMatrimony.willCome}
                                    sx={styles.optionBar}
                                >
                                    <Typography sx={styles.optionText}>I'll be there</Typography>
                                </ToggleButton>
                                <ToggleButton
                                    fullWidth
                                    value={false}
                                    selected={!formValue.holyMatrimony.willCome}
                                    sx={styles.optionBar}
                                >
                                    <Typography sx={styles.optionText}>Can't come</Typography>
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Grid>
                        <Grid size={6}>
                            <Typography sx={styles.eventType}>Wedding Reception</Typography>
                            <Typography sx={styles.eventDate}>28th Dec 2024</Typography>
                            <ToggleButtonGroup
                                fullWidth
                                orientation="vertical"
                                value={formValue.reception.willCome}
                                exclusive
                                onChange={(event, newValue) =>
                                    handleChangeFormValue({
                                        reception: {
                                            ...formValue.reception,
                                            willCome: newValue
                                        }
                                    })
                                }
                            >
                                <ToggleButton
                                    fullWidth
                                    selected={formValue.reception.willCome}
                                    value={true}
                                    sx={styles.optionBar}
                                >
                                    <Typography sx={styles.optionText}>I'll be there</Typography>
                                </ToggleButton>
                                <ToggleButton
                                    selected={!formValue.reception.willCome}
                                    fullWidth
                                    value={false}
                                    sx={styles.optionBar}
                                >
                                    <Typography sx={styles.optionText}>Can't come</Typography>
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Grid>
                    </Grid>
                </Box>

                {/* Number of Guests */}
                <Box sx={styles.formControl}>
                    <Typography gutterBottom sx={styles.fieldTitle}>
                        Number of Guest(s)
                    </Typography>
                    <Grid container spacing={8}>
                        <Grid size={6}>
                            <Select
                                fullWidth
                                variant="filled"
                                value={formValue.holyMatrimony.numGuest}
                                onChange={(event) =>
                                    handleChangeFormValue({
                                        holyMatrimony: {
                                            ...formValue.reception,
                                            numGuest: event.target.value
                                        }
                                    })
                                }
                                sx={styles.optionBar}
                                SelectDisplayProps={styles.selectDisplay}
                            >
                                {[1, 2, 3, 4].map((num) => (
                                    <MenuItem key={num} value={num}>
                                        {num}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid size={6}>
                            <Select
                                value={formValue.reception.numGuest}
                                fullWidth
                                variant="filled"
                                onChange={(event) =>
                                    handleChangeFormValue({
                                        holyMatrimony: {
                                            ...formValue.reception,
                                            numGuest: event.target.value
                                        }
                                    })
                                }
                                sx={styles.optionBar}
                                SelectDisplayProps={styles.selectDisplay}
                            >
                                {[1, 2, 3, 4].map((num) => (
                                    <MenuItem key={num} value={num}>
                                        {num}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                    </Grid>
                </Box>

                {/* Wishes */}
                <Box sx={{ ...styles.formControl, marginBottom: '2rem' }}>
                    <Typography gutterBottom sx={styles.fieldTitle}>
                        Wishes
                    </Typography>
                    <TextField
                        sx={styles.textField}
                        fullWidth
                        variant="filled"
                        placeholder="Type your wishes"
                        multiline
                        rows={3}
                        value={formValue.wishes}
                        onChange={(event) => {
                            handleChangeFormValue({
                                wishes: event.target.value
                            });
                        }}
                        slotProps={{
                            input: {
                                margin: 'dense',
                                required: true,
                                sx: { ...styles.textFieldInput, ...styles.textFieldInputSub },
                                slotProps: {
                                    input: {
                                        sx: { ...styles.textFieldInputSub, padding: '0' }
                                    }
                                }
                            }
                        }}
                        size="small"
                    />
                </Box>

                {/* Submit Button */}
                <Box
                    sx={{
                        ...styles.formControl,
                        width: '100%',
                        textAlign: 'center',
                        marginBottom: 0
                    }}
                >
                    <Button variant="contained" sx={styles.submitButton}>
                        Submit
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default JRsvp;
