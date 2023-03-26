import React from 'react'
import Button from '../utils/Button'

const HeaderText:React.FC = () => {
  return (
    <div className='w-[80%] mx-auto min-h-[80vh] flex flex-col justify-center'>
        <div className="text-[1.2rem] my-3">
            <p className='my-2'>Try now the best app to organise your time</p>
            <p className='my-2'>Made for the best possible experince</p>
        </div>
        <div className="w-[150px]">
            <Button text='Try now' backgroundColor='blue'/>
        </div>
    </div>
  )
}

export default HeaderText