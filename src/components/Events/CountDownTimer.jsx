import React,{useState, useEffect} from 'react'

const CountDownTimer = () => {

  const endTime = new Date('March 20, 2026 12:25:45').getTime();
  const [currentTime, setCurrentTime] = useState(new Date().getTime());
  const gap = endTime - currentTime;

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const remainingDays = Math.floor(gap / days);
  const remainingHours = Math.floor((gap % days) / hours);
  const remainingMinutes = Math.floor((gap % hours) / minutes);
  const remainingSeconds = Math.floor((gap % minutes) / seconds);

  useEffect(() => {

    setTimeout(() => {
        setCurrentTime(new Date().getTime());
    }, 1000);

  },[currentTime])

  return (
    <div className='flex items-center justify-center gap-2 my-5 laptop:gap-5'>
        <div className='flex flex-col items-center justify-center p-3 bg-[#d19342] rounded-lg text-white w-20'>
            <p className='text-3xl laptop:text-4xl' style={{ fontFamily: "'Signika Negative', sans-serif" }}>{remainingDays}</p>
            <p className='text-sm'>Days</p>
        </div>
        <div className='flex flex-col items-center justify-center p-3 bg-[#d19342] rounded-lg text-white w-20'>
            <p className='text-3xl laptop:text-4xl' style={{ fontFamily: "'Signika Negative', sans-serif" }}>{remainingHours}</p>
            <p className='text-sm'>Hours</p>
        </div>
        <div className='flex flex-col items-center justify-center p-3 bg-[#d19342] rounded-lg text-white w-20'>
            <p className='text-3xl laptop:text-4xl' style={{ fontFamily: "'Signika Negative', sans-serif" }}>{remainingMinutes}</p>
            <p className='text-sm'>Minutes</p>
        </div>
        <div className='flex flex-col items-center justify-center p-3 bg-[#d19342] rounded-lg text-white w-20'>
            <p className='text-3xl laptop:text-4xl' style={{ fontFamily: "'Signika Negative', sans-serif" }}>{remainingSeconds}</p>
            <p className='text-sm'>Seconds</p>
        </div>
    </div>
  )
}

export default CountDownTimer