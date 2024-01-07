import { faAngleLeft, faAngleRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { daysLetters, daysOfCurrentMonth, monthsAbbreviated, nextMonthDays, previousMonthDays } from './CalendarData'

interface Props{
    startDay:number,
    endDay:number,
    setStartDay:React.Dispatch<React.SetStateAction<number>>,
    setEndDay:React.Dispatch<React.SetStateAction<number>>,
    currentDate:Date,
    currentMonth:number,
    setCurrentMonth:React.Dispatch<React.SetStateAction<number>>,
    currentYear:number,
    setCurrentYear:React.Dispatch<React.SetStateAction<number>>,
    setCurrentDate:React.Dispatch<React.SetStateAction<Date>>,
}

const CalendarPick:React.FC<Props> = ({startDay,endDay,setStartDay,setEndDay,currentDate,currentMonth,setCurrentMonth,currentYear,setCurrentYear,setCurrentDate}) => {

    const setPreviousMonth = () =>{
        if(currentMonth > 0){
            setCurrentMonth(currentMonth - 1)
        }else{
            setCurrentMonth(11)
            setCurrentYear(currentYear - 1)
        }
    }
    console.log('currentMonth:',currentMonth)
    const setNextMonth = () =>{
        if(currentMonth < 11){
            setCurrentMonth(currentMonth + 1)
        }else{
            setCurrentMonth(0)
            setCurrentYear(currentYear + 1)
        }
    }
    const setDayHandler = (day:any) => {
        if(startDay>0){
            if(startDay <= day){
                setEndDay(day)
            }
        }else{
            setStartDay(day);

        }
    }
    
    
    return (
        <div className=' w-[300px] bg-white '>
            <div className="flex justify-between text-[1.2rem] items-center">
                <FontAwesomeIcon onClick={setPreviousMonth} className='cursor-pointer' icon={faAngleLeft}/>
                {monthsAbbreviated[currentMonth]}
                {currentYear}
                <FontAwesomeIcon onClick={setNextMonth} className='cursor-pointer' icon={faAngleRight}/>
            </div>
            <div className="grid gap-y-[0.5rem] grid-cols-columns3 ">
                {daysLetters.map((day:string,index)=><p className= ' text-center' key={index}>{day}</p>)}
                {previousMonthDays(currentDate,currentMonth,currentYear).map(day =><div   className='text-[#4b4b4b61] cursor-pointer text-center'>{day}</div>)}
                {daysOfCurrentMonth(currentMonth,currentYear).map((date:number) =>
                <div  onClick={()=>setDayHandler(date)}
                     className={`${(date.toString() === startDay.toString() || date.toString() === endDay.toString()) && startDay !== endDay ?
                         'bg-black text-white rounded-full ' :
                         date > startDay && date < endDay ?
                         'bg-[#4b4b4b] text-white rounded-full' :
                          date === startDay && startDay === endDay ? 'bg-activeBlue text-white rounded-full'
                         : 
                          'text-[#4b4b4b]'}
                         text-center w-[27px] h-[27px] p-[0.2rem] flex justify-center items-center cursor-pointer`}key={date}>{date}</div>)}
                {nextMonthDays(currentDate,currentMonth,currentYear).length !== 7 &&  nextMonthDays(currentDate,currentMonth,currentYear).map((day:number) => <p  className='cursor-pointer text-[#4b4b4b61] text-center'>{day}</p>)}
            </div>
        </div>
    )
}

export default CalendarPick