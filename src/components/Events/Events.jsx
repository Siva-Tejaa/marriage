import React from 'react';
import right_Small_design from "../../assets/right_small_design.png";
import left_Small_design from "../../assets/left_small_design.png";
import CountDownTimer from './CountDownTimer';
import EventTimeBG from "../../assets/EventTimeBG.png";

const Events = () => {

  const eventDetails = [
    {
      id:1,
      title:"Haldi",
      date:"19 March 2026",
      time:"09:00AM",
      address:"Main Road, North Mopur",
      city:"Nellore",
      state:"Andhra Pradesh",
      pin:524315,
      location:"http link"
    },
    {
      id:2,
      title:"Sangeet",
      date:"19 March 2026",
      time:"08:00PM",
      address:"Main Road, North Mopur",
      city:"Nellore",
      state:"Andhra Pradesh",
      pin:524315,
      location:"http link"
    },
    {
      id:3,
      title:"Wedding Ceremony",
      date:"20 March 2026",
      time:"11:18AM",
      address:"SV Kalyana Mandapam",
      city:"Nellore",
      state:"Andhra Pradesh",
      pin:524315,
      location:"http link"
    },
    {
      id:4,
      title:"Reception Party",
      date:"21 March 2026",
      time:"09:00PM",
      address:"Main Road, North Mopur",
      city:"Nellore",
      state:"Andhra Pradesh",
      pin:524315,
      location:"http link"
    },
  ]

  return (
    <section className='bg-orange-50 p-2 pt-5 flex flex-col items-center justify-center'>
        <div className='flex items-start'>
            <img src={left_Small_design} alt="left Design" style={{filter:'drop-shadow(1px 1px 3px #0e0e0e)'}}/>
            <p className='text-xl font-extrabold mx-4 text-center laptop:text-3xl' style={{ fontFamily: "'Signika Negative', sans-serif" }}>Wedding Events Schedules</p>
            <img src={right_Small_design} alt="right-design" style={{filter:'drop-shadow(1px 1px 3px #0e0e0e)'}}/>
        </div>
        <CountDownTimer/>
        <p className='text-base text-center max-w-[40rem]'>With respect and love, we invite guests to attend our wedding reception which will be held on :</p>
        <div className='grid grid-cols-[repeat(1,1fr)] items-center justify-center gap-8 my-4 laptop:grid laptop:grid-cols-[repeat(2,1fr)]'>

        {
          eventDetails.map((event) => (
            <div key={event?.id} className='flex flex-col items-center justify-center gap-4 p-2 rounded-md bg-[#f4ddc0] h-64 min-w-[21rem] max-w-[25rem] flex-[0_0_50%]'>
              <div className='flex items-center justify-center'>
                <div className='w-16 h-[1px] bg-[#d19342]'></div>
                <p className='mx-4 text-xl text-[#d19342] text-center laptop:text-2xl' style={{ fontFamily: "'Dancing Script', cursive" }}>{event?.title}</p>
              <div className='w-16 h-[1px] bg-[#d19342]'></div>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <p className='absolute text-center text-white' style={{ fontFamily: "'Signika Negative', sans-serif" }}>{event?.date} | {event?.time}</p>
                <img src={EventTimeBG} alt="bg-image" className='w-72'/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[#d19342] text-center' style={{ fontFamily: "'Signika Negative', sans-serif" }}>{event?.address}</p>
                <p className='text-[#d19342] text-center' style={{ fontFamily: "'Signika Negative', sans-serif" }}>{event?.city}, {event?.state} - {event?.pin}</p>
              </div>
              <div>
                <a href='https://maps.app.goo.gl/e3UZ9g9TvsGRbS1L6' target='_blank' className='p-[6px] px-2 rounded-lg bg-[#d19342] text-white cursor-pointer' style={{ fontFamily: "'Signika Negative', sans-serif" }}>View Location</a>
              </div>
            </div>
          ))
        }

        </div>
    </section>
  )
}

export default Events