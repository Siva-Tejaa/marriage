import React from 'react';
import EventTimeBG from "../../assets/EventTimeBG.png"
import CustomQuote from "../../assets/CustomQuote.png"

const Quotation = () => {
  return (
    <div className='bg-[#f4ddc0] flex flex-col items-center justify-center p-8 mb-48'>
        {/* <p className='absolute text-center text-white' style={{ fontFamily: "'Signika Negative', sans-serif" }}>Marriages are made in heaven, but celebrated on Earth,<br/> the unity of two unknown souls, written right from birth.</p>
        <img className='w-[40rem]' src={EventTimeBG} alt='bg-image'/> */}
        <img className='w-[25rem] max-w-none laptop:w-[40rem]' src={CustomQuote} alt='bg-image'/>
    </div>
  )
}

export default Quotation