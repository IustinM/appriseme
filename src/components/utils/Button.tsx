import React from 'react'

interface Props{
    text:string,
    backgroundColor:string
}

const Button:React.FC<Props> = ({text,backgroundColor}) => {

    const setBackgroundHandler = () =>{
        switch(backgroundColor){
            case 'blue':
                return 'bg-buttonBlue';
            case 'pink' :
              return 'bg-buttonPink';
            default:
              return 'bg-buttonBlue';

        }
    }

  return (
    <button className={`${setBackgroundHandler()} py-3 px-2 w-[120px] text-white rounded-[0.6rem]`}>{text}</button>
  )
}

export default Button