import React from 'react'
import Navigation from '../components/Homepage/Navigation'
import LoginBody from '../components/Login/LoginBody'

const Login:React.FC = () => {
  return (
    <div className=' min-h-[100vh] flex  '>
      <div style={{backgroundImage:'linear-gradient(to right, #2691F4,#0028B7 )'}} className="w-[40%] text-white flex flex-col justify-between ">
        <div className="m-10">
          <h1 className="text-[1.5rem] font-semibold">AppriseMe</h1>
          <h3 className='text-[3rem] font-bold my-6'>Welcome back,<br/>to your journey</h3>
          <p className='text-[1.4rem] font-medium w-[70%]'>You are there, the moment you have been waiting for all your life is almost here, just don’t give up, everything will work as it had been planned.</p>
        </div>
        <p className="text-center">© Powered by Iustin Morosanu</p>
      </div>
      <div className="flex w-[60%] justify-center items-center">
        <LoginBody/>
      </div>
    </div>
  )
}

export default Login