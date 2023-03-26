import React from 'react'

interface Props{
    text:string,
    backgroundColor:string
}

const Button:React.FC<Props> = ({text,backgroundColor}) => {

    // const setBackgroundHandler = () =>{
    //     switch(backgroundColor){
    //         case 'blue':
    //             return ''
    //     }
    // }

  return (
    <button className='bg-buttonBlue py-2 px-4 text-white rounded-[0.3rem]'>{text}</button>
  )
}

export default Button