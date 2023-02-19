import React, { useState } from 'react'
import { Box, List, ListItem, ListItemText, Typography, useTheme } from '@mui/material';
import FullCalendar from '@fullcalendar/react';
import { formatDate } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import Header from '../../components/Header';
import { tokens } from '../../theme';


const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentEvents, setCurrentEvents] = useState([]);

    const handleDateClick = (selectInfo) => {
        const title = prompt('Please enter a new title for your event');
        const calendarApi = selectInfo.view.calendar;
        calendarApi.unselect();

        if(title) {
            calendarApi.addEvent({
                id: `${selectInfo.dateStr}-${title}`,
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                alLDay: selectInfo.alLDay,
            });
        }
    };

    const handleEventClick = (clickInfo) => {
        if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
            clickInfo.event.remove();
        }
    };

    return (
        <Box m='20px'>
            <Header title='Календарь' subtitle='Добавьте события в своём календаре' />

            <Box display='flex' justifyContent='space-between'>
                {/* sidebar */}
                <Box flex='1 1 20%' backgroundColor={colors.primary[400]} p='15px' borderRadius='4px'>
                    <Typography variant='h5'> События </Typography>
                    <List>
                        {currentEvents.map((event) => 
                            <ListItem 
                                key={event.id} 
                                sx={{backgroundColor: colors.greenAccent[500], margin: '10px 0', borderRadius: '2px'}}
                            >
                                <ListItemText 
                                    primary={event.title} 
                                    secondary={
                                        <Typography>
                                            {formatDate(event.start, {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric',
                                            })}
                                        </Typography>
                                    }
                               />
                            </ListItem>
                        )}
                    </List>
                </Box>

                {/* caldendar */}
                <Box flex='1 1 100%' ml='15px' sx={{
                    '& .fc-list-day-cushion': {
                        backgroundColor: colors.primary[400],
                    },
                    '& .fc-event:hover': {
                        color: colors.primary[400],
                    },
                }}>
                    <FullCalendar 
                        height='75vh'
                        plugins={[
                            dayGridPlugin,
                            timeGridPlugin,
                            interactionPlugin,
                            listPlugin,
                        ]}
                        initialView='dayGridMonth'
                        headerToolbar={{
                            left: 'prev,next,today',
                            center: 'title',
                            right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
                        }}
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        select={handleDateClick}
                        eventClick={handleEventClick}
                        eventsSet={(events) => setCurrentEvents(events)}
                        initialEvents={[
                            {id: '1234', title: 'All-day-event', date: '2023-09-14'},
                            {id: '4321', title: 'Timed event', date: '2023-09-28'},
                        ]}
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default Calendar