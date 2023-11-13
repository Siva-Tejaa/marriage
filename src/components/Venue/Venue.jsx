import React from 'react';
import right_Small_design from "../../assets/right_Small_design.png";
import left_Small_design from "../../assets/left_Small_design.png";

const Venue = () => {
  return (
    <section className='bg-orange-50 p-2 h-[100svh] flex justify-center'>
        <div className='flex items-start'>
            <img src={left_Small_design} alt="left Design" style={{filter:'drop-shadow(1px 1px 3px #0e0e0e)'}}/>
            <p className='text-2xl font-extrabold mx-4' style={{ fontFamily: "'Signika Negative', sans-serif" }}>Venue</p>
            <img src={right_Small_design} alt="right-design" style={{filter:'drop-shadow(1px 1px 3px #0e0e0e)'}}/>
        </div>
    </section>
  )
}

export default Venue