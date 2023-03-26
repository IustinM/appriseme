import React from 'react'

interface Props{
    width:string,
    height:string,
    top:string,
    right:string,
    color:string
}

const Bubble:React.FC<Props> = ({top,right,color,width,height}) => {
    const backgroundColorHandler = ():string=>{
        switch(color){
            case 'blue':
                return 'radial-gradient( #2691F4,#1248B1 )'
            case 'pink':
                return 'radial-gradient( #F426BA,#B1128E )'
            default:
                return 'radial-gradient( #2691F4,#1248B1 )'
        }
    }
  return (
    <div style={{
        width:`${width}px`,
        height:`${height}px`,
        top:`${top}px`,
        right:`${right}px`,
        backgroundImage: backgroundColorHandler(),
    }}
    className='rounded-full absolute s z-[-1]'
    >

    </div>
  )
}

export default Bubble