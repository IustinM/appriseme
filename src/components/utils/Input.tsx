import React, { useState } from 'react'

interface Props{
    labelText:string,
    inputId:string,
}

const Input:React.FC<Props> = ({labelText,inputId}) => {

    const [activeInput,setActiveInput] = useState<boolean>(false);

    // handlers
    const setActiveLabelHandler = (e:React.SyntheticEvent) =>{
        const target = e.target as HTMLInputElement;
        if(target.value.length){
            setActiveInput(true);            
        }else{
            setActiveInput(false);
        }
    }
    
    return (
        <div className="border-[1px] relative rounded-[0.3rem] p-1  border-black">
            <label htmlFor={inputId} className={`absolute bg-white px-[0.1rem] text-[0.9rem] transition-all ${activeInput ? 'top-[-10px] text-[0.75rem] ' : 'top-[50%] translate-y-[-50%]'} text-textInputGrey`}>{labelText}</label>
            <input onChange={(e:React.SyntheticEvent)=> setActiveLabelHandler(e)} id={inputId} name={inputId} className='w-full outline-none' />
        </div>
    )
}

export default Input