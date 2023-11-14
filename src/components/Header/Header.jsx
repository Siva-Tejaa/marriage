import React,{useState} from 'react';
import { AiTwotoneHome } from "react-icons/ai";
import { BsCalendar2EventFill } from "react-icons/bs";
import { MdPeopleAlt } from "react-icons/md";
import { IoMdPhotos } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

import { Link } from 'react-router-dom';

const Header = () => {

    const navItems = [
        {
            id:1,
            name:"Home",
            icon:<AiTwotoneHome fontSize="1.3em"/>
        },
        {
            id:2,
            name:"Events",
            icon:<BsCalendar2EventFill fontSize="1.2em"/>
        },
        {
            id:3,
            name:"Contact",
            icon:<MdPeopleAlt fontSize="1.4em"/>
        },
        {
            id:4,
            name:"Gallery",
            icon:<IoMdPhotos fontSize="1.3em"/>
        },
        {
            id:5,
            name:"Venue",
            icon:<FaLocationDot fontSize="1.3em"/>
        }
    ]
    
    const[activenav, setActiveNav] = useState("Home");

  return (
    <header className='fixed bottom-4 flex items-center justify-center w-full z-[1]' style={{filter:'drop-shadow(1px 1px 3px #0e0e0e)'}}>
        <nav className='flex items-center justify-between gap-5 bg-white px-[1.20rem] pt-2 pb-1 rounded-full'>
            {
                navItems.map((nav) => (
                    <Link to={`/${nav?.name.toLowerCase()}`} key={nav?.id}>
                        <div className={activenav === nav?.name ? 'flex flex-col items-center justify-center cursor-pointer text-[#d19342]' : 'flex flex-col items-center justify-center cursor-pointer text-[#767676]'} onClick={() => setActiveNav(nav?.name)}>
                            {nav?.icon}
                            <p className='text-sm'>{nav?.name}</p>
                        </div>
                    </Link>
                ))
            }
        </nav>
    </header>
  )
}

export default Header