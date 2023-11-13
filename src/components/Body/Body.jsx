import React from 'react';

import Marriage_Banner from "../../assets/Marriage_Banner.jpg"
import Quotation from '../Quotation/Quotation';

const Body = () => {

  return (
    <>
      <div className='text-white text-center flex flex-col items-center justify-end bg-[center_center] bg-no-repeat bg-[initial] bg-cover h-[100svh]' style={{backgroundImage: `url(${Marriage_Banner})`, textShadow: '1px 1px 3px #0e0e0e'}}>
        <p>Wedding Invitation For</p>
        <p className='text-3xl laptop:text-4xl' style={{ fontFamily: "'Dancing Script', cursive" }}>Virat Kohli & Anushka Sharma</p>
        <div className='flex items-center justify-center mb-20 mt-2'>
          <img src="https://themes.sindevo.com/wedding-bells/images/swirl_left.png" alt="LeftDesign" style={{filter:'drop-shadow(1px 1px 3px #0e0e0e)'}}/>
          <p className='font-medium text-xl px-4' style={{ fontFamily: "'Signika Negative', sans-serif" }}>12.04.2026</p>
          <img src="https://themes.sindevo.com/wedding-bells/images/swirl_right.png" alt="RightDesign" style={{filter:'drop-shadow(1px 1px 3px #0e0e0e)'}}/>
        </div>
      </div>
      <Quotation/>
    </>
    
  )
}

export default Body