import { getDaysInMonth,getDay, lastDayOfMonth, getDate, getMonth, getYear } from "date-fns";

export const monthsDays = (currentDate:Date) => getDaysInMonth(currentDate);

export const daysLetters = ['Mon','Tue','Wen','Thu','Fri','Sat','Sun'];
export const monthsAbbreviated = ['Jan ', 'Feb ', 'Mar ', 'Apr ', 'May ', 'Jun ', 'Jul ', 'Aug ', 'Sep ', 'Oct ', 'Nov ', 'Dec '];




export const daysOfCurrentMonth = (currentMonth:number,currentYear:number) => {
    const getDaysMonth  = getDaysInMonth(new Date(currentYear,currentMonth,1,59,59,59))
    const dateArray = [];
    for(let i = 1;i<=getDaysMonth;i++){
        dateArray.push(i);
    }
    return dateArray;
}

export const getDayDate = (year:number,month:number,day:number) => new Date(year,month,day);

export const getDayOfWeek = (currentYear:number,currentMonth:number,currentDay:number) => {
  const weekDay = getDay(getDayDate(currentYear,currentMonth,currentDay));
  console.log(weekDay)
  return weekDay;  
}

export const previousMonthDays = (currentDate:Date,currentMonth:number,currentYear:number) =>{
    const datesData ={day:getDate(currentDate),month:currentMonth,year:currentYear};
    const firstDay = getDay(getDayDate(datesData.year,datesData.month,1)) -1;
    const lastDay = getDate(lastDayOfMonth(getDayDate(datesData.year,datesData.month-1,1)));
    const previousMonthArray = [];
    for(let i = 0 ;i< firstDay;i++){
        const dayDifference = lastDay - i;
        previousMonthArray.push(dayDifference);
    } 
    return previousMonthArray;
}

export const nextMonthDays = (currentDate:Date,currentMonth:number,currentYear:number) =>{
    const datesData ={day:getDate(currentDate),month:currentMonth,year:currentYear};
    const lastDay = getDay(lastDayOfMonth(getDayDate(datesData.year,datesData.month,1)));
    const firstDay = getDay((getDayDate(datesData.year,datesData.month,1)));
    const dayDifference = firstDay === 0 ?6 - lastDay : 7 - lastDay;
    const nextMonthArray = [];
    for(let i = 0 ;i<dayDifference;i++){
        const dayDifference = 1+ i;
        nextMonthArray.push(dayDifference);
    } 
    return nextMonthArray;
}
