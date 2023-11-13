import React from 'react';
import { AiTwotoneHome } from "react-icons/ai";
import { BsCalendar2EventFill } from "react-icons/bs";
import { MdPeopleAlt } from "react-icons/md";
import { IoMdPhotos } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Header = () => {
  return (
    <header className='fixed bottom-4 text-slate-400 flex items-center justify-center w-full' style={{filter:'drop-shadow(1px 1px 3px #0e0e0e)'}}>
        <nav className='flex items-center justify-between gap-5 bg-white p-3 pb-1 px-4 rounded-full'>
            <div className='flex flex-col items-center justify-center'>
                <AiTwotoneHome/>
                <p className='text-sm'>Home</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <BsCalendar2EventFill/>
                <p className='text-sm'>Events</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <MdPeopleAlt/>
                <p className='text-sm'>Contact</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <IoMdPhotos/>
                <p className='text-sm'>Gallery</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <FaLocationDot/>
                <p className='text-sm'>Venue</p>
            </div>
        </nav>
    </header>
  )
}

export default Header