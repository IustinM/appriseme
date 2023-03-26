import React from 'react'
import HeaderText from '../components/Homepage/HeaderText'
import Navigation from '../components/Homepage/Navigation'
import Bubble from '../components/utils/Bubble'

const Homepage = () => {
  return (
    <div className='min-h-[100vh] relative'>
        <Navigation/>
        <HeaderText/>
        <Bubble width='350' height='350' color='pink' top='10' right='30'/>
    </div>
  )
}

export default Homepage