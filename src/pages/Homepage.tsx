import React from 'react'
import HeaderText from '../components/Homepage/HeaderText'
import Navigation from '../components/Homepage/Navigation'
import Bubble from '../components/utils/Bubble'
import SpecialBubble from '../components/utils/SpecialBubble'

const Homepage = () => {
  return (
    <div className='min-h-[100vh] relative overflow-hidden'>
        <Navigation/>
        <HeaderText/>
        <div className="tall:block hidden">

        <Bubble width='250' height='250' color='pink' top={-80} right={-70}/>
        <Bubble width='300' height='300' color='pink' top={-80} right={530}/>
        <Bubble width='350' height='350' color='pink' top={100} right={170}/>
        {/* <div className="minxl:hidden block">
          <SpecialBubble width='350' height='350' color='pink' top={100} right={170}/>
        </div> */}
        <Bubble width='300' height='300' color='blue' bottom={-80} left={-20}/>
        <Bubble width='370' height='370' color='blue' bottom={2} left={500}/>
        <Bubble width='350' height='350' color='blue' bottom={-150} right={100}/>
        </div>
    </div>
  )
}

export default Homepage