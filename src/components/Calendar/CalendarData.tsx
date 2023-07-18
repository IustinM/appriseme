import { getDaysInMonth,getDay, lastDayOfMonth, getDate, getMonth, getYear } from "date-fns";

export const monthsDays = (currentDate:Date) => getDaysInMonth(currentDate);

export const daysLetters = ['Mon','Tue','Wen','Thu','Fri','Sat','Sun'];

export const daysOfCurrentMonth = (currentDate:Date) => {
    const dateArray = [];
    for(let i = 1;i<=monthsDays(currentDate);i++){
        dateArray.push(i);
    }
    return dateArray;
}

export const getDayDate = (year:number,month:number,day:number) => new Date(year,month,day);

export const getDayOfWeek = (currentYear:number,currentMonth:number,currentDay:number) => {

  console.log(new Date(2023,3,1));
  const dayLetter = getDay(getDayDate(currentYear,currentMonth,currentDay));
  return dayLetter;  
}

export const previousMonthDays = (currentDate:Date) =>{
    const datesData ={day:getDate(currentDate),month:getMonth(currentDate),year:getYear(currentDate)};
    console.log(datesData)
    const lastDay = getDate(lastDayOfMonth(getDayDate(datesData.year,datesData.month-1,1)));
    const firstDay = getDayOfWeek(datesData.year,datesData.month,1) -1;
    const previousMonthArray = [];
    for(let i = 0 ;i<= firstDay;i++){
        const dayDifference = lastDay - i;
        previousMonthArray.push(dayDifference);
    } 
    return previousMonthArray;
}

export const nextMonthDays = (currentDate:Date) =>{
    const datesData ={day:getDate(currentDate),month:getMonth(currentDate),year:getYear(currentDate)};
    const firstDay = getDate(lastDayOfMonth(getDayDate(datesData.year,datesData.month+1,1)));
    const lastDay = getDayOfWeek(datesData.year,datesData.month,datesData.day) -1;
    const nextMonthArray = [];
    for(let i = 0 ;i<= lastDay;i++){
        const dayDifference = firstDay+ i;
        nextMonthArray.push(dayDifference);
    } 
    console.log(nextMonthArray)
    return nextMonthArray;
}
