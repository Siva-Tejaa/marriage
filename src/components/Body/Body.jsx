import React from 'react';

import Marriage_Banner from "../../assets/Marriage_Banner.jpg"

const Body = () => {

  const downloadICS = () => {
    const event = {
      summary: 'Event Summary',
      location: 'Event Location',
      description: 'Event Description',
      start: '20231115T120000', // Format: YYYYMMDDTHHmmss
      end: '20231115T140000',   // Format: YYYYMMDDTHHmmss
    };

    const calendarEvent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'BEGIN:VEVENT',
      `SUMMARY:${event.summary}`,
      `LOCATION:${event.location}`,
      `DESCRIPTION:${event.description}`,
      `DTSTART:${event.start}`,
      `DTEND:${event.end}`,
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\n');

    const element = document.createElement('a');
    const file = new Blob([calendarEvent], { type: 'text/calendar' });
    element.href = URL.createObjectURL(file);
    element.download = 'event.ics';
    element.click();
  };

  return (
    <div className='text-white text-center flex flex-col items-center justify-end bg-[center_center] bg-no-repeat bg-[initial] bg-cover h-[37rem]' style={{backgroundImage: `url(${Marriage_Banner})`, textShadow: '1px 1px 3px #0e0e0e'}}>
      <p>Wedding Invitation For</p>
      <p className='text-3xl laptop:text-4xl' style={{ fontFamily: "'Dancing Script', cursive" }}>Virat Kohli & Anushka Sharma</p>
      <p className='font-medium text-xl mb-32' style={{ fontFamily: "'Signika Negative', sans-serif" }}>12 - 04 - 2026</p>
    </div>
  )
}

export default Body