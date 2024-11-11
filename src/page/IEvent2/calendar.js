import React from 'react';

import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

import localeData from 'dayjs/plugin/localeData';
import weekday from 'dayjs/plugin/weekday';

import FavoriteIcon from '@mui/icons-material/Favorite';
import { Typography } from '@mui/material';
import { PickersDay } from '@mui/x-date-pickers';

// Extend dayjs with localeData to control the start of the week
dayjs.extend(localeData);
dayjs.extend(weekday);

// Set the start of the week to Sunday
dayjs.locale({
    ...dayjs.Ls.en, // Spread the default English locale settings
    weekStart: 1 // 1 = Monday
});

const styles = {
    calendar: {
        '& .MuiPickersDay-root': {}
    }
};

// Custom header component to replace the default calendar header
function CustomCalendarHeader() {
    return (
        <Typography
            sx={{
                fontFamily: 'Libre Baskerville',
                fontSize: '1rem',
                marginBottom: '0.8rem',
                textTransform: 'capitalize',
                fontWeight: 'bold'
            }}
        >
            December 2024
        </Typography>
    );
}

// Custom day component to replace each day cell
function CustomDay(pickersDayProps) {
    return (
        <PickersDay
            {...pickersDayProps}
            sx={{
                ...pickersDayProps.sx,
                font: 'Bookman Old Style',
                fontWeight: 'bold',
                // Custom styles for each day cell
                backgroundColor: pickersDayProps.selected ? '#4caf50' : undefined,
                color: pickersDayProps.selected ? '#fff' : undefined,
                // padding: 0,
                // margin: 0,
                borderRadius: '50%', // Make selected date circular
                '&:hover': {
                    backgroundColor: pickersDayProps.selected ? '#388e3c' : '#e0e0e0'
                }
            }}
        />
    );
}

function IEvent2Calendar() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateCalendar']}>
                <DemoItem>
                    <DateCalendar
                        views={['day']}
                        defaultValue={dayjs('2024-12-28')}
                        readOnly
                        sx={styles.calendar}
                        slots={{
                            calendarHeader: CustomCalendarHeader, // Replace the header with a custom component
                            day: CustomDay // Replace each day with a custom component
                        }}
                    />
                </DemoItem>
            </DemoContainer>
        </LocalizationProvider>
    );
}

export default IEvent2Calendar;
