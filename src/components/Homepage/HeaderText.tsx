import React from 'react'
import Button from '../utils/Button'

const HeaderText:React.FC = () => {
  return (
    <div className='w-[80%] mx-auto min-h-[60vh] flex flex-col justify-center'>
        <div className="text-[2rem] my-3 max-w-[550px] text-blackText">
            <p className='my-2'>Looking forward to a <span className='text-pinkText underline'>better</span> and <span className='text-blueText underline'>organised</span> life?</p>
            <p className='my-2'>Try now the best app that will help you to achive your scopes and dreams.</p>
            
        </div>
        <div className="w-[150px]">
            <Button text='Try now' backgroundColor='blue'/>
        </div>
    </div>
  )
}

export default HeaderText