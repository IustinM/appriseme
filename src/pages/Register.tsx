import React from 'react'
import Navigation from '../components/Homepage/Navigation'
import LoginBody from '../components/Login/LoginBody'
import RegisterBody from '../components/Register/RegisterBody'

const Register:React.FC = () => {
  return (
    <div className=' min-h-[100vh] flex  '>
      <div style={{backgroundImage:'linear-gradient(to right, #EE18B2,#0028B7 )'}} className="w-[40%] text-white flex flex-col justify-between ">
        <div className="m-10">
          <h1 className="text-[1.5rem] font-semibold">AppriseMe</h1>
          <h3 className='text-[3rem] font-bold my-6'>Start your<br/>journey now</h3>
          <p className='text-[1.4rem] font-medium w-[70%]'>Discover the best posible way to increase your benefits in life and to get rid of the nagative parts of it.</p>
        </div>
        <p className="text-center">© Powered by Iustin Morosanu</p>
      </div>
      <div className="flex w-[60%] justify-center items-center">
        <RegisterBody/>
      </div>
    </div>
  )
}

export default Register