import React, { useState } from 'react'

interface Props{
  color:string,
  event : (value:number)=>void
};

const Range:React.FC<Props> = ({color,event:changeRangeHandler}) => {

  const updateCirclePositionHandler = (e:React.SyntheticEvent) =>{
    const target = e.target as HTMLInputElement;
    changeRangeHandler(parseFloat(target.value) );
  }
  const updateRangeBgHandler = () =>{
    switch(color){
      case 'blue':
        return 'linear-gradient(to right, #51a9f0,#0d3991)';
      default :
        return 'linear-gradient(to right, #51f061,#910d0d)';
    }
  }
  return (
    <div className='w-full min-h-[30px] rounded-[0.3rem] relative'>
        <input id="disabled-range" onChange={updateCirclePositionHandler} type="range" min={0} max={100} style={{backgroundImage:updateRangeBgHandler()}}  className="w-full  h-[23px]  rounded-[0.3rem] appearance-none cursor-pointer dark:bg-gray-700" />
    </div>
  )
}

export default Range