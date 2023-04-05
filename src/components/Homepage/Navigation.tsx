import React from 'react'
import { Link } from 'react-router-dom';
import Icon from '../../assets/Icon.png';
import Button from '../utils/Button';

interface Props{
  hideLogin?:boolean,
  hideSignup?:boolean
}

const Navigation:React.FC<Props> = ({hideLogin,hideSignup}) => {
  return (
    <div className='flex justify-between  text-blackText'>
        <div className="w-[80%] mx-auto flex">
          <div className='flex items-center w-[80%]  min-h-[10vh] '>
            <div className="w-[55px] h-[55px] rounded-[0.6rem] bg-blue-600"></div>
            <p className='text-[1.3rem] mx-2'>AppriseMe</p>
          </div>
          <div className=" mr-[10rem] flex flex-grow items-center  ">
            {
              !hideLogin &&
              <Link to={'/login'} className='text-[1.1rem] w-[100px]'>
                Log in
              </Link>
            }
            {
              !hideSignup &&
              <Link to={'/register'} className='text-[1.1rem] w-[100px]'>
                <Button text='Sign up' backgroundColor=''/>
              </Link>
            }
          </div>
        </div>
    </div>
  )
}

export default Navigation