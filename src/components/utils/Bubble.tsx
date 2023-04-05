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

const Bubble:React.FC<Props> = ({top,right,bottom,left,color,width,height}) => {
  
    // local states -->
    //this state hold and updates the bubble position
    const [bubblePosition,setBubblePosition] = useState<bubblePosType>({x:0,y:0});
    // this state decides then the bubble will reverse position
    const [bubbleUpates,setBubbleUpdates] = useState<number>(0);
    //this state holds  the direction that the bubble will drive
    const [bubbleDirection,setBubbleDirection] =useState<bubbleSpeedInterf>({directions:['top','left'],speed:'fast'})
    //<-- local states 


    const backgroundColorHandler = ():string=>{
        switch(color){
            case 'blue':
                return 'linear-gradient( #2691F4,#1248B1 )'
            case 'pink':
                return 'linear-gradient( #F426BA,#B1128E )'
            default:
                return 'linear-gradient( #2691F4,#1248B1 )'
        }
    }

    //this functions check if 2 words contains same characters (to avoid the problem if the word is topleft or lefttop) 
    const checkIfStringsContainSameCharacters = (string1:string, string2:string) => {
        return new Set(string1).size === new Set(string1 + string2).size;
    }

    const decideBubbleDirectionHandler = ():bubblePosType =>{
;
        const direction = bubbleDirection.directions.join('');
        if(checkIfStringsContainSameCharacters('topleft',direction)){
            return {y:1,x:-1};
            
        }
        else if(checkIfStringsContainSameCharacters('topright',direction)){
            return {y:1,x:1};
        }
        else if(direction === 'top'){
            return {y:1,x:0};
        }
        else if(direction === 'right'){
            return {y:0,x:1};
        }
        else if(direction === 'left'){
            return {y:0,x:-1};
        }
        else if(direction === 'bottom'){
            return {y:-1,x:0};
        }
        else if(checkIfStringsContainSameCharacters('bottomleft',direction)){
            return {y:-1,x:-1};
        }
        else if(checkIfStringsContainSameCharacters('bottomright',direction)){
            return {y:-1,x:1};
        }
        else{
            return {y:0,x:0};
        }
    }
    const updateBubblePostitionHandler = () =>{
        const bubblePositions = document.getElementById('bubble')?.getBoundingClientRect();
        console.log(bubblePositions?.top,window.innerWidth)
        const positions = decideBubbleDirectionHandler();
        setBubblePosition((position:bubblePosType)=>({x:position.x + positions.x,y:position.y +positions.y}))

    }
    useEffect(()=>{
        updateBubblePostitionHandler();
         setTimeout(()=>{
        },100)
    },[])
  return (
    <>
    { top ?
        right ?
        <div style={{
        width:`${width}px`,
        height:`${height}px`,
        top:`${top + bubblePosition.y}px`,
        right:`${right + bubblePosition.x}px`,
        backgroundImage: backgroundColorHandler(),
        }}
        id="bubble"
        className='rounded-full absolute s z-[-1]'
        >
        </div>

        :
        left &&
        <div style={{
        width:`${width}px`,
        height:`${height}px`,
        top:`${top + bubblePosition.y}px`,
        right:`${left + bubblePosition.x}px`,
        backgroundImage: backgroundColorHandler(),
        }}
        id="bubble"
        className='rounded-full absolute s z-[-1]'
        >
        </div>
        
    :  bottom ?  

        right ?
         <div style={{
        width:`${width}px`,
        height:`${height}px`,
        bottom:`${bottom + bubblePosition.y}px`,
        right:`${right + bubblePosition.x}px`,
        backgroundImage: backgroundColorHandler(),
        }}
        id="bubble"
        className='rounded-full absolute s z-[-1]'
        >
        </div>

        : left &&
        <div style={{
        width:`${width}px`,
        height:`${height}px`,
        bottom:`${bottom + bubblePosition.y}px`,
        left:`${left + bubblePosition.x}px`,
        backgroundImage: backgroundColorHandler(),
        }}
        id="bubble"
        className='rounded-full absolute s z-[-1]'
        >
        </div>
    :'salut'}
    </>
  )
}

export default Bubble