import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../utils/Button'
import Input from '../utils/Input'

const RegisterBody = () => {
  return (
    <div className='w-[320px] h-[450px] border-[1px] rounded-[0.3rem] border-textInputGrey'>
        <div className="flex justify-center">
            <h2 className="text-[1.2rem] mt-[1rem]">Register</h2>
        </div>
        <div className="w-[80%] mx-auto my-[1rem] ">
            <h4 className='mb-[0.3rem]'>Email:</h4>
            <Input inputId='emailLogin' labelText={'Please enter your email'} event={() =>{}}/>
            <h4 className='mb-[0.3rem] mt-[0.5rem]'>Username:</h4>
            <Input inputId='usernameLogin' labelText={'Please enter your username'} event={() =>{}}/>
            <h4 className='mb-[0.3rem] mt-[0.5rem]'>Password:</h4>
            <Input inputId='passwordLogin' labelText={'Please enter your password'} event={() =>{}}/>
        </div>
        <div className="flex flex-col items-end text-right w-[80%] mx-auto text-[0.9rem]">
            <p className="">If you already have an account </p>
            <Link className="text-pinkText underline" to={'/login'}>log in here.</Link>
        </div>
        <div className="flex justify-center w-full mt-[2rem]">
            <div className="w-[120px]">
                <Button text={'Sign up'} event={()=>{}} backgroundColor={'pink'} />
            </div>
        </div>
    </div>
  )
}

export default RegisterBody