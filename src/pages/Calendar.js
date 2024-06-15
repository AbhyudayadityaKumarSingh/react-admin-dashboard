import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);
const events = [
  {
    title: 'Event 1',
    start: new Date(),
    end: new Date(moment().add(1, 'days')),
  },
  // Add more events here
];

function CalendarPage() {
  return (
    <div style={{ height: '80vh' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%' }}
      />
    </div>
  );
}

export default CalendarPage;
