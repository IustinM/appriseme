import React from 'react'
import Button from '../utils/Button'

const HeaderText:React.FC = () => {
  return (
    <div className='w-[80%] mx-auto min-h-[60vh] flex flex-col justify-center '>
      <h1 className="text-[2.5rem]">Discover & organise</h1>
        <div className="my-2 max-w-[550px] text-blackText text-[1.4rem]">
            <p className='my-2'>Looking forward to a better and organised life?</p>
            <p className='my-2'>Try now the best app that will help you to achive your scopes and dreams.</p>
        </div>
        <div className="h-[50px] flex mb-5">
            <input className='border-[1px] outline-none border-textInputGrey rounded-l-[0.6rem] text-[0.9rem] text-textInputGrey placeholder:text-textInputGrey px-2' placeholder='Type your email here'/>
            <button className='bg-buttonBlue text-white w-[120px] text-[0.9rem] rounded-r-[0.6rem]'>Sign up</button>
        </div>
        <Button text='View demo' backgroundColor='pink'/>
    </div>
  )
}

export default HeaderText