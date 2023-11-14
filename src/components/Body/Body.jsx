import React from 'react';

import Marriage_Banner from "../../assets/Marriage_Banner.jpg";
import right_date_design from '../../assets/right_date_design.png';
import left_date_design from '../../assets/left_date_design.png';

import Quote from './Quote';

const Body = () => {

  return (
    <>
      <div className='text-white text-center flex flex-col items-center justify-end bg-[center_center] bg-no-repeat bg-[initial] bg-cover h-[100svh] p-2' style={{backgroundImage: `url(${Marriage_Banner})`, textShadow: '1px 1px 3px #0e0e0e'}}>
        <p>Wedding Invitation For</p>
        <p className='text-3xl laptop:text-4xl' style={{ fontFamily: "'Dancing Script', cursive" }}>Virat Kohli & Anushka Sharma</p>
        <div className='flex items-center justify-center mb-20 mt-2'>
          <img src={left_date_design} alt="LeftDesign" style={{filter:'drop-shadow(1px 1px 3px #0e0e0e)'}}/>
          <div className='flex items-center justify-center flex-col'>
            <p className='font-medium text-xl px-4' style={{ fontFamily: "'Signika Negative', sans-serif" }}>20.03.2026</p>
            <p>Friday</p>
          </div>
          <img src={right_date_design} alt="RightDesign" style={{filter:'drop-shadow(1px 1px 3px #0e0e0e)'}}/>
        </div>
      </div>
      <Quote/>
    </>
    
  )
}

export default Body