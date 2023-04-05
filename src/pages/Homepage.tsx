import React from 'react'
import HeaderText from '../components/Homepage/HeaderText'
import Navigation from '../components/Homepage/Navigation'
import Bubble from '../components/utils/Bubble'
import SpecialBubble from '../components/utils/SpecialBubble'

const Homepage = () => {
  return (
    <div className='min-h-[100vh]  relative overflow-hidden'>
        <Navigation/>
        <HeaderText/>
        <div className="tall:block hidden">
          <Bubble width='600' height='600' color='pink' top={50} right={-250}/>
          <Bubble width='600' height='600' color='blue' bottom={-350} left={12}/>
        </div>
      <div className="absolute right-[20%] bottom-0 ">© Powered by Iustin Morosanu</div>
    </div>
  )
}

export default Homepage