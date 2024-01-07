import {  IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

interface Props{
    text:string,
    backgroundColor:string,
    event:()=>void,
    disable?:boolean
    icon?:boolean,
    faIcon?:IconProp,
}

const Button:React.FC<Props> = ({text,backgroundColor,event,disable,icon,faIcon}) => {

  const setBackgroundHandler = () =>{
        switch(backgroundColor){
            case 'blue':
              return 'bg-buttonBlue hover:bg-blueText';
            case 'pink' :
              return 'bg-buttonPink hover:bg-pinkText';
            default:
              return 'bg-buttonBlue hover:bg-blueText';
        }
    }

  return (
    <button onClick={event} disabled={disable} className={`${setBackgroundHandler()} w-full py-3 px-2 justify-center transition-all text-white  ${disable ? '' : 'cursor-pointers'} flex  rounded-[0.6rem]`}>
      {text}
      {icon && faIcon && <FontAwesomeIcon className='mx-2' icon={faIcon}/>}
    </button>
  )
}

export default Button