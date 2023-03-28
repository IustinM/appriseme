import React, { useEffect, useRef, useState } from 'react'

interface Props{
    width:string,
    height:string,
    color:string
    top?: number,
    bottom?: number,
    right?: number,
    left?: number,
}
interface bubblePosType{
    x:number,
    y:number
}
interface bubbleSpeedInterf{
    directions:string[],
    speed:string
}

const SpecialBubble:React.FC<Props> = ({top,right,bottom,left,color,width,height}) => {
  

  return (

        <div style={{
            width:`${width}px`,
            height:`${height}px`,
            top:'50%',
            left:'50%',
            transform :"translate(-10%,-50%)"
        }}
        id="bubble"
        className='rounded-full absolute s z-[-1] overflow-auto rotate-45'
        >
            <div
            style={{
                backgroundImage:'radial-gradient( #F426BA,#B1128E )',
                width:'100%',
                height:'50%'
            }}
            className=""></div>
            <div
            style={{
                backgroundImage:'radial-gradient( #2691F4,#1248B1 )',
                width:'100%',
                height:'50%'
            }}
            className=""></div>
        </div>

        
  )
}

export default SpecialBubble