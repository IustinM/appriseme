import React, { useContext } from 'react'
import { HabbitContext } from '../../Context/HabbitContext'
import PieChart from '../utils/PieChart'

interface Props{
    interval:string,
    order?:string
}

const PieContainer:React.FC<Props> = ({interval,order}) => {

  const {habitData} = useContext(HabbitContext)!;

  //this function return  the data for habbit depending on the interval
  const returnHabitData = () => {
   
    switch (interval.toLocaleLowerCase()) { 
      case 'daily' :
        return habitData.daily;
      case 'weekly' : 
        return habitData.weekly;
      case 'monthly' : 
        return habitData.monthly;
      default:
        return [];
    }
  }
  return (
    <div className={`${order !== 'last' ? 'border-r-[1px]' : ''} flex justify-center flex-col items-center flex-1`} >
        <h2 className='text-[1.3rem] my-2'>{interval}:</h2>
        <PieChart data={returnHabitData()}/>
    </div>
  )
}

export default PieContainer