import React, { useContext, useState } from 'react'
import Input from '../utils/Input'
import Select from '../utils/Select'
import { faCircleInfo, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Range from '../utils/Range';
import Button from '../utils/Button';
import { intervals, typesOfHabits } from './data';
import { HabbitContext, habitData } from '../../Context/HabbitContext';
import CalendarPick from '../Calendar/CalendarPick';
import Calendar from '../Calendar/Calendar';

interface dates{
    startDay:string,
    endDay:string
}
const AddHabbit = () => {

    //context state
    const {habitData,setHabitData,setHideAddHabbit} = useContext(HabbitContext)!;

    //local state -->
    const [name,setName] = useState<string>('');
    const [interval,setInterval] = useState<string>('');
    const [habitType,setHabitType] = useState<string>('');
    const [startDay,setStartDay] = useState<number>(0);
    const [endDay,setEndDay] = useState<number>(0);

    const [dates,setDates] = useState<dates>({
        startDay:'',
        endDay:'',
    });
    const [intensity,setIntensity] = useState<number>(50);
    const [pleasure,setPleasure] = useState<number>(50);
    //<-- local state
    const returnHabitData = (dataValue:any) => {
        switch (interval) { 
          case 'daily' :{
            console.log('here')
              setHabitData((data:any) => {
                return ({
                    ...data,
                    daily:[...data.daily,dataValue]
                })
            })
              return ;
            }
          case 'weekly' : 
            {
                setHabitData((data:any) => {
                return ({
                    ...data,
                    weekly:[...data.weekly,dataValue]
                })
            })
                return ;
            }
          case 'monthly' : 
            {
                setHabitData((data:any) => {
                return ({
                    ...data,
                    monthly:[...data.monthly,dataValue]
                })
            })
                return ;
            }
          default:
            return [];
        }
      }
    const submitHabitHandler = () =>{
       const dataValue = {
            name:name,
            interval:interval,
            habitType:habitType,
            dates:null,
            intensity:intensity,
            pleasure:pleasure
        }
        returnHabitData(dataValue);
    }
    const disableButtonHandler = () =>{
        if(name.length > 0 && interval.length > 0 && habitType.length > 0&& intensity > 0 && pleasure > 0){
            return false;
        }else{
            return true
        }
    }

    return (
    <div className='fixed backdrop-blur-sm z-[51]  bg-[#00000054] flex items-center justify-center min-h-[100vh] w-full'>
        <div className=" relative rounded-[0.5rem] shadow-lg p-[2rem] bg-white">
            <div onClick={() => setHideAddHabbit(false)} className="absolute top-[1rem] right-[2rem] ">
                <FontAwesomeIcon className='w-[25px] h-[25px] my-1 cursor-pointer' icon={faXmark} />
            </div>
            <h2 className=" text-[1.5rem] py-3 my-2">Add habit</h2>
            <div className="flex ">
                <Calendar/>
                <div className="border-r-[1px] shadow-md mx-3"></div>
                <div className="bg-white ml-[1rem]  w-[300px]">
                    <div className="">
                        <Input labelText={'Habbit name'} inputId={'habbit_name'} event={(value:string) => setName(value)}/>
                        <div className="my-4"></div>
                        <Select options={intervals} labelText={'Select interval'} selectId={''} event={(value:string) => setInterval(value)}/>
                        <div className="my-4"></div>
                        <Select options={typesOfHabits} labelText={'Select habit type'} selectId={''} event={(value:string) => setHabitType(value)}/>
                    
                        <div className="">
                            <p className='my-2'>Intensity level</p>
                            <Range color='normal' event={(value: number) =>{setIntensity(value)}}/>
                        </div>
                        <div className="">
                            <p className='my-2'>Pleasure level</p>
                            <Range color='blue' event={(value:number) =>{setPleasure(value)}}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center  mt-5">
                <div className="w-[150px]">
                     <Button event={submitHabitHandler} text={'Add habit'} disable={disableButtonHandler()} backgroundColor={'pink'}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddHabbit