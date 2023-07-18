import React from 'react'
import { daysLetters, daysOfCurrentMonth, monthsDays, nextMonthDays, previousMonthDays } from './CalendarData'

const CalendarPick = () => {

    const currentDate = new Date();
    
    return (
        <div className=' w-[300px] bg-white '>
            <div className="grid grid-cols-columns3 ">
                {daysLetters.map((day:string,index)=><p key={index}>{day}</p>)}
                {previousMonthDays(currentDate).map(day =><div>{day}</div>)}
                {daysOfCurrentMonth(currentDate).map((date:number) =>
                    <div key={date}>{date}</div>
                    )}
                {nextMonthDays(currentDate).map((day:number) => <p>{day}</p>)}
            </div>
        </div>
    )
}

export default CalendarPick