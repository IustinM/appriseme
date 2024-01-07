import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getMonth, getYear } from 'date-fns'
import React, { useState } from 'react'
import Button from '../utils/Button'
import CalendarPick from './CalendarPick'

const Calendar = () => {

    //local state -->
    
    const [currentDate,setCurrentDate] = useState<Date>(new Date());
    const [startDay,setStartDay] = useState<number>(0);
    const [endDay,setEndDay] = useState<number>(0);
    const [currentMonth,setCurrentMonth] = useState<number>(getMonth(currentDate));
    const [currentYear,setCurrentYear] = useState<number>(getYear(currentDate));

    const submitHabitHandler = () =>{
      setStartDay(0);
      setEndDay(0);
     }
     const disableButtonHandler = () =>{
      return false;
     }
 

  return (
    <div className="mr-[1rem] rounded-">
    <CalendarPick startDay={startDay} endDay={endDay} setEndDay={setEndDay} currentDate={currentDate} setCurrentDate={setCurrentDate} setStartDay={setStartDay} currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} currentYear={currentYear} setCurrentYear={setCurrentYear}/>
    <div className="flex flex-col mt-5 ">
        <div className="flex">
            <div className="">
                <div className="flex items-center mb-2">                        
                    <FontAwesomeIcon className='w-[20px] mr-1 cursor-pointer h-[20px]' icon={faCircleInfo}/>
                    Start day:
                </div>
                <div className={`border-[1px] text-[0.9rem] cursor-pointer flex  items-center justify-center w-[110px] h-[35px] ${startDay > 0 ? 'text-black':'text-textInputGrey'} rounded-[0.3rem] border-black`}>
                {startDay > 0 ?  `${startDay}/${currentMonth}/${currentYear}` : 'dd/mm/yyyy'}
                </div>
            </div>
            <div className="mx-[1rem]">
                <div className="flex items-center mb-2 ">                        
                    <FontAwesomeIcon className='w-[20px] mr-1 cursor-pointer h-[20px]' icon={faCircleInfo}/>
                    End day:
                </div>
                <div className={`border-[1px] text-[0.9rem] cursor-pointer flex  items-center justify-center w-[110px] h-[35px] ${endDay > 0 ? 'text-black':'text-textInputGrey'} rounded-[0.3rem] border-black`}>
                {endDay > 0 ?  `${endDay}/${currentMonth}/${currentYear}` : 'dd/mm/yyyy'}
                </div>
            </div>
        </div>
        <div className="w-[200px] mt-[1rem]">
            <Button event={submitHabitHandler} text={'Reset interval'} disable={disableButtonHandler()} backgroundColor={'pink'}/>
        </div>
    </div>
</div>
  )
}

export default Calendar