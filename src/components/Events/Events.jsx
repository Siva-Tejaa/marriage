import React from 'react';
import right_Small_design from "../../assets/right_small_design.png";
import left_Small_design from "../../assets/left_small_design.png";
import CountDownTimer from './CountDownTimer';

const Events = () => {
  return (
    <section className='bg-orange-50 p-2 h-[100svh] flex flex-col items-center justify-center'>
        <div className='flex items-start'>
            <img src={left_Small_design} alt="left Design" style={{filter:'drop-shadow(1px 1px 3px #0e0e0e)'}}/>
            <p className='text-xl font-extrabold mx-4 text-center laptop:text-3xl' style={{ fontFamily: "'Signika Negative', sans-serif" }}>Wedding Events Schedules</p>
            <img src={right_Small_design} alt="right-design" style={{filter:'drop-shadow(1px 1px 3px #0e0e0e)'}}/>
        </div>
        {/* <div className='flex flex-col items-center justify-center mt-3'>
          <p className='text-lg'>Friday, 20th March 2026</p>
          <p className='text-lg'>SV Kalyana Mandapam, Nellore.</p>
        </div> */}
        <CountDownTimer/>
        <p className='text-lg text-center max-w-[40rem]'>With respect and love, we invite guests to attend our wedding reception which will be held on :</p>
    </section>
  )
}

export default Events